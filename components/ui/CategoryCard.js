import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const CategoryCard = ({ name, onPress, urlImage }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={typeof urlImage === "string" ? { uri: urlImage } : urlImage} 
        style={styles.image} 
        resizeMode="cover" 
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#ddd",
    height: 135,
    borderRadius: 8,
    elevation: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
});

export default CategoryCard;
