import axios from 'axios';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ProductDetails = ({ route }) => {
    const { idMeal } = route.params;
    const [products, setProducts] = useState([]);


    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(response => {
            setProducts(response.data.meals);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return (
        <View>
            {
                products?.map(product =>
                    <View key={product.idMeal}>
                        <ScrollView>
                            <Image source={{ uri: product.strMealThumb }} style={styles.image} />
                            <View style={styles.detailsContainer}>
                                <Text style={styles.productTitle}>{product.strMeal}</Text>
                                <Text style={styles.productDescription}>{product.strInstructions}</Text>
                                <Text style={styles.productPrice}>Price: ${product.idMeal}</Text>
                                {/* You can add more product details here */}
                            </View>
                        </ScrollView>
                    </View>)
            }
        </View>
    );
};


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    detailsContainer: {
        padding: 20,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 16,
        marginTop: 10,
    },
    productPrice: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default ProductDetails;