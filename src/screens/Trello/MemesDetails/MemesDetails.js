import { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { memesStyle } from '../../../styles/memesStyles';

const API = "https://26ab-177-73-98-225.ngrok.io"

export function MemesDetails({route}) {
    const {id} = route.params;
    const [getMeme, setMeme] = useState(0);

    function getEle() {
        fetch(API+"/memes/" + id)
          .then(async (response) => {
            const data = await response.json();
            setMeme(data);
          })
          .catch((error) => {
            //alert("Houve um erro ao tentar obeter o conteúdo.");
            console.log(error);
          })
    }
    getEle();
  return (
    <SafeAreaView style={memesStyle.container}>
        <TouchableOpacity style={{alignSelf: "flex-start",}}>
            <Text style={{fontWeight: "900", paddingHorizontal: 15, fontSize: 28}}>{"<--"}</Text>
        </TouchableOpacity>
        <View style={{...memesStyle.card, ...memesStyle.detailsCard}}>
            <Text style={{...memesStyle.detailTx, ...memesStyle.likes}}>{getMeme.likes} curtidas!</Text>
            <Image source={{uri: getMeme.url}} style={memesStyle.DetailsImg}/>
            <View style={memesStyle.textDiv}>
                <Text style={memesStyle.detailTx}>Autor: {getMeme.author}</Text>
                <Text style={memesStyle.detailTx}>Data: {new Date(getMeme.date).toDateString()}</Text>
                <Text style={memesStyle.detailTx}>{getMeme.share} compartilhamentos!</Text>
            </View>
        </View>
    </SafeAreaView>
  );
}