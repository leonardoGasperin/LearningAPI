// import LottieView from 'lottie-react-native';
// import loading from "../../../assets/loading.json";
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {BarCodeScanner} from "expo-barcode-scanner";
import { Button } from 'react-native-elements';
import { API } from '../../api/refs';

export function BostaRio() {
  const [hasPermission, setPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    console.log(data);

    fetch(API + "/gifts?code=" + data)
      .then(async (response) => {
        const _temp = await response.json();
        
        if(data.length === 1){
          alert(`Você ganhou ${data[0].value}% de desconto na barraquinha ${data.local}`)
        }else{
          alert("iiiii deu xabu =//")
        }
      })
  }
  const getPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setPermission(status === "granted" ? true : false)
  }

  // const reset = () => {
  //   setScanned(false);
  // }

  useEffect(() =>{
    getPermission();
  }, [])

  return (
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        {/* <LottieView autoPlay source={loading} style={{height: 175, width: 150}}/> */}
        
        {(hasPermission === true && scanned === false) &&
          <BarCodeScanner style={StyleSheet.absoluteFill}
          onBarCodeScanned={!scanned && handleBarCodeScanned}
        />}

        {scanned === true && <Button title={"Scan!"} onPress={() => setScanned(false)}/>}
        
    </SafeAreaView>
  );
}