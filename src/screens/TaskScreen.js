import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, TextInput, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {fonts, colors} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomView from '../components/CustomView';
import {FlatList} from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GetIsDarkMode} from '../redux/system/selector';
import {color} from 'react-native-reanimated';

const storageKey = 'todo';
const TaskScreen = () => {
  const isDarkMode = GetIsDarkMode();
  //const isDarkMode = useSelector(state => state.system.isDarkMode);
  const state = useSelector(state => state.state);
  const [todo, setTodo] = useState([]);
  const [textInput, setTextInput] = useState();

  const addTodo = () => {
    if (textInput === '') {
      Alert.alert('Task is mandatory');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        done: false,
      };
      setTodo([...todo, newTodo]);
      setTextInput('');
    }
  };

  const getToDoFromUserDevice = async () => {
    try {
      const response = await AsyncStorage.getItem(storageKey);
      if (response) {
        const parseJSON = JSON.parse(response);
        setTodo(parseJSON);
      }
    } catch (error) {
      console.log('getToDoFromUserDevice', error);
    }
  };

  const saveTodoUserDevice = async payload => {
    try {
      const response = JSON.stringify(payload);
      await AsyncStorage.setItem(storageKey, response);
    } catch (error) {
      console.log('saveTodoUserDevice', error);
    }
  };

  const markTodoDone = todoId => {
    const newTodoItem = todo.map(item => {
      if (item.id === todoId) {
        return {...item, done: true};
      }
      return item;
    });
    setTodo(newTodoItem);
  };

  const deleteTodo = todoId => {
    const newTodoItem = todo.filter(item => item.id !== todoId);

    setTodo(newTodoItem);
  };

  useEffect(() => {
    getToDoFromUserDevice();
  }, []);
  useEffect(() => {
    saveTodoUserDevice(todo);
  }, [todo]);
  return (
    <CustomView style={styles.container}>
      <Header title="Tasks" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todo}
        renderItem={({item}) => (
          <ListItem data={item} done={markTodoDone} remove={deleteTodo} />
        )}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add new task"
            placeholderTextColor="grey"
            value={textInput}
            onChangeText={setTextInput}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="add"
            color={isDarkMode ? 'white' : 'black'}
            size={30}
            onPress={() => {
              addTodo(textInput);
            }}
          />
        </View>
      </View>
    </CustomView>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.mainColor.darkviolet,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: 10,
    elevation: 40,
    marginVertical: 20,
    flex: 1,
    marginRight: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    color: 'purple',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.mainColor.darkviolet,
  },
});
