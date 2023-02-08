import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './productStyle';


const product = ({newPr}) => {
   return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: newPr.imgURL}} />
        <Text style={styles.title}>{newPr.title}</Text>
        <Text style={styles.price}>{newPr.price}</Text>
        <Text style={styles.inStock}>{newPr.inStock == true ? '' : 'STOKTA YOK'}</Text>
    </View>
   );
};

export default product;