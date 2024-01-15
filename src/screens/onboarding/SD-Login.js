import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';

import {THEME_COLOR} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const SdLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Image source={require('../../images/logo.png')} style={styles.logo} />
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder={'Enter Email'}
          value={email}
          onChangeText={val => {
            setEmail(val);
          }}
          type={'email-address'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Enter Password'}
          value={password}
          secureTextEntry={true}
          onChangeText={val => {
            setPassword(val);
          }}
          style={styles.input}
        />
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            borderColor: THEME_COLOR,
            backgroundColor: THEME_COLOR,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={{color: 'grey'}}>{"Don't have account?"}</Text>
          <Text
            style={{marginLeft: 10, color: THEME_COLOR, fontWeight: '600'}}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            {'Create one'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
  logo: {
    width: '20%',
    height: '15%',
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: Dimensions.get('screen').height > 667 ? 60 : 40,
    alignSelf: 'center',
  },
  card: {
    width: '100%',
    alignSelf: 'center',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    elevation: 5,
    marginTop: Dimensions.get('screen').height > 667 ? 250 : 150,
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: THEME_COLOR,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },

  input: {
    width: Dimensions.get('window').width - 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SdLogin;
