import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.viewContainer}>
      <Ionicons name="search" size={24} color="black" />
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm..."
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          if (onSearch) onSearch(text);
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12
  },
  searchInput:{
    flex: 1,
    height: "100%"
  }
});
