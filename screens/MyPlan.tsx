import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Workout from './Workout';
import Exercises from './Exercises';

const Tab = createMaterialTopTabNavigator();

const MyPlan = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen name="Exercises" component={Exercises} />
    </Tab.Navigator>

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

export default MyPlan;
