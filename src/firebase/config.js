import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGntkpymO2I9xie_zM4xj0-mmCYFaS7RA",
  authDomain: "my-food-project-47e0a.firebaseapp.com",
  projectId: "my-food-project-47e0a",
  storageBucket: "my-food-project-47e0a.appspot.com",
  messagingSenderId: "321533876621",
  appId: "1:321533876621:web:b5a91a94c807c6519d85c4",
};

//Initialize Firebase

initializeApp(firebaseConfig);

//init Firestore

const db = getFirestore();

export { db };
