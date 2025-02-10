import React, { useContext, useState } from 'react';

import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import InputField from '../components/InputField';
// Use a SVG image for the register screen instead 
// import LoginSVG from '../assets/login.svg';
import CustomButton from '../components/CustomButton';
import { AuthContext } from '../navigation/AuthProvider';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {register} = useContext(AuthContext);

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
        
        {/* EMAIL ADDRESS */}
        <InputField
        onChangeText={(userEmail) => setEmail(userEmail)}
        label={'Email Address'}
        icon={'@'}
        keyboardType={'email-address'}
        />

        {/* PASSWORD */}
        <InputField
        onChangeText={(userPassword) => setPassword(userPassword)}
        label={' Password'}
        icon={'🔑'}
        inputType={'password'}
        />

        {/* CONFIRM PASSWORD */}
        <InputField
        label={' Confirm Password'}
        icon={'🔑'}
        inputType={'password'}
        />

        <CustomButton label={"Register"} onPress={()=>{}}/>

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>Or login with...</Text>

        {/* <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom: 30}}>
              add icons for logging in with Google
        </View> */}

        <View style={{flexDirection:'row', justifyContent:'center',marginBottom: 30}}>
        <Text>Already registered?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text 
        onPress={() => register(email, password)}
        style={{color:'#17348e',fontWeight:'700'}}> Login</Text>
        </TouchableOpacity>
        </View>

        </View>
        </SafeAreaView>
    );
};

export default RegisterScreen;
