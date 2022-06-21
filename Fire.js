import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBX-zOsLCHpTmsgay6hfMNnwlhGQAHMcZ4",
    authDomain: "todolist-3bdf0.firebaseapp.com",
    projectId: "todolist-3bdf0",
    storageBucket: "todolist-3bdf0.appspot.com",
    messagingSenderId: "237579960933",
    appId: "1:237579960933:web:b3ae03d9b29ef729f6fc8c"
}

class Fire{
    init() {
        if(!firebaseConfig.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if(user){
            }else{
                firebase.auth().signInAnonymously().catch(error=> {});
            }
        })
    }
}

export default Fire;