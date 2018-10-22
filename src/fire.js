import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyBMQuJrCKlpGEDeZfDs_u9zB7tOXlmqMlU",
    authDomain: "habit-creator.firebaseapp.com",
    databaseURL: "https://habit-creator.firebaseio.com",
    projectId: "habit-creator",
    storageBucket: "habit-creator.appspot.com",
    messagingSenderId: "63511062626"
}

const fire = firebase.initializeApp(config);
export default fire;