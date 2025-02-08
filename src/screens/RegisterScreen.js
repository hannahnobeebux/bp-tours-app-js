import React from 'react';

import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import InputField from '../components/InputField';
// Use a SVG image for the register screen instead 
// import LoginSVG from '../assets/login.svg';

const RegisterScreen = ({navigation}) => {
    return (
        // SafeAreaView ensure that the content is not hidden by the status bar
        <SafeAreaView style={{flex:1,justifyContent:'center'}}>
        <View style={{paddingHorizontal:20}}>
        {/* <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <LoginSVG
               height={300}
               width={300} /></View> */}
        <Text style={{fontFamily:'Roboto', fontWeight:'500', fontSize: 28, color:'#333', marginBottom: 30}}>Register</Text>
        
        {/* FULL NAME */}
        <InputField
        label={'Full Name'}
        icon={'👤'}
        />
       
        {/* PASSWORD */}
        <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, marginBottom: 25}}>
            {/* add icon here */}
            <Text style={{fontSize: 20, marginBottom: 10, color:'#17348e', marginRight: 5}}>🔑</Text>
            {/* adding paddingVertical:0 so the width is consistent on android devices too */}
            <TextInput placeholder="Password" style={{fontSize: 20, marginBottom: 10, flex:1, paddingVertical:0}} secureTextEntry={true}/>
            <TouchableOpacity onPress={() => {}}>
                {/* Need to create a method for forgotten password */}
                <Text style={{color:'#AD40AF', fontWeight:'700'}}>Forgot?</Text>
            </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={() => {}} style={{backgroundColor:'#AD40AF', padding:20, borderRadius:10, marginBottom:30}}>
            <Text style={{textAlign:'center',fontWeight:'700',fontSize:16,color:'#fff'}}>Login</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>Or login with...</Text>

        {/* <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom: 30}}>
              add icons for logging in with Google
        </View> */}

        <View style={{flexDirection:'row', justifyContent:'center',marginBottom: 30}}>
        <Text>Already registered?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color:'#AD40AF',fontWeight:'700'}}> Login</Text>
        </TouchableOpacity>
        </View>


        </View>
        </SafeAreaView>
    );
};

export default RegisterScreen;
