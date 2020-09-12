import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <LottieView
        source={require('../animations/handSanitizers.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Profile;
