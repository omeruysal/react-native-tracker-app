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
import CustomText from '../components/CustomText';
import { fonts } from '../constants';
import Dropdown from '../components/Dropdown';

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

  const infoBoxStyle = {
    ...styles.infoBox,
    backgroundColor: isDarkMode ? 'rgba(27,28,31, 0.9)' : 'rgb(255, 255, 255)',
  };

  const cellStyle = {
    ...styles.cell,
    borderBottomColor: isDarkMode ? 'white' : 'black',
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
       
          <View style={infoBoxStyle}>
          <View style={styles.cell}>
            <CustomText style={styles.titleText} text='Name :'/>
            <CustomText style={styles.infoText} text={loggedInUser.name}/>
          </View>
          <View style={styles.cell}>
            <CustomText style={styles.titleText} text='Last Name :'/>
            <CustomText style={styles.infoText} text={loggedInUser.lastName}/>
          </View>
          <View style={styles.cell}>
            <CustomText style={styles.titleText} text='Username :'/>
            <CustomText style={styles.infoText} text={loggedInUser.username}/>
          </View>
          <View style={styles.cell}>
            <CustomText style={styles.titleText} text='E-mail :'/>
            <CustomText style={styles.infoText} text={loggedInUser.mail}/>
          </View>

        </View>
        <View style={infoBoxStyle}>

          <View style={styles.cell}>
            <CustomText style={styles.titleText} text='Theme :'/>
            <View style={styles.row}>
            <Text style={{color: isDarkMode ? 'white' : 'black'}}>Dark Mode</Text>
            <Switch onValueChange={changeTheme} value={isDarkMode} />
            </View>
          </View>
          <View style={[styles.cell,{borderBottomWidth:0}]}>
            <CustomText style={styles.titleText} text='Language :'/>
            <View style={{marginTop:10}}/>
            <Dropdown items={[
              {label: 'Turkish', value: 'tr'},
              {label: 'English', value: 'en'},
            ]}
            placeholder="Set language"/>
          </View>
        </View>
        <Button onPress={Logout} title="Log out" />
      </ScrollView>
    </CustomView>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between'
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
  infoBox: {
    marginTop:25,
    borderRadius : 10
  },
  cell: {
    marginVertical: 10,
    marginHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },
  infoText:{
    marginBottom: 10,
  },
  titleText:{
    fontSize: fonts.f12,
    fontWeight: '400',
    marginBottom: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
