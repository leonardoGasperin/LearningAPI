import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { memesStyle } from '../../../styles/memesStyles';

const API = "https://08b0-177-73-98-225.ngrok.io";

export function MemesList({navigation}) {    
    const [learning, setAPI] = useState([]);
    const isFocused = useIsFocused();

    function getMemes() {
        fetch(API+"/memes")
            .then(async (response) => {
                const data = await response.json();
                setAPI(data);
                // console.log(data);
            })
            .catch((error) => {
                alert("Houve um erro ao tentar listar conteúdo.");
                console.log(error);
            })
    }
    useEffect(() => {
        if(isFocused)
            getMemes();
      }, 
      [isFocused])

      function details(id) {
        navigation.navigate("MemesDetails", {id: id});
      }
  return (//04042E 466300 FF4900 00001A
    <SafeAreaView style={memesStyle.container}>
        <Text style={{color: "#466300", fontWeight: "600"}}>Meus Memes</Text>
        <View style={memesStyle.divisor}/>
        <ScrollView>
        <View style={{flexDirection: "row", flexWrap: "wrap"}}>
        {learning.map((ele) => (
            <TouchableOpacity key={ele.id} style={memesStyle.card} onPress={() => details(ele.id)}>
                    <Image source={{uri: ele.url}} style={memesStyle.img}/>
            </TouchableOpacity>
        ))}
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}