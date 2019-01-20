import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvDujRYVcQ5VdF3diDzziKBuAomSv3Oh8",
    authDomain: "mukeshplan-eaf09.firebaseapp.com",
    databaseURL: "https://mukeshplan-eaf09.firebaseio.com",
    projectId: "mukeshplan-eaf09",
    storageBucket: "mukeshplan-eaf09.appspot.com",
    messagingSenderId: "472969260601"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase