import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBX-zOsLCHpTmsgay6hfMNnwlhGQAHMcZ4',
  authDomain: 'todolist-3bdf0.firebaseapp.com',
  projectId: 'todolist-3bdf0',
  storageBucket: 'todolist-3bdf0.appspot.com',
  messagingSenderId: '237579960933',
  appId: '1:237579960933:web:b3ae03d9b29ef729f6fc8c',
};

class Fire {
  constructor(callback) {
    this.init(callback);
  }

  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(null, user);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            callback(error);
          });
      }
    });
  }

  getLists(callback) {
    let ref = firebase
      .firestore()
      .collection('users')
      .doc(this.userId)
      .collection('lists');

    this.unsubscribe = ref.onSnapshot((snapshot) => {
      lists = [];

      snapshot.forEach((doc) => {
        lists.push({ id: doc.id, ...doc.data() });
      });

      callback(lists);
    });
  }

  get userId() {
    return firebase.auth().currentUser.uid;
  }

  detach() {
    this.unsubscribe();
  }
}

export default Fire;
