import { Card } from "react-native-paper";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const MedicineCard = ({ item, showImage = false, onPress }) => (
  <TouchableOpacity
    style={styles.touchable}
    onPress={onPress}
    activeOpacity={0.7} // Độ mờ khi nhấn
  >
    <Card style={styles.card}>
      <Card.Content>
        {showImage && (
          <Image
            source={{ uri: item.image || 'https://via.placeholder.com/160x100?text=Medicine+Image' }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        {item.prescription && (
          <Text style={styles.prescriptionTag}>Thuốc kê đơn</Text>
        )}
        <Text style={styles.name}>{item.name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
        <Text style={styles.duration}>{item.duration}</Text>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchable: {
    margin: 8, // Margin vẫn giữ để tạo khoảng cách giữa các card
  },
  card: {
    width: 160,
    backgroundColor: '#fff', // Màu nền đồng nhất
    elevation: 0, // Tắt shadow
    // Không có borderWidth/borderColor để tránh khác biệt màu
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 8,
  },
  prescriptionTag: {
    backgroundColor: '#78c600',
    padding: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  description: {
    color: '#666',
  },
  duration: {
    color: '#666',
    marginTop: 4,
  },
});

export default MedicineCard;