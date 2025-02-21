import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View, Text } from "react-native";

function Logo({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
        <Text style={styles.text}>Ngân hàng dữ liệu ngành dược</Text>
      </View>
    </Pressable>
  );
}

export default Logo;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    fontSize: 8
  }
});
