import React from 'react';
import { FlatList } from 'react-native';

const HorizontalList = ({ data, renderItem, keyExtractor }) => {
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsHorizontalScrollIndicator={false} // Tùy chọn: ẩn thanh cuộn ngang
    />
  );
};

export default HorizontalList;