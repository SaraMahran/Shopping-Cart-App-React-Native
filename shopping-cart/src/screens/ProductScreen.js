import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/ProductList";
import { fetchProductsRequest } from "../redux/slices/cartSlice";

const ProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cart.loading);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      {loading ? <Text>Loading...</Text> : <ProductList />}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.buttonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5c7bc",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#DC143C",
  },
  button: {
    backgroundColor: "#DC143C",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductScreen;
