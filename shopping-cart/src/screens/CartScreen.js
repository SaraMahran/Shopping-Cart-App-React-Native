import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCart}>No items in cart</Text>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f1f8e9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#DC143C",
  },
  emptyCart: {
    fontSize: 18,
    color: "#086063",
    marginBottom: 10,
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

export default CartScreen;
