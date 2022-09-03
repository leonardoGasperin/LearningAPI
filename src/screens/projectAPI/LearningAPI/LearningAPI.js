import { useIsFocused } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, SafeAreaView, Switch } from 'react-native';
import { Icon } from 'react-native-elements'
import { commonStyle } from '../../../styles/commonStyle';

const API = "https://08b0-177-73-98-225.ngrok.io";

export function LearningAPI({navigation}) {
    const [learning, setAPI] = useState([]);
    const [srch, setSearch] = useState("");
    const isFocused = useIsFocused();

  function getTasks() {
    console.log(srch)
    fetch(API+"/tasks" + "?name_like=" + srch)
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
      getTasks();
    })
    .catch(() => alert("Não foi deletado com sucesso"))
  }

  function attTask(ele) {
    fetch(API + "/tasks/" + ele.id,{
      method: "PATCH",
      body: JSON.stringify({
        status: !ele.status
      }),
      headers: {
        'Content-type': 'application/json'
      },
    })
    .then(() => {
      alert(ele.name + " Atualizado");
      getTasks();
    })
    .catch(() => alert("0011 1011 1101 1111 0010"))
  }

  useEffect(() => {
    if(isFocused)
      getTasks();
  }, 
  [isFocused, srch])

  return (
    <SafeAreaView style={commonStyle.container}>
        <Text>Lista de tarefas</Text>
        <TextInput style={commonStyle.textInput} 
          placeholder="Pesquise uma tarefa" 
          keyboardType="web-search"
          selectionColor="#0f0" 
          placeholderTextColor="#0ff"
          value={srch}
          onChangeText={setSearch}
        />
        <View style={commonStyle.rowContainer}>
          <View style={commonStyle.divisorSimple}></View>
          <View style={commonStyle.addBtn}>
            <Icon name="add"  onPress={add}/>
          </View>
        </View>
        
        <ScrollView>
          {learning.map((ele) => (
            <View style={commonStyle.card} key={ele.id}>
            <View style={{flexDirection: "column"}}>
                <Text numberOfLines={1} ellipsizeMode="tail">{ele.name}</Text>
                <Text numberOfLines={1} ellipsizeMode="tail">{ele.category+" "}{format(parseISO(ele.date), "dd 'de' MMMM 'de' yyyy")}</Text>
              </View>
              <View style={{flexDirection: "row"}}>
                <Switch onValueChange={() => attTask(ele)} thumbColor={ele.status ? "#f5dd4b" : "#f4f3f4"} trackColor={{ false: "#767577", true: "#81b0ff" }} value={ele.status}/>
                <View style={commonStyle.btnIcon} >
                  <Icon name="trash" type="evilicon" color="#d0f" onPress={() => delTask(ele)}/>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
    </SafeAreaView>
  );
}