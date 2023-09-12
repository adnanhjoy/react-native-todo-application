import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './card.css';

const Card = ({ product, navigation }) => {
    const { idMeal, strMeal, strMealThumb } = product
    return (
        <View>
            <TouchableOpacity
                style={styles.card}
                onPress={() => {
                    navigation.navigate('ProductDetails', { idMeal });
                }}
            >
                <Image source={{ uri: strMealThumb }} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.title}>{strMeal}</Text>
                    <Text style={styles.price}>${idMeal}</Text>
                </View>
                <Button
                    style={styles.button}
                    title="Add to Cart"
                    color="#841584"
                />
            </TouchableOpacity>

        </View>
    );
};

export default Card;