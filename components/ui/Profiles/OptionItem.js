import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const OptionItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <View style={styles.centerView}>
      <Icon name={icon} size={20} color="black" style={styles.optionIcon} />
    </View>
    <View style={styles.centerText}>
    <Text style={styles.optionText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  optionItem: {
    flexDirection: "row",
    alignItems: "left",
    paddingVertical: 10,
    width: "100%",
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
  },
  centerText: {
    width: "88%",
  },
  centerView: {
    width: "12%",
  }
});
export default OptionItem;
