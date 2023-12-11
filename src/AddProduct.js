import { View, Button, StyleSheet, TextInput } from "react-native";

const AddProduct = ({
  valueTitle,
  valuePrice,
  onChangeTitle,
  onChangePrice,
  addProduct,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ingresar Producto"
        value={valueTitle}
        onChangeText={(onChangeText) => onChangeTitle(onChangeText)}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={valuePrice}
        onChangeText={(onChangeText) => onChangePrice(onChangeText)}
      />
      <Button title="+" onPress={addProduct} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "#D6DBDF",
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 250,
    backgroundColor: "#F5B7B1",
  },
});
export default AddProduct;
