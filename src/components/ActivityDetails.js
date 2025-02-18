import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActivityDetails({ route, navigation }) {
  const { activity } = route.params;

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white', marginTop:50 }}>
      <Image source={activity.image} style={{ width: '100%', height: 200, borderRadius: 10 }} />
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>{activity.name}</Text>
      <Text style={{ fontSize: 16, color: 'gray', marginVertical: 10 }}>{activity.details.description}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Duration: {activity.details.duration}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Location: {activity.details.location}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Price: {activity.details.price}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Age Group: {activity.details.age_group}</Text>
      <TouchableOpacity onPress={() => alert('Booking confirmed!')} style={{ backgroundColor: '#0a2a50', padding: 15, borderRadius: 5, marginTop: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Book Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ color: '#0aada8', padding: 15, borderRadius: 5, marginTop: 10 }}>
        <Text style={{color:'#0aada8'}}> ← All Activities</Text>
        </TouchableOpacity>
    </View>
  );
}