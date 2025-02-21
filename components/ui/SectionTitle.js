import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SectionTitle = ({ title }) => {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default SectionTitle;