import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () =>{
    return(
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOption ={({ route })=>({
                tabBarIcon: ({ focused, color, size })=>{
                    let iconName;
                    if(route.name == 'Feed'){
                        iconName = focused ? 'book' : 'book-outline'
                    }else if(route.name == 'CreatePost'){
                        iconName = focused ? 'create' : 'create-outline'
                    }
                    return <Ionicons name={iconName} size={30} color={color} />
                },
            })}
                activeTintColor= {'lime-green'}
                inactiveTintColor= {'gray'}
        >
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='CreatePost' component={CreatePost} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    bottomTabStyle:{
        
    }
})

export default TabNavigator;