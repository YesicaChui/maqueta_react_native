import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
   {
    container: {
      flex: 1,
      justifyContent: "start",
      alignItems: "center",
      marginTop: 80,
    },
    inputContainer: {
      flexDirection: "row",
      alignSelf: "stretch",
      justifyContent: "space-around"
    },
    input: {
      borderWidth: 4,
      paddingHorizontal: 10,
      paddingVertical: 5,
      width: 200
    },
    listContainer: {
      width: "100%"
    },
    cardProduct: {
      flexDirection: "row",
      padding: 10,
      margin: 10,
      justifyContent: "space-evenly",
      alignItems: "center",
      borderWidth: 4,
      borderRadius:8,
    },
  }
)