import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const API = "https://eb64-177-73-98-225.ngrok.io"

export default function App() {
  const [learning, setAPI] = useState([])

  useEffect(() => {
    fetch(API+"/tasks")
      .then(async (response) => {
        const data = await response.json();
        setAPI(data)
      })
      .catch((error) => {
        alert("ERROR!!! ERROR!!! ERROR!!! ERROR!!! ERROR!!!");
        console.log(error);
      })
  }, [])
  return (
    <View style={styles.container}>
      {learning.map((ele) => <Text key={ele.id}>{ele.name}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
