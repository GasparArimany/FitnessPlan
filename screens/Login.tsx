import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../store/auth/reducer';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import LottieView from 'lottie-react-native';

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
        <Button onPress={handleLogin}>Login</Button>
      )}
    </View>
  );
};

export default Login;
