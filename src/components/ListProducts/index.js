import { View, FlatList, Text, Button, StyleSheet } from "react-native"
import CardProduct from "./CardProduct"

const ListProducts = ({ products, handlerDeleteModal }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={products}
        keyExtractor={elemento => elemento.id}
        renderItem={({ item }) =>
          <CardProduct
          handlerDeleteModal={handlerDeleteModal}
          item={item}
          />
          }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  },
 
})

export default ListProducts