import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    // Implement logic to add the product to your database or state
    // You can use a state management library or API call here
    // For simplicity, we'll just log the product details for now
    console.log('Product Name:', productName);
    console.log('Product Description:', productDescription);
    console.log('Product Price:', productPrice);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        onChangeText={(text) => setProductName(text)}
        value={productName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Description"
        onChangeText={(text) => setProductDescription(text)}
        value={productDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        onChangeText={(text) => setProductPrice(text)}
        value={productPrice}
        keyboardType="numeric"
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default AddProductScreen;
