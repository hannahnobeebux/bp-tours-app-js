import { View, Text } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import AppStack from './AppStack';

export default function Routes() {

    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    //updating user in our AuthContext
    const onAuthStateChanged = ((user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    }, [initializing, setInitializing]);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [onAuthStateChanged]);

    if(initializing) return null;

  return (
    <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}