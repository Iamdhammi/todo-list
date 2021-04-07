import React, { useEffect, createContext } from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/AppNavigation';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist";
import store from "./src/ducks/store";
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  const persistor = persistStore(store);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
      <PersistGate 
        loading={
          <Spinner
            visible={true}
            textContent={''}
            customIndicator={<Image resizeMode="contain" source={require('./src/images/logo.png')} style={{height: 80, width: 80}} />}
            overlayColor={'rgba(255, 255, 255)'}
          />
        } 
        persistor={persistor}
      >
        <Provider store={store}>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
            <Toast ref={(ref) => Toast.setRef(ref)} visibilityTime={2000}  />
        </Provider>
      </PersistGate>
  );
};

export default App;