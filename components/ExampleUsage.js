import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import BaseLegendList from './BaseLegendList';

const ExampleUsage = () => {
    const [sampleData] = useState([
        { id: 1, title: 'First Item', description: 'This is the first item' },
        { id: 2, title: 'Second Item', description: 'This is the second item' },
        { id: 3, title: 'Third Item', description: 'This is the third item' },
        { id: 4, title: 'Fourth Item', description: 'This is the fourth item' },
        { id: 5, title: 'Fifth Item', description: 'This is the fifth item' },
    ]);

    const handleItemPress = (item, index) => {
        Alert.alert('Item Pressed', `You pressed: ${item.title}`);
    };

    const renderCustomItem = ({ item, index }) => (
        <View style={styles.customItem}>
            <Text style={styles.customTitle}>{item.title}</Text>
            <Text style={styles.customDescription}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Legend List Examples</Text>

            {/* Basic usage with default styling */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Basic List</Text>
                <BaseLegendList
                    data={sampleData}
                    onItemPress={handleItemPress}
                    containerStyle={styles.listContainer}
                />
            </View>

            {/* Custom render item */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Custom Styled List</Text>
                <BaseLegendList
                    data={sampleData}
                    renderItem={renderCustomItem}
                    onItemPress={handleItemPress}
                    containerStyle={styles.listContainer}
                    showSeparator={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    section: {
        flex: 1,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#555',
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        overflow: 'hidden',
    },
    customItem: {
        padding: 16,
        backgroundColor: '#fff',
        marginHorizontal: 12,
        marginVertical: 6,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    customTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    customDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
});

export default ExampleUsage;