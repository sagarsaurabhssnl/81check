import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();
const bottomTabNavigator = () => {
    return (
        <Tab.Navigator
            shifting={true}
            barStyle={{ backgroundColor: "#444" }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Create Story') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    return <Ionicons name={iconName} size={RFValue(25)} color={color} />;
                },
            })}
            activeColor='#fff'
            inactiveColor='#aaa'
        >
            <Tab.Screen name="Feed" component={Feed} options={{ tabBarColor: "#503" }} />
            <Tab.Screen name="Create Story" component={CreateStory} options={{ tabBarColor: "#055" }} />
        </Tab.Navigator>
    );
}

export default bottomTabNavigator;