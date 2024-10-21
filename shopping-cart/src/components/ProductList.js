import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  return (
    <View style={styles.container}>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>Price: ${product.price}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(addToCart(product))}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  productContainer: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#DC143C",
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#086063",
  },
  productPrice: {
    fontSize: 16,
    color: "#086063",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#DC143C",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductList;
