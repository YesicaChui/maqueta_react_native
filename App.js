import { useState } from "react"
import { StyleSheet, Text, View,  Button,  FlatList } from "react-native"
import uuid from 'react-native-uuid';
import ModalDelete from "./src/components/ModalDelete";
import AddProduct from "./src/components/AddProduct";
import ListProducts from "./src/components/ListProducts";
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
      
      <ModalDelete 
        producto = {productSelected} 
        isVisible = {isVisible}  
        handlerDeleteProduct = {handlerDeleteProduct} 
        setIsVisible = {setIsVisible}
      />
<ListProducts handlerDeleteModal={handlerDeleteModal} products={products}/>
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
    
    
    image: {
      alignSelf: "center",
      width: 200,
      height: 200,
      borderRadius: 10, // Ejemplo de aplicar un borde redondeado
    },
  }
)
export default App
