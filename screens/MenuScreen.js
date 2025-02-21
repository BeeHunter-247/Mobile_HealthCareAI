import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/UI/SearchBar';
import Banner from '../components/UI/Banner';
import CategoryGrid from '../components/UI/CategoryGrid';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = [
  { id: '1', name: 'Thuốc kê đơn', urlImage: require('../assets/thuoc_ke_don.jpg') },
  { id: '2', name: 'Thuốc không kê đơn', urlImage: require('../assets/thuoc_ke_don.jpg') },
  { id: '3', name: 'Đông dược', urlImage: require('../assets/thuoc_ke_don.jpg') },
  { id: '4', name: 'Tân dược', urlImage: require('../assets/thuoc_ke_don.jpg') },
];

function MenuScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchBar placeholder="Tìm tên thuốc, bệnh lý..." />
        {/* <Banner url={require('../assets/dugsd.jpg')}/> */}
        <CategoryGrid data={categories} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default MenuScreen;