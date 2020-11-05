import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../store/auth/reducer';
import {View, SafeAreaView} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {Formik} from 'formik';

const Login: React.FC<any> = () => {
  const dispatch = useDispatch();
  const [isLogginIn, setIsLogginIn] = useState(false);

  const handleLogin = () => {
    console.log('handlelogin');
    setIsLogginIn(true);
    dispatch(
      loginUser({username: 'sarasaUsername', password: 'sarasaPassword'}),
    );
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {isLogginIn ? (
        <LottieView
          style={{flex: 1}}
          source={require('../animations/loading.json')}
          autoPlay
          loop
        />
      ) : (
        <Formik
        initialValues={{ email: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <SafeAreaView>
            {/* <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              underlineColor={"transparent"}
            /> */}
         <Button
            icon={require('../public/password-icon.png')}
            color="#00A9FF"
            onPress={handleLogin}
          >Login</Button>
          </SafeAreaView>
        )}
      </Formik>
      )}
    </View>
  );
};

export default Login;
