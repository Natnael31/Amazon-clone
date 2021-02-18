// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
	apiKey: "AIzaSyB13sWo-D4PtquzMAUCpFzRB7uvlB1Pevg",
	authDomain: "clone-ef0ad.firebaseapp.com",
	projectId: "clone-ef0ad",
	storageBucket: "clone-ef0ad.appspot.com",
	messagingSenderId: "1024640805124",
	appId: "1:1024640805124:web:294f75fd11f8f414908851",
	measurementId: "G-FPKRM1541F",
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
