import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ActivityCard({ activity, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(activity)}>
      <Image source={activity.image} style={styles.image} />
      <Text style={styles.title}>{activity.name}</Text>
      <Text style={styles.preview}>{activity.preview}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    flexBasis: '48%',  // 2 cards per row
  },
  image: {
    width: '100%',
    height: 120,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
  preview: {
    fontSize: 14,
    color: '#666',
    margin: 5,
  },
});
