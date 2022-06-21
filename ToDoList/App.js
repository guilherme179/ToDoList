import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import cores from './Cores';
import dadosTemp from './dadosTemp';
import TodoList from './componentes/TodoList';
import AddListModal from './componentes/AddListModal';
import Fire from './Fire';

export default class App extends React.Component {
  state = {
    addTodoVisivel: false,
    lists: [],
    user: {},
    loading: true,
  };

  componentDidMount() {
    firebase = new Fire((error, user) => {
      if (error) {
        return alert('Uh oh, algo de errado não está certo');
      }

      firebase.getLists((lists) => {
        this.setState({ lists, user }, () => {
          this.setState({ loading: false });
        });
      });

      this.setState({ user });
    });
  }

  componentWillUnmount() {
    firebase.detach();
  }

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
  };

  updateList = (list) => {
    this.setState({
      lists: this.state.lists.map((item) => {
        return item.id === list.id ? list : item;
      }),
    });
  };

  render() {
    if (this.state.loading) {
      return(
        <View style={styles.container}>
          <ActivityIndicator size="large" color={cores.azul} />
        </View>
      )
    }

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
        <View>
          <Text>User:{this.state.user.uid}</Text>
        </View>
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
            keyExtractor={(item) => item.id.toString()}
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