import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Login from './pages/Login'
import SignInSelectAccType from './pages/SignInSelectAccType'
import SignInClient from './pages/SignInClient'
import SignInPoint from './pages/SignInPoint'
import SignInPending from './pages/SignInPending'
import Dashboard from './pages/Dashboard'

const AppStack = createStackNavigator()

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#d5d5d5'
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="SignInSelectAccType" component={SignInSelectAccType} />
        <AppStack.Screen name="SignInClient" component={SignInClient} />
        <AppStack.Screen name="SignInPoint" component={SignInPoint} />
        <AppStack.Screen name="SignInPending" component={SignInPending} />
        <AppStack.Screen name="Dashboard" component={Dashboard} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes