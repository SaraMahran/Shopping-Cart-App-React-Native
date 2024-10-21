import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>Price: ${item.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(removeFromCart(item.id))}
      >
        <Text style={styles.buttonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#fff5f5",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#DC143C",
  },
  itemPrice: {
    fontSize: 16,
    color: "#DC143C",
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

export default CartItem;
