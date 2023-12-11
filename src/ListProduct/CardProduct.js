import { View, Text, Button, StyleSheet } from "react-native";

const CardProduct = ({ item, onModal }) => {
  return (
    <View style={styles.cardProduct}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>$ {item.price}</Text>
      <Button title="-" onPress={() => onModal(item)} />
    </View>
  );
};
const styles = StyleSheet.create({
  cardProduct: {
    flexDirection: "row",
    padding: 5,
    margin: 5,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#D2B4DE",
  },
  cardTitle: {
    color: "#CB4335",
  },
});

export default CardProduct;
