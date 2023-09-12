import React from 'react';
import { ScrollView, View } from 'react-native';
import Products from '../../components/home/products/Products';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <Products navigation={navigation} />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;