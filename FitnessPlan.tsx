import React from 'react';
import Login from './screens/Login';
import MyPlan from './screens/MyPlan';
import Profile from './screens/Profile';
import Contact from './screens/Contact';
import {useTypedSelector} from './hooks/useTypedSelector';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomIcon from './components/CustomIcon';

enableScreens();
const BottomTab = createBottomTabNavigator();

const FitnessPlanApp = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  return !isAuth ? (
    <Login />
  ) : (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="MyPlan">
        <BottomTab.Screen
          name="Profile"
          options={{
            title: 'Mi Perfil',
            tabBarIcon: (props) => {
              return <CustomIcon {...props} name="user-friends" />;
            },
          }}
          component={Profile}
        />
        <BottomTab.Screen
          name="MyPlan"
          options={{
            title: 'Mi Plan',
            tabBarIcon: (props) => {
              return <CustomIcon {...props} name="user-edit" />;
            },
          }}
          component={MyPlan}
        />
        <BottomTab.Screen
          name="Contact"
          options={{
            title: 'Contacto',
            tabBarIcon: (props) => {
              return <CustomIcon {...props} name="user-ninja" />;
            },
          }}
          component={Contact}
        />
      </BottomTab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Mi Plan" component={MyPlan} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default FitnessPlanApp;
