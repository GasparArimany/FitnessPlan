import React from 'react';
import Login from './screens/Login';
import News from './screens/Dashboard';
import Profile from './screens/Profile';
import Contact from './screens/Contact';
import {useTypedSelector} from './hooks/useTypedSelector';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import CustomIcon from './components/CustomIcon';
import {Image} from 'react-native';
import Dashboard from './screens/Dashboard';

enableScreens();
const BottomTab = createBottomTabNavigator();

const FitnessPlanApp = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  return !isAuth ? (
    <Login />
  ) : (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="News">
        <BottomTab.Screen
          name="Profile"
          options={{
            title: 'Mi Perfil',
            tabBarIcon: () => {
              return <Image source={require('./public/newspaper.png')} />;
            },
          }}
          component={Profile}
        />
        <BottomTab.Screen
          name="News"
          options={{
            title: 'Noticias',
            tabBarIcon: () => {
              return <Image source={require('./public/newspaper.png')} />;
            },
          }}
          component={Dashboard}
        />
        <BottomTab.Screen
          name="Contact"
          options={{
            title: 'Contacto',
            tabBarIcon: () => {
              return <Image source={require('./public/paper-plane.png')} />;
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
