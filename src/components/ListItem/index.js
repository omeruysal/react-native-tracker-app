import React, {useEffect} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {colors, fonts} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListItem = ({data, done, remove}) => {
  const isDarkMode = useSelector(state => state.system.isDarkMode);

  return (
    <View style={!isDarkMode ? styles.listItem : styles.listItem}>
      <View style={{flex: 1}}>
        <Text
          style={[
            styles.text,
            {
              color: isDarkMode ? 'white' : 'black',
              textDecorationLine: data?.done ? 'line-through' : 'none',
            },
          ]}>
          {data.task}
        </Text>
      </View>
      {!data?.done && (
        <TouchableOpacity
          onPress={() => {
            done(data.id);
          }}>
          <View style={[styles.actionIcon, {backgroundColor: 'green'}]}>
            <Icon name="done" size={25} color={'white'} />
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => {
          remove(data.id);
        }}>
        <View style={[styles.actionIcon]}>
          <Icon name="delete" size={20} color={'white'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: fonts.f13,
  },
  actionIcon: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginLeft: 5,
    borderRadius: 4,
  },
});
