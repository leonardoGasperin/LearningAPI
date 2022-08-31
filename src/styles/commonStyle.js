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
    addBtn:{backgroundColor: "#d0f", borderRadius: 50, borderColor: "#d0f", marginLeft: 5},
    btn:{
      backgroundColor: "#d0f",
      borderRadius: 50,
      borderColor: "#0ff",
      marginLeft: 5,
      padding: 10,
    },
    rowContainer:{width: "100%", flexDirection: "row", alignItems: "center"},
    card:{alignContent: "center", justifyContent: "space-between", flexDirection: "row", padding: 15, borderWidth: 1, borderRadius: 5, backgroundColor: "#3fa", marginVertical: 7,},

  });