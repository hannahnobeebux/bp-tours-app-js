import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import { SafeAreaView } from 'react-native-safe-area-context';

// Section component for displaying sections of content
// const Section = ({ children, style }) => (
//   <View style={style}>
//     {children}
//   </View>
// );


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
      });
      return unsubscribe;
  }, []);

  return (
      <View style={styles.container}>
          <Text style={styles.text}>{user ? `Logged in as ${user.email}` : "Not logged in"}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
  },
  text: {
      fontSize: 18, // Adjust the font size if needed
      textAlign: 'center', // Center the text if it's too wide
  },
});

export default App;


// const Stack = createNativeStackNavigator();

// function App() {

//   return (
//     // <Section style={styles.flex}>
//     //   <Text style={styles.h1}>Hello World</Text>
//     //   {/* <AuthStack /> */}
//     // </Section>
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="App" component={AppStack} options={{headerShown: false}}/>
//             {/* <Stack.Screen name="Auth" component={AuthStack} /> */}
//           </Stack.Navigator>
//         </NavigationContainer>

    
//   );
// }


// export default App;

