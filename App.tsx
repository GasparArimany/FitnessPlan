import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/store';
import FitnessPlanApp from './FitnessPlan';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar barStyle="dark-content" />
        <FitnessPlanApp />
      </PaperProvider>
    </Provider>
  );
};

export default App;
