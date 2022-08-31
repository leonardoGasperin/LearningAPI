import { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { commonStyle } from '../../../styles/commonStyle';

const API = "https://4fe6-177-73-98-225.ngrok.io"

export function LearningAPI({navigation}) {
    const [learning, setAPI] = useState([]);

  function getTasts() {
    fetch(API+"/tasks")
        .then(async (response) => {
            const data = await response.json();
            setAPI(data);
        })
        .catch((error) => {
            alert("ERROR!!! ERROR!!! ERROR!!! ERROR!!! ERROR!!!");
            console.log(error);
        })
    }

  function add() {
    navigation.navigate("AddTask");
  }
  
  function delTask(data) {
    fetch(API + "/tasks/" + data.id, {
      method: "DELETE"
    })
    .then(() => {
      alert(`Tarefa: "${data.name}" Deletado com sucesso!`)
      getTasts();
    })
    .catch(() => alert("Não foi deletado com sucesso"))
  }

  useEffect(() => getTasts(), [])

  return (
    <SafeAreaView style={commonStyle.container}>
        <Text>Lista de tarefas</Text>
        <TextInput style={commonStyle.textInput} 
          placeholder="Pesquise uma tarefa" 
          keyboardType="web-search"
          selectionColor="#0f0" 
          placeholderTextColor="#0ff"
        />
        <View style={commonStyle.rowContainer}>
          <View style={commonStyle.divisorSimple}></View>
          <TouchableOpacity style={commonStyle.addBtn} onPress={add}>
          <Text style={{padding: 3, paddingLeft:4}}>ADD</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView>
          {learning.map((ele) => (
            <View style={commonStyle.card} key={ele.id}>
              <Text>{ele.name}</Text>
              <TouchableOpacity style={commonStyle.btn} onPress={() => delTask(ele)}>
                <Text>DEL</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
    </SafeAreaView>
  );
}