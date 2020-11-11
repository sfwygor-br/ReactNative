import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Form from './pages/Form';

const appStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <appStack.Navigator headerMode='none'>
                <appStack.Screen name='Home' component={Home} />
                <appStack.Screen name='Form' component={Form} />
            </appStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;