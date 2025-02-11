import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ActivityCard({ activity }) {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5, elevation: 3, marginBottom: 15 }}>
          <Image source={activity.image} style={{ width: '100%', height: 150, borderRadius: 10 }} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{activity.name}</Text>
          <Text style={{ fontSize: 14, color: 'gray', marginVertical: 5 }}>{activity.preview}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ActivityDetails', { activity })} style={{ backgroundColor: '#0a2a50', padding: 10, borderRadius: 5, marginTop: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>More Info</Text>
          </TouchableOpacity>
        </View>
      );
}

