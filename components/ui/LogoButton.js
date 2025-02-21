import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-paper";

function LogoButton({onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Avatar.Text size={40} label="DB" />
        <View style={styles.buttonContainer}>
          <Text style={styles.textName}>Drug Bank</Text>
          <Text style={styles.text}>Ngân hàng dữ liệu ngành dược</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default LogoButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 12,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: "#666",
  },
  textName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
