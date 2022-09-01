import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { memesStyle } from '../../../styles/memesStyles';

const API = "https://97d2-177-73-98-225.ngrok.io"

export function MemesList() {    
    const [learning, setAPI] = useState([]);
    const isFocused = useIsFocused();

    function getMemes() {
    fetch(API+"/memes")
        .then(async (response) => {
            const data = await response.json();
            setAPI(data);
            console.log(data);
        })
        .catch((error) => {
            alert("Houve um erro ao tentar listar conteúdo.");
            console.log(error);
        })
    }
    useEffect(() => {
        if(isFocused){
         console.log("isFOCUZEDI")
            getMemes();
        }else{
            console.log("NOTfocuzedi")}
      }, 
      [isFocused])
  return (
    <View style={memesStyle.container}>
        {/* {learning.map((ele) => (
            <View key={ele.id}>
                <Text>{ele.url}</Text>
            </View>
        ))} */}
    </View>
  );
}