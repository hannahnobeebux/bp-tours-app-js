import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import AuthStack from './src/navigation/AuthStack';

// Section component for displaying sections of content
// const Section = ({ children, style }) => (
//   <View style={style}>
//     {children}
//   </View>
// );

function App() {

  return (
    // <Section style={styles.flex}>
    //   <Text style={styles.h1}>Hello World</Text>
    //   {/* <AuthStack /> */}
    // </Section>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  h1:{
    color: 'red',
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

