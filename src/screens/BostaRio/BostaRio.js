import LottieView from 'lottie-react-native';
import { View, SafeAreaView } from 'react-native';
import loading from "../../../assets/loading.json";
import {BarCodeScanner} from "expo-barcode-scanner";

export function BostaRio() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        {/* <LottieView autoPlay source={loading} style={{height: 175, width: 150}}/> */}
        <BarCodeScanner style={{width: "100%", height: "100%"}}/>
    </SafeAreaView>
  );
}