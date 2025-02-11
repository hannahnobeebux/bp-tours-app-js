import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';

const OnboardingScreen = ({navigation})=>{
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30,fontWeight:'bold',color:"#17348e"}}>Welcome to BP Tours!</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{backgroundColor:"#17348e",padding:10,width:'90%',borderRadius:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontsize:18,color:"white"}}>Let's begin!</Text>
                {/* <Icon name="arrow-forward-ios" size={22} color="white" /> */}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

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

export default OnboardingScreen;