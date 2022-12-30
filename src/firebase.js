import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTqx4T-GqbksWmiQBmtAfuYfRDlgdZCk4",
  authDomain: "disney-clone-af383.firebaseapp.com",
  projectId: "disney-clone-af383",
  storageBucket: "disney-clone-af383.appspot.com",
  messagingSenderId: "459416334266",
  appId: "1:459416334266:web:245d6493933d41bb3ef783",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
