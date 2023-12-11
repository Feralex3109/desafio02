import { Modal, View, Text, Button, StyleSheet } from "react-native";

const ModalDelete = ({ product, visible, onModal, onDelete }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¿Esta Seguro de Eliminar?</Text>
          <Text style={styles.modalText}>{product.title}</Text>
          <Button title="Confirmar" onPress={onDelete} />
          <Button title="Cerrar" onPress={() => onModal(false)} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    width: 250,
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
  },
  modalText: {
    textAlign: "center",
    marginBottom: 10,
  },
});
export default ModalDelete;
