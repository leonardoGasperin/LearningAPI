import { StyleSheet, Dimensions } from "react-native";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

export const commonStyle = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingVertical: screenW * 0.05,
      paddingHorizontal: screenH * 0.01,
    },
    textInput:{
      width: "100%",
      borderWidth: .5,
      borderRadius: 5,
      borderColor: "#00f",
      paddingHorizontal: 7,
    },
    divisorSimple:{
      width: "90%",
      borderWidth: .5,
      borderColor: "#d0f",
      marginVertical: "7%",
    },
    addBtn:{
      backgroundColor: "#d0f", 
      borderRadius: 50, 
      padding: 5, 
      marginLeft: 7
    },
    btnIcon:{
      marginLeft: 0,
      padding: 15,
    },
    btn:{
      padding: 15,
      borderRadius: 50,
      backgroundColor: "#d0f",
    },
    rowContainer:{
      width: "100%", 
      flexDirection: "row", 
      alignItems: "center", 
      marginBottom: "10%"
    },
    card:{
      width: "90%", 
      maxHeight: 80, 
      alignContent: "center", 
      alignSelf: "center",
      justifyContent: "space-between", 
      flexDirection: "row", 
      padding: 7, 
      borderWidth: 1, 
      borderRadius: 5, 
      backgroundColor: "#3fa", 
      marginVertical: 7,
      marginRight: "7%"
    },
  });