import { View, Modal, Text, Button, StyleSheet } from 'react-native'

const ModalDelete = ({ isVisible, handlerDeleteProduct, setIsVisible, producto }) => {
 
  return (

    <Modal
      visible={isVisible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Desea Borrar el Producto?</Text>
          <Text style={styles.modalText}>{producto.title}</Text>
          <Button title="si" onPress={() => handlerDeleteProduct()} />
          <Button title="No" onPress={() => setIsVisible(false)} />
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create(
  {
    modalContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    modalContent:{
      width: "80%",
      borderWidth: 2,
      padding: 10,
      gap: 10
    },
    modalText:{
      textAlign: "center",
    }
  }
)
export default ModalDelete