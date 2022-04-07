// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { isPropertyAccessChain } from "typescript";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCTocPf85Yxkr_HElG-5cbm9DMDd2JdV6k",
	authDomain: "food-delivery-app-93c54.firebaseapp.com",
	databaseURL:
		"https://food-delivery-app-93c54-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "food-delivery-app-93c54",
	storageBucket: "food-delivery-app-93c54.appspot.com",
	messagingSenderId: "126861232265",
	appId: "1:126861232265:web:081724344814bb8e31de58",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
