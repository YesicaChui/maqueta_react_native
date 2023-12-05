import { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList, Modal } from "react-native"
import uuid from 'react-native-uuid';
import ModalDelete from "./src/components/ModalDelete";
import AddProduct from "./src/components/AddProduct";
//import { styles } from "./styleApp"
const App = () => {

  const [newTitleProduct, setNewTitleProduct] = useState("")
  const [newPriceProduct, setNewPriceProduct] = useState("")
  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  const handlerDeleteModal = (item)=>{
    console.log(item)
    setIsVisible(true)
    setProductSelected(item)
  }

  const handlerDeleteProduct = ()=>{
    console.log("vamos a borrar")
    setProducts(products.filter(elemento => elemento.id != productSelected.id))
    setIsVisible(false)
  }
  const handlerAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title: newTitleProduct,
      price: newPriceProduct
    }
    setProducts(c => [...c, newProduct])
    setNewTitleProduct("")
    setNewPriceProduct("")
  }
  return (
    <View style={styles.container}>
      <AddProduct 
      setNewTitleProduct = {setNewTitleProduct}
      newTitleProduct = {newTitleProduct}
      setNewPriceProduct = {setNewPriceProduct}
      newPriceProduct = {newPriceProduct}
      handlerAddProduct = {handlerAddProduct}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={elemento => elemento.id}
          renderItem={({ item }) =>
            <View style={styles.cardProduct}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text>S/.{item.price}</Text>
              <Button title="DEL" onPress={()=>handlerDeleteModal(item)}/>
            </View>}
        />
      </View>
      <ModalDelete 
        producto = {productSelected} 
        isVisible = {isVisible}  
        handlerDeleteProduct = {handlerDeleteProduct} 
        setIsVisible = {setIsVisible}
      />


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
