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

export const createUserProfileDocument = async (userAuth, additionalData)=>{
	// console.log(userAuth);
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists){
		const {displayName, email, photoURL} = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				photoURL,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.log('error creating user', error.message);
		}
	}
	
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

export default firebase;