import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, Switch, View, Image} from 'react-native';
import {
  logoutUser,
  toggleLoader,
  hideLoader,
  setTheme,
} from '../redux/system/actions';
import {useDispatch, useSelector} from 'react-redux';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import {GetUser} from '../redux/system/selector';
import {ScrollView} from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.system.isDarkMode);
  const loggedInUser = GetUser();
  const changeTheme = () => {
    dispatch(setTheme(!isDarkMode));
  };
  const Logout = () => {
    dispatch(toggleLoader());
    dispatch(logoutUser());
    dispatch(hideLoader());
  };

  return (
    <CustomView style={{flex: 1}}>
      <Header title="Profile" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/noImage.jpeg')}
            style={styles.profileImage}
            resizeMethod="scale"
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
            {loggedInUser.name}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
            {loggedInUser.username}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
            {loggedInUser.lastName}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black'}]}>
            {loggedInUser.mail}
          </Text>
        </View>

        <View>
          <Switch onValueChange={changeTheme} value={isDarkMode} />
          <Text style={{color: isDarkMode ? 'white' : 'black'}}>Dark Mode</Text>
        </View>
        <Button onPress={Logout} title="Log out" />
      </ScrollView>
    </CustomView>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 10,
  },
  scrollView: {
    paddingBottom: 20,
    margin: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
