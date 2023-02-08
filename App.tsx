import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Product from './src/product';
import ProductData from './src/productData.json';


function App() {
  return (
    <SafeAreaView>
<Text style={styles.banner}>OkStore</Text>
      <FlatList
        data={ProductData}
        renderItem={({item}) => <Product newPr={item} />}
        keyExtractor={item => item.id}
        numColumns={2}

      />



    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  banner: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'blue',
  }
});

export default App;
