import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ActivityCard({ activity }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[styles.card, expanded && styles.expandedCard]}>
      {/* Activity Image */}
      <Image source={activity.image} style={styles.image} />
      
      {/* Activity Title */}
      <Text style={styles.title}>{activity.name}</Text>

      {/* Activity Preview */}
      <Text style={styles.preview}>{activity.preview}</Text>

      {/* Expandable Details Section */}
      {expanded && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}><Text style={styles.bold}>Description:</Text> {activity.details.description}</Text>
          <Text style={styles.detail}><Text style={styles.bold}>Duration:</Text> {activity.details.duration}</Text>
          <Text style={styles.detail}><Text style={styles.bold}>Location:</Text> {activity.details.location}</Text>
          <Text style={styles.detail}><Text style={styles.bold}>Price:</Text> {activity.details.price}</Text>
          <Text style={styles.detail}><Text style={styles.bold}>Age Group:</Text> {activity.details.age_group}</Text>
        </View>
      )}

      {/* More Info Button */}
      <TouchableOpacity style={styles.button} onPress={() => setExpanded(!expanded)}>
        <Text style={styles.buttonText}>{expanded ? "Hide Info" : "More Info"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    flexBasis: '48%', // 2 cards per row
    padding: 10,
  },
  expandedCard: {
    flexBasis: '100%', // Expands full width when open
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  preview: {
    fontSize: 14,
    color: '#666',
  },
  detailsContainer: {
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  detail: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0aada8',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

