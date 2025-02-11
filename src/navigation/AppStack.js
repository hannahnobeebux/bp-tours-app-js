import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import ActivityDetails from "../components/ActivityDetails";


const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ActivityDetails" component={ActivityDetails} />
        </Stack.Navigator>
    );
};

export default AppStack;
