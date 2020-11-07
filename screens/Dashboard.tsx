import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import News from './News';
import Exercises from './Exercises';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.tabNavigation}>
      <StatusBar barStyle="light-content" translucent={true} />
      <Tab.Navigator
        initialRouteName={'Exercises'}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'lightgray',
          style: {
            backgroundColor: '#102B46',
            paddingBottom: 3,
          },
        }}>
        <Tab.Screen name="Exercises" component={Exercises} />
        <Tab.Screen name="News" component={News} />
      </Tab.Navigator>
    </SafeAreaView>

    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>HomePage</Text>
    //   <Button
    //     title="sarasa"
    //     onPress={() => {
    //       navigation.navigate('Profile');
    //     }}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  tabNavigation: {
    backgroundColor: '#102B46',
    flex: 1,
  },
});

export default Dashboard;
