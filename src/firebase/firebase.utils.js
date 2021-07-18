import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBvmqRHJ_p7EBolBX5xrYHhPxFmnV9SEE0",
	authDomain: "crown-db-690ed.firebaseapp.com",
	projectId: "crown-db-690ed",
	storageBucket: "crown-db-690ed.appspot.com",
	messagingSenderId: "1021673212628",
	appId: "1:1021673212628:web:9d9e23e817740e088cc941",
	measurementId: "G-T997R0J66T"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;