import React from 'react';
import { Text, View, StyleSheet, Image, Linking, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Sobre(){
    return(
    <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Idealizadores do projeto: </Text>
                <View style={{marginTop: 50}}>
                    <Image style={{ marginLeft: 5, width: 200, height: 200, borderRadius: 5}} source={require('../assets/guilherme.jpg')}/>
                    <Text style={styles.name}>Guilherme: </Text>
                    <Text style={[styles.content, {marginTop: 15}]} onPress={() => { Linking.openURL('https://github.com/guilherme179') }}>
                        <Ionicons name={"logo-github"} size={24} style={{width: 32, marginRight: 5}}/>
                        Github 
                    </Text>
                    <Text style={styles.content} onPress={() => { Linking.openURL('https://www.linkedin.com/in/guilherme-souza-414472219/')}}>
                        <Ionicons name={"logo-linkedin"} size={24} style={{width: 32, marginRight: 5}}/>
                        Linkedin
                    </Text>
                    <Text style={styles.content} onPress={() => { Linking.openURL('https://www.instagram.com/_guiisouza17/')}}>
                        <Ionicons name={"logo-instagram"} size={24} style={{width: 32, marginRight: 5}}/>
                        Instagram
                    </Text>
                </View>
                <View style={{marginTop: 45, marginBottom: 15}}>
                    <Image style={{ marginLeft: 5, width: 200, height: 200, borderRadius: 5}} source={require('../assets/guilherme.jpg')}/>
                    <Text style={styles.name}>Matheus: </Text>
                    <Text style={[styles.content, {marginTop: 15}]} onPress={() => { Linking.openURL('https://github.com/matheus-felipe-c') }}>
                        <Ionicons name={"logo-github"} size={24} style={{width: 32, marginRight: 5}}/>
                        Github 
                    </Text>
                    <Text style={styles.content} onPress={() => { Linking.openURL('https://www.linkedin.com/in/matheus-felipe-de-oliveira-ferreira-49909b215/')}}>
                        <Ionicons name={"logo-linkedin"} size={24} style={{width: 32, marginRight: 5}}/>
                        Linkedin
                    </Text>
                    <Text style={styles.content} onPress={() => { Linking.openURL('https://www.instagram.com/theusf40/')}}>
                        <Ionicons name={"logo-instagram"} size={24} style={{width: 32, marginRight: 5}}/>
                        Instagram
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }, 
    title: {
        fontSize: 25,
        fontWeight: "600",
        marginLeft: 5
    },
    name: {
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 5,
        marginTop: 3
    },
    content: {
        fontSize: 15,
        fontWeight: "400",
        paddingLeft: 20,
        width: 200,
        marginLeft: 5
    }
}); 
