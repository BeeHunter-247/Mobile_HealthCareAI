import { Card } from "react-native-paper";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const CompanyCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.touchable}
    onPress={onPress}
    activeOpacity={0.7} // Hiệu ứng mờ khi nhấn
  >
    <Card style={styles.card}>
      <Card.Content>
        {item.license && (
          <Text style={styles.prescriptionTag}>Bộ Y Tế</Text>
        )}
        <Text style={styles.name}>{item.name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
        <Text style={styles.duration}>{item.license}</Text>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchable: {
    margin: 8, // Tạo khoảng cách giữa các card
  },
  card: {
    width: 160,
    backgroundColor: "#fff", // Màu nền đồng nhất
    elevation: 0, // Tắt shadow
  },
  prescriptionTag: {
    backgroundColor: "#78c600",
    padding: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  name: {
    fontWeight: "bold",
    marginVertical: 4,
  },
  description: {
    color: "#666",
  },
  duration: {
    color: "#666",
    marginTop: 4,
  },
});

export default CompanyCard;
