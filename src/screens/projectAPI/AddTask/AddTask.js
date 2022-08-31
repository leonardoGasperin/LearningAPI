import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { commonStyle } from '../../../styles/commonStyle';
const API = "https://4fe6-177-73-98-225.ngrok.io"

export function AddTask({navigation}) {
    const [learning, setAPI] = useState("")

    function add() {
        fetch(API + "/tasks", {
            body: JSON.stringify({status: false, name: learning}),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
          .then(async (response) => {
            const data = await response.json();
            console.log("separador");
            console.log(data)
            navigation.navigate("API");
          })
          .catch(() => alert("!!!RORRE !!!RORRE !!!RORRE !!!RORRE !!!RORRE"));
    }

    function cancel(){
        setAPI("")
    }
  return (
    <SafeAreaView style={commonStyle.container}>
        <Text>Adicione uma tarefa</Text>
        <View style={commonStyle.divisorSimple}></View>
        <View style={commonStyle.rowContainer}>
            <Text>Tafera: </Text>
            <TextInput style={{...commonStyle.textInput, width: "86%"}}
                placeholder="Tarefa"
                value={learning}
                onChangeText={setAPI}
            />
        </View>
        <View style={{...commonStyle.rowContainer, ...{marginTop: 50, justifyContent: "center"}}}>
            <TouchableOpacity style={commonStyle.btn} onPress={add}>
                <Text>Salvar tarefa!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...commonStyle.btn, ...{backgroundColor: "#f02"}}} onPress={cancel}>
                <Text>Cancelar</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}