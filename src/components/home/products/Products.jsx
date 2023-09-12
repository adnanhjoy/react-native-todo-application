import axios from 'axios';
import React, { useState } from 'react';
import { View } from 'react-native';
import Card from '../card/Card';

const Products = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
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
                    <Card
                        navigation={navigation}
                        key={product.idMeal}
                        product={product}
                    />
                )
            }
        </View>
    );
};

export default Products;