import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Section component for displaying sections of content
const Section = ({ children, style }) => (
  <View style={style}>
    {children}
  </View>
);

function App() {

  return (
    <Section style={styles.flex}>
      <Text style={styles.h1}>Hello World</Text>
      {/* <AuthStack /> */}
    </Section>
    
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

