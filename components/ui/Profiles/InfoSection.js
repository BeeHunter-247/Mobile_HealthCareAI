import { View, Text, StyleSheet } from "react-native";
import OptionItem from "./OptionItem";

const InfoSection = ({ title, items }) => (
  <View style={styles.sectionContainer}>
    {title && <Text style={styles.sectionTitle}>{title}</Text>}
    {items.map((item, index) => (
      <OptionItem key={index} icon={item.icon} text={item.text} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default InfoSection;