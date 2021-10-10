import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [pageData, setPageData] = useState({
    description: '',
    projectId: null,
    time: '',
  });
  const handleLanguageChange = value => {
    if (value) {
    }
  };

  const onChangeText = (key, text) => {
    setPageData(page => ({...page, [key]: text}));
  };

  const onDonePress = () => {};

  const saveProjectTimeline = () => {};

  return (
    <CustomView style={{flex: 1}}>
      <Header title="Home" />
      <View
        style={{
          flex: 1,
          margin: 20,
        }}>
        <View style={styles.inputContainer}>
          <Dropdown
            items={[
              {label: 'Coffy', value: 1},
              {label: 'Plugger', value: 2},
              {label: 'Saha Bt', value: 3},
            ]}
            placeholder="Choose project"
            onValueChange={val => handleLanguageChange(val)}
            onDonePress={() => onDonePress()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Dropdown
            items={[
              {label: '1 Hour', value: 60},
              {label: '2 Hour', value: 120},
              {label: '3 Hour', value: 180},
              {label: '4 Hour', value: 240},
              {label: '5 Hour', value: 300},
              {label: '6 Hour', value: 360},
              {label: '7 Hour', value: 420},
              {label: '8 Hour', value: 480},
            ]}
            placeholder="Choose time"
            onValueChange={val => handleLanguageChange(val)}
            onDonePress={() => onDonePress()}
          />
        </View>
        <Input
          placeHolder="Add project description"
          style={styles.inputContainer}
          onChangeText={val => onChangeText('description', val)}
          value={pageData.description}
          multiline
        />
        <View style={styles.inputContainer}>
          <Button onPress={() => saveProjectTimeline()} title={'Save my work'} />
        </View>
      </View>
    </CustomView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
  },
});
