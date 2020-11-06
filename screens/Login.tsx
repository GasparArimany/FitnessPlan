import React, {useContext, useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../store/auth/reducer';
import {SafeAreaView, StyleSheet, Image, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {Formik} from 'formik';
import {MAIN_COLOR} from '../constants';
import {DimensionsContext} from '../Contexts/DimensionsContext';

const Login: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [isLogginIn, setIsLogginIn] = useState(false);
  const dimensions = useContext(DimensionsContext);

  // const handleLogin = () => {
  //   console.log('handlelogin');
  //   setIsLogginIn(true);
  //   dispatch(
  //     loginUser({username: 'sarasaUsername', password: 'sarasaPassword'}),
  //   );
  // };

  return (
    <SafeAreaView style={styles.screen}>
      {isLogginIn ? (
        <LottieView
          style={{flex: 1}}
          source={require('../animations/loading.json')}
          autoPlay
          loop
        />
      ) : (
        <SafeAreaView style={styles.FormContainer}>
          <View
            style={{
              width: dimensions.width * 0.8,
              height: dimensions.height * 0.5,
              flex: 1,
              marginBottom: dimensions.height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                ...styles.image,
                width: '100%',
              }}
              source={require('../public/logo.png')}
            />
          </View>

          <View style={{flex: 2}}>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={(values: {email: string; password: string}) => {
                setIsLogginIn(true);
                dispatch(loginUser(values));
              }}>
              {({handleChange, handleBlur, handleSubmit, values}) => (
                <View style={{flex: 1, justifyContent: 'space-evenly'}}>
                  <TextInput
                    label="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={{height: dimensions.height * 0.1}}
                  />
                  <TextInput
                    label="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.email}
                    style={{height: dimensions.height * 0.1}}
                  />
                  <Button
                    style={{
                      ...styles.LoginButton,
                      width: dimensions.width * 0.8,
                      height: dimensions.height * 0.1,
                    }}
                    mode="outlined"
                    icon={require('../public/password-icon.png')}
                    color={MAIN_COLOR}
                    onPress={handleSubmit}>
                    Login
                  </Button>
                </View>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0c182d',
    alignItems: 'center',
  },
  LoginButton: {
    borderColor: MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    borderWidth: 2,
  },
  image: {
    resizeMode: 'contain',
  },
  FormContainer: {
    justifyContent: 'center',
  },
});

export default Login;
