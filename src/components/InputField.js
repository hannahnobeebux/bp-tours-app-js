// command to generate boilerplate --> rnf
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function InputField({
    label,
    icon,
    inputType,
    keyboardType,
    fieldButtonLabel,
    fieldButtonFunction}) {
  return (
    <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, marginBottom: 25}}>
        {/* add icon here */}
        <Text>{icon}</Text>
        {/* adding paddingVertical:0 so the width is consistent on android devices too */}
        {inputType === 'password' ?
        (
        <TextInput placeholder={label} keyboardType={keyboardType} style={{fontSize: 20, marginBottom: 10, flex:1, paddingVertical:0}} secureTextEntry={true}/>
    )
        :
        (
        <TextInput placeholder={label} keyboardType={keyboardType} style={{fontSize: 20, marginBottom: 10, flex:1, paddingVertical:0}}/>
        )
        }
        <TouchableOpacity onPress={fieldButtonFunction}>
            {/* Need to create a method for forgotten password */}
            <Text style={{color:'#AD40AF', fontWeight:'700'}}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
    </View>
  );
};