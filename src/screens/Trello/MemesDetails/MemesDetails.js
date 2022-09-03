import { format, parseISO, fromUnixTime } from 'date-fns';
import { useState, useEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { memesStyle } from '../../../styles/memesStyles';

import ptBR from 'date-fns/locale/pt-BR';
const API = "https://e4c7-177-73-98-225.ngrok.io";

export function MemesDetails({navigation, route}) {
    const {id} = route.params;
    const [getMeme, setMeme] = useState(null);

    function getEle() {
        fetch(API+"/memes/" + id)
          .then(async (response) => {
            const data = await response.json();
            setMeme(data);
          })
          .catch((error) => {
            alert("Houve um erro ao tentar obeter o conteúdo.");
            console.log(error);
          })
    }

    function back() {
        navigation.navigate("MemesList")
    }
  
    useEffect(() => {
      getEle();
    })
  
    return (
    <SafeAreaView style={memesStyle.container}>
        <View style={{alignSelf: "flex-start", marginTop: "5%", marginHorizontal: "3%"}}>
            <Icon name="west" onPress={back}/>
        </View>
        <View style={{...memesStyle.card, ...memesStyle.detailsCard}}>
            {getMeme && (
              <>
                <Text style={{...memesStyle.detailTx, ...memesStyle.likes}}>{getMeme.likes} curtidas!</Text>
                <Image source={{uri: getMeme.url}} style={memesStyle.DetailsImg} resizeMode="stretch"/>
                <View style={memesStyle.textDiv}>
                    <Text style={memesStyle.detailTx}>Autor: {getMeme.author}</Text>
                    <Text style={memesStyle.detailTx}>Data: {format(fromUnixTime(getMeme.date), "dd 'de' MMMM  'de' yyyy", {locale: ptBR})}</Text>
                    <Text style={memesStyle.detailTx}>{getMeme.share} compartilhamentos!</Text>
                </View>
              </>
            )}
        </View>
    </SafeAreaView>
  );
}