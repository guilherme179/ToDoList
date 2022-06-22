import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import cores from '../Cores';
import dadosTemp from '../dadosTemp';
import TodoList from '../componentes/TodoList';
import AddListModal from '../componentes/AddListModal';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = '@user_input';

const saveLista = async (lists) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
    alert('Data successfully saved');
  } catch (e) {
    alert('Failed to save the data to the storage');
  }
};

export default class Home extends React.Component {
  state = {
    addTodoVisivel: false,
    lists: dadosTemp,
  };

  toggleAddTodoModal() {
    this.setState({ addTodoVisivel: !this.state.addTodoVisivel });
  }

  renderList = (list) => {
    return <TodoList list={list} updateList={this.updateList} />;
  };

  addList = (list) => {
    this.setState({
      lists: [
        ...this.state.lists,
        { ...list, id: this.state.lists.length + 1, todos: [] },
      ],
    });
    saveLista(this.state.lists);
  };

  updateList = (list) => {
    this.setState({
      lists: this.state.lists.map((item) => {
        return item.id === list.id ? list : item;
      }),
    });
  };

  getData = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data === null) return;

      this.setState({
        lists: JSON.parse(data),
      });
    } catch (e) {
      alert('Oops');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addTodoVisivel}
          onRequestClose={() => this.toggleAddTodoModal()}>
          <AddListModal
            closeModal={() => this.toggleAddTodoModal()}
            addList={this.addList}
          />
        </Modal>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.divisor} />
          <Text style={styles.titulo}>
            ToDo{' '}
            <Text style={{ fontWeight: '300', color: cores.azul }}>Lists</Text>
          </Text>
          <View style={styles.divisor} />
        </View>

        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity
            style={styles.addLista}
            onPress={() => this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={16} color={cores.azul} />
          </TouchableOpacity>

          <Text style={styles.add}>Add Lista</Text>
        </View>

        <View
          style={{ height: 275, paddingHorizontal: 18, alignSelf: 'center' }}>
          <FlatList
            data={this.state.lists}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
            keyboardShouldPersistTaps="always"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  divisor: {
    backgroundColor: cores.azulClaro,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  titulo: {
    fontSize: 38,
    fontWeight: '800',
    color: cores.preto,
    paddingHorizontal: 64,
  },
  addLista: {
    borderWidth: 2,
    borderColor: cores.azulClaro,
    alignSelf: 'center',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: cores.preto,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
    alignSelf: 'center',
  },
});
