import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/store';
import FitnessPlanApp from './FitnessPlan';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const theme = {
  ...DefaultTheme,
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(true);
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        {showSplash ? (
          <View style={styles.splash}>
            <ImageBackground
              source={require('./public/splash.png')}
              style={styles.image}></ImageBackground>
          </View>
        ) : (
          <FitnessPlanApp />
        )}
      </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default App;
