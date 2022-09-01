import { StyleSheet, Dimensions } from "react-native";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

export const memesStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingVertical: screenW * 0.05,
        paddingHorizontal: screenH * 0.01,
        backgroundColor: "#04042E",
      },
      divisor:{
      width: "90%",
      borderWidth: 1.5,
      borderRadius: 50,
      borderColor: "#00001A",
      marginVertical: "7%",
      },
      card:{
        width: screenW * 0.3,
        height: screenH * 0.19,
        borderRadius: 15,
        backgroundColor: "#fff",
        margin: 3,
        paddingTop: 7,
      },
      img: {
        width: "90%",
        height: "99%",
        alignSelf: "center",
      },
      detailsCard:{
        width: screenW * 0.8,
        height: screenH * 0.66,
        marginTop: "10%"
      },
      detailTx:{
        textAlign: "center",
        marginTop: "5%",
        color: "#bbb",
      },
      likes:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        marginBottom: "15%"
      },
      textDiv:{
        marginTop: 15
      },
      DetailsImg: {
        width: "90%",
        height: "60%",
        alignSelf: "center",
        // flexShrink: 1
      },
})