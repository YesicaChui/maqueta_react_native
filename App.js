import { StyleSheet, Text, View, TextInput, Button } from "react-native"
//import { styles } from "./styleApp"
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Product" style={styles.input}/>
        <Button title="ADD" ></Button>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text style={styles.cardTitle}>Coca cola</Text>
          <Text>S/.200</Text>
          <Button title="DEL" />
        </View>
        <View style={styles.cardProduct}>
          <Text style={styles.cardTitle}>Carne</Text>
          <Text>S/.100</Text>
          <Button title="DEL" />
        </View>
        <View style={styles.cardProduct}>
          <Text style={styles.cardTitle}>Fideos</Text>
          <Text>S/.80</Text>
          <Button title="DEL" />
        </View>
       
      </View>

    </View>
  )
}
 const styles = StyleSheet.create(
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
export default App
