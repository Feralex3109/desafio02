import { View, StyleSheet, FlatList } from "react-native";
import CardProduct from "./CardProduct";

const ListProduct = ({ products, onModal }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardProduct item={item} onModal={onModal} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    backgroundColor: "#ABEBC6",
  },
});
export default ListProduct;
