import { View,Text, Button,StyleSheet } from "react-native"

const CardProduct = ({item,handlerDeleteModal}) => {
  return (
    <View style={styles.cardProduct}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text>S/.{item.price}</Text>
            <Button title="DEL" onPress={() => handlerDeleteModal(item)} />
          </View>
  )
}
const styles = StyleSheet.create({
  cardProduct: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 4,
    borderRadius: 8,
  },
})
export default CardProduct