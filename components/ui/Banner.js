import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Banner = ({url}) => {
  const imageSource = typeof url === 'string' ? { uri: url } : url;
  return (
    <View style={styles.container}>
      <Image
        source={imageSource} // Thay bằng URL hình ảnh thực tế
        style={styles.image}
        resizeMode="cover" // Có thể dùng 'contain', 'stretch', 'center' tùy nhu cầu
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: '#ddd', // Màu nền dự phòng khi hình ảnh chưa tải
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden', // Đảm bảo hình ảnh không tràn ra ngoài borderRadius
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8, // Giữ đồng bộ với container
  },
});

export default Banner;