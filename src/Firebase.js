// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
	apiKey: "AIzaSyBMXskJPTUirXinTuwpwoPLFsmupOdrvjg",
	authDomain: "e-clone-naty.firebaseapp.com",
	projectId: "e-clone-naty",
	storageBucket: "e-clone-naty.appspot.com",
	messagingSenderId: "742597972404",
	appId: "1:742597972404:web:43769e100926d476e8e2e1",
	measurementId: "G-VFCM012NYV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig) // initialize your firebase
const db = firebaseApp.firestore();// initialize your database
const auth = firebase.auth();// initialize authentication
export { db, auth };//export your db and auth