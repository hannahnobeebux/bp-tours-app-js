import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome</Text>
//       <FormButton buttonTitle='Logout' onPress={() => {}} />
//     </View>
//   )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      fontSize: 20,
      color: '#333333',
    },
});
