import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../store/auth/reducer';
import {View, StyleSheet} from 'react-native';
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
    <View style={styles.screen}>
      {isLogginIn ? (
        <LottieView
          style={{flex: 1}}
          source={require('../animations/loading.json')}
          autoPlay
          loop
        />
      ) : (
        <>
          <Button
            mode="outlined"
            onPress={handleLogin}
            style={styles.LoginButton}
            labelStyle={styles.ButtonText}>
            Acceder
          </Button>
          <Button labelStyle={{...styles.ButtonText, fontSize: 16}} mode="text">
            Olvidaste la contraseña?
          </Button>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0c182d',
  },
  LoginButton: {
    backgroundColor: '#0c182d',
    borderColor: 'white',
    height: 60,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  ButtonText: {color: 'white', fontSize: 20},
});

export default Login;
