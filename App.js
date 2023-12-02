import { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native"
import uuid from 'react-native-uuid';
//import { styles } from "./styleApp"
const App = () => {

  const [newTitleProduct, setNewTitleProduct] = useState("")
  const [newPriceProduct, setNewPriceProduct] = useState("")
  const [products, setProducts] = useState([])
  const handlerAddProduct = ()=> {
    const newProduct ={
      id:uuid.v4(),
      title:newTitleProduct, 
      price:newPriceProduct
    } 
   setProducts(c=>[...c,newProduct])
   setNewTitleProduct("")
   setNewPriceProduct("")
   console.log(products)
  } 
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>

        <TextInput placeholder="Nombre" style={styles.input}
          onChangeText={(texto) => setNewTitleProduct(texto)} value={newTitleProduct} />

        <TextInput placeholder="Precio" style={styles.input}
          onChangeText={(texto) => setNewPriceProduct(texto)}  value={newPriceProduct}/>

        <Button title="ADD" onPress={() => handlerAddProduct()} ></Button>

      </View>
      
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text style={styles.cardTitle}>Coca Cola</Text>
          <Text>S/.200</Text>
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
      alignItems: "center",
      alignSelf: "stretch",
      justifyContent: "space-around"
    },
    input: {
      borderWidth: 4,
      paddingHorizontal: 10,
      paddingVertical: 5,
      width: 150
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
      borderRadius: 8,
    },
    image: {
      alignSelf: "center",
      width: 200,
      height: 200,
      borderRadius: 10, // Ejemplo de aplicar un borde redondeado
    },
  }
)
export default App
