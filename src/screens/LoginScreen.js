import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Image, Text, StyleSheet, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images, colors, fonts} from '../constants/';
import Input from '../components/Input';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import {hideLoader, setUser, toggleLoader} from '../redux/system/actions';
import I18n from '../i18n';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import {GetIsDarkMode} from '../redux/system/selector';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [pageData, setPageData] = useState({
    username: '',
    password: '',
  });
  const loading = useSelector(state => state.system.loading);
  const [rememberMe, setRememberMe] = useState();
  const {isDarkMode} = GetIsDarkMode();
  const handleRememberMe = () => {
    setRememberMe(rm => !rm);
  };
  const onChangeText = (key, value) => {
    setPageData(page => ({...page, [key]: value}));
  };
  const onLogin = () => {
    if ((pageData.username === '') | (pageData.password === '')) {
      Alert.alert('Username and password are mandatory');
    } else {
      dispatch(toggleLoader());
      dispatch(
        setUser({
          username: pageData.username,
          name: 'Omer',
          lastName: 'Uysal',
          mail: 'teouysal@outlook.com',
          token: 'Abc',
        }),
      );
      dispatch(hideLoader());
    }
  };
  return (
    <View style={styles.container}>
      <CustomView style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMethod="scale"
            resizeMode="contain"
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('username', text)}
            placeHolder="Kullanıcı Adı"
            value={pageData.username}
            icon={'mail-outline'}
            style={styles.input}
            maxLength={15}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('password', text)}
            placeHolder="Şifre"
            value={pageData.password}
            isHidden={true}
            icon={'lock-outline'}
            style={styles.input}
            maxLength={25}
          />
        </View>
        <View style={styles.rememberMeContainer}>
          <Checkbox onChangeState={handleRememberMe} checked={rememberMe} />
          <Text
            style={[
              styles.rememberMeText,
              {color: isDarkMode ? 'white' : 'black'},
            ]}>
            Beni hatırla
          </Text>
        </View>
        <View style={{marginVertical: 15}}>
          <Button onPress={() => onLogin()} text={'Giriş Yap'} />
        </View>
      </CustomView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {width: 300},
  logo: {width: 200, height: 300, tintColor: colors.mainColor.darkviolet},
  logoContainer: {},
  rememberMeContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
  },
  rememberMeText: {
    fontSize: fonts.f12,
    fontWeight: '500',
    marginLeft: 10,
  },
});
