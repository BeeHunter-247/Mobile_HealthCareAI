import { View, Image, Text, StyleSheet } from "react-native";

const ProfileHeader = ({ name, uuid, avatarUrl, prescriptions }) => (
  <View style={styles.headerContainer}>
  <Image source={avatarUrl} style={styles.avatar} />
  
  {/* Bọc tất cả Text vào một View để căn chỉnh */}
  <View style={styles.textContainer}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.uuid}>{`UUID: ${uuid}`}</Text>
    <Text style={styles.prescriptionCount}>
      {`Bạn đang có ${prescriptions} đơn thuốc`}
    </Text>
  </View>
</View>

);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', // 🔥 Xếp các phần tử theo chiều ngang
    alignItems: 'center', // 🔥 Căn giữa theo chiều dọc
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 60, // Kích thước ảnh
    height: 60,
    borderRadius: 30, // Làm tròn ảnh
    marginRight: 10, // 🔥 Tạo khoảng cách giữa ảnh và text
  },
  textContainer: {
    flex: 1, // 🔥 Giúp text chiếm toàn bộ không gian còn lại
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  uuid: {
    fontSize: 14,
    color: 'gray',
  },
  prescriptionCount: {
    fontSize: 14,
    color: 'green',
  },
});


export default ProfileHeader;
