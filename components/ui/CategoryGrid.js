import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard';

const CategoryGrid = ({ data }) => {
  const renderItem = ({ item }) => (
    <CategoryCard 
      name={item.name} 
      onPress={() => console.log(`Pressed: ${item.name}`)} 
      urlImage={item.urlImage} // Ví dụ URL placeholder
    />
  );

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 16,
  },
});

export default CategoryGrid;