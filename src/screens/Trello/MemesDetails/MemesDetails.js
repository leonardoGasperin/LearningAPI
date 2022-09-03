import { format, parseISO } from 'date-fns';
import { useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { memesStyle } from '../../../styles/memesStyles';

const API = "https://08b0-177-73-98-225.ngrok.io";

export function MemesDetails({navigation, route}) {
    const {id} = route.params;
    const [getMeme, setMeme] = useState(0);

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

    getEle();
  return (
    <SafeAreaView style={memesStyle.container}>
        <View style={{alignSelf: "flex-start", marginTop: "5%", marginHorizontal: "3%"}}>
            <Icon name="west" onPress={back}/>
        </View>
        <View style={{...memesStyle.card, ...memesStyle.detailsCard}}>
            <Text style={{...memesStyle.detailTx, ...memesStyle.likes}}>{getMeme.likes} curtidas!</Text>
            <Image source={{uri: getMeme.url}} style={memesStyle.DetailsImg} resizeMode="stretch"/>
            <View style={memesStyle.textDiv}>
                <Text style={memesStyle.detailTx}>Autor: {getMeme.author}</Text>
                <Text style={memesStyle.detailTx}>Data: {getMeme.date}</Text>
                <Text style={memesStyle.detailTx}>{getMeme.share} compartilhamentos!</Text>
            </View>
        </View>
    </SafeAreaView>
  );
}