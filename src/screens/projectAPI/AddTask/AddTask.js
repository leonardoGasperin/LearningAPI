import { Picker } from '@react-native-picker/picker';
import { format } from 'date-fns';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Icon } from 'react-native-elements';
import { commonStyle } from '../../../styles/commonStyle';

const API = "https://e4c7-177-73-98-225.ngrok.io";

export function AddTask({navigation}) {
    const [learning, setAPI] = useState("");
    const [item, setItem] = useState("");
    const [date, setDate] = useState(() => {
        const today = new Date();
        return format(today, "yyyy-mm-dd")
    });

    function add() {
        if(learning.length <= 16){
            alert("Digite no minimo 16 caracteres");
        }else if(item === ""){
            alert("Selecione uma opção");
        }else{
            fetch(API + "/tasks", {
                body: JSON.stringify({status: false, task: learning, date: date, category: item}),
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
        <Picker
            selectedValue={item}
            style={{
                margim: 20,
                backgroundColor: "#d0f",
                color: "#fff",
                width: "90%",
            }}
            itemStyle={{color: "purple"}}
            onValueChange={(itemValue) => 
                setItem(itemValue)}
        >
            <Picker.Item label="selecio uma opção" value=""/>
            <Picker.Item label="C" value="C"/>
            <Picker.Item label="Cpp" value="C++"/>
            <Picker.Item label="Cs" value="C#"/>
        </Picker>

        <View style={{marginTop: "10%"}}>
            <Calendar 
                style={{borderRadius: 15}}
                markedDates={{
                    [date]: {
                        selected: true,
                        marked: true,
                        selectedColor: "#d0f",
                        dotColor: "#d0f",
                    }
                }}
                onDayPress={(currentDate) => setDate(currentDate.dateString)}
                theme={{
                    calendarBackground: "#3fa",
                    selectedDayTextColor: "#fff",
                    todayTextColor: "#d0f",
                    dayTextColor: "#fff",
                    arrowColor: "#fff",
                    monthTextColor: "#fff",
                    textDayFontWeight: "300",
                }}
            />
        </View>

        <View style={{...commonStyle.rowContainer, ...{marginTop: "10%", justifyContent: "space-around"}}}>
            <View style={commonStyle.btn}>
                <Icon name='save' onPress={add}/>
            </View>
            <View style={{...commonStyle.btn, ...{backgroundColor: "#f02"}}} onPress={cancel}>
                <Icon name='cancel' onPress={cancel}/>
            </View>
        </View>
    </SafeAreaView>
  );
}