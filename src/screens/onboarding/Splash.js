import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {THEME_COLOR, WHITE} from '../../utils/Colors';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Image source={require('../../images/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME_COLOR,
  },
  logo: {
    width: '30%',
    height: '20%',
    backgroundColor: WHITE,
  },
});

export default Splash;
