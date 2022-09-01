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
      },
})