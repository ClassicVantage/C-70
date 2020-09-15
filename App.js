import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import SearchScreen from 'screens/Search_Screen'
import TransactionScreen from 'screens/Transaction_Screen'


export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}
const TabNavigator = createBottomTabNavigator({
  Transaction: {screen:TransactionScreen},
  Search: {screen:SearchScreen}},{
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:({})=>{
        const routeName=navigation.state.routeName
        if (routeName==='Transaction'){
          return(<Image 
          source={require('./assets/book.png')} style={{width:40,height:40}}/>)
        } 
      else if (routeName === 'Search'){
        return(<Image 
        source={require('./assets/searchingbook.png')} style={{width:40,height:40}}/>)
      }
      }
    })
  
});



const AppContainr= createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
