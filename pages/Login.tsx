import React from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../store/auth/reducer';
import {Button, View} from 'react-native';

const Login: React.FC<any> = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log('handlelogin');
    dispatch(
      loginUser({username: 'sarasaUsername', password: 'sarasaPassword'}),
    );
  };
  return (
    <View>
      <Button title="login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
