import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { List } from '@legendapp/list';

const BaseLegendList = ({
  data = [],
  renderItem,
  keyExtractor,
  onItemPress,
  emptyMessage = 'No items found',
  containerStyle,
  itemContainerStyle,
  showSeparator = true,
  separatorStyle,
  ...listProps
}) => {
  // Default render item if none provided
  const defaultRenderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.defaultItem, itemContainerStyle]}
      onPress={() => onItemPress?.(item, index)}
      activeOpacity={0.7}
    >
      <Text style={styles.defaultItemText}>
        {typeof item === 'string' ? item : item?.title || item?.name || `Item ${index + 1}`}
      </Text>
    </TouchableOpacity>
  );

  // Default separator component
  const renderSeparator = () => (
    showSeparator ? <View style={[styles.separator, separatorStyle]} /> : null
  );

  // Empty state component
  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{emptyMessage}</Text>
    </View>
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <List
        data={data}
        renderItem={renderItem || defaultRenderItem}
        keyExtractor={keyExtractor || ((item, index) => 
          item?.id?.toString() || item?.key?.toString() || index.toString()
        )}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        {...listProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultItem: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  defaultItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#e9ecef',
    marginHorizontal: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
  },
});

export default BaseLegendList;