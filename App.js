import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

// Section component for displaying sections of content
// const Section = ({ children, style }) => (
//   <View style={style}>
//     {children}
//   </View>
// );

const Stack = createNativeStackNavigator();

function App() {

  return (
    // <Section style={styles.flex}>
    //   <Text style={styles.h1}>Hello World</Text>
    //   {/* <AuthStack /> */}
    // </Section>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="App" component={AppStack} options={{headerShown: false}}/>
            <Stack.Screen name="Auth" component={AuthStack} />
          </Stack.Navigator>
        </NavigationContainer>

    
  );
}


export default App;

