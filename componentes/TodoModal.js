import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import cores from "../Cores";

export default class TodoModal extends React.Component{

    state = {
        name: this.props.list.name,
        color: this.props.list.color,
        todos: this.props.list.todos
    }

    renderTodo = todo => {
        return(
            <View style={styles.todoContainer}>
                <TouchableOpacity>
                    <Ionicons name={todo.completed ? "ios-square" : "ios-square-outline"} size={24} color={cores.cinza} style={{width: 32}}/>
                </TouchableOpacity>

                <Text style={[styles.todo, { textDecorationLine: todo.completed ? "line-through" : "none", color: todo.completed ? cores.cinza : cores.preto }]}>{todo.title}</Text>
            </View>
        )
    }

    render(){

        const taskCount = this.state.todos.length
        const completedCount = this.state.todos.filter(todo => todo.completed).length

        return(
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{position: 'absolute', top: 64, right: 32, zIndex: 10}} onPress={this.props.closeModal}>
                   <AntDesign name="close" size={24} color={cores.preto}/>
                </TouchableOpacity>

                <View style={[styles.section, styles.header, {borderBottomColor: this.state.color}]}>
                    <View>
                        <Text style={styles.title}>{this.state.name}</Text>
                        <Text style={styles.taskCount}>{completedCount} de {taskCount} tarefas completas</Text>
                    </View>
                </View>

                <View style={[styles.section, {flex: 3}]}>
                    <FlatList 
                        data={this.state.todos} 
                        renderItem={({item}) => this.renderTodo(item)} 
                        keyExtractor={item => item.title} 
                        contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 64}} 
                        showsVerticalScrollIndicator={false}/>
                </View>

                <KeyboardAvoidingView style={[styles.section, styles.footer]} behavior="padding">
                    <TextInput style={[styles.input, {borderColor: this.state.color}]}/>
                    <TouchableOpacity style={[styles.addTodo, {backgroundColor: this.state.color}]}>
                        <AntDesign name="plus" size={16} color={cores.branco}/>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    section: {
        flex: 1,
        alignSelf: "stretch"
    },
    header: {
        justifyContent: "flex-end",
        marginLeft: 64,
        borderBottomWidth: 3
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        color: cores.preto
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: cores.cinza,
        fontWeight: "600"
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 8
    },
    addTodo: {
        borderRadius: 4,
        padding: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    todoContainer: {
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    todo: {
        color: cores.preto,
        fontWeight: "700",
        fontSize: 16
    }

});