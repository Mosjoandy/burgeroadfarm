import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCWqV-rb9lMdML5y7VTvy9IlbSvV6c5s_U",
    authDomain: "brfsite-fabb7.firebaseapp.com",
    databaseURL: "https://brfsite-fabb7.firebaseio.com",
    projectId: "brfsite-fabb7",
    storageBucket: "",
    messagingSenderId: "743591893350"
};
firebase.initializeApp(config);
console.log("start your engines!");

export default firebase
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();