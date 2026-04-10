firebase_js = """import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  addDoc,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: استبدل بإعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// دوال المصادقة
export const registerUser = (email, password) => 
  createUserWithEmailAndPassword(auth, email, password);

export const loginUser = (email, password) => 
  signInWithEmailAndPassword(auth, email, password);

export const logoutUser = () => signOut(auth);

export const onAuthChange = (callback) => 
  onAuthStateChanged(auth, callback);

// دوال Firestore
export const createUserProfile = async (userId, userData) => {
  await setDoc(doc(db, 'users', userId), {
    ...userData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
};

export const getUserProfile = async (userId) => {
  const docSnap = await getDoc(doc(db, 'users', userId));
  return docSnap.exists() ? docSnap.data() : null;
};

export const updateUserProfile = async (userId, data) => {
  await updateDoc(doc(db, 'users', userId), {
    ...data,
    updatedAt: serverTimestamp()
  });
};

export const subscribeToCollection = (collectionName, callback, conditions = []) => {
  let q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
  
  conditions.forEach(condition => {
    q = query(q, where(condition.field, condition.operator, condition.value));
  });
  
  return onSnapshot(q, callback);
};

export { collection, doc, setDoc, getDoc, updateDoc, deleteDoc, addDoc, serverTimestamp, Timestamp };
"""

print("✅ firebase.js")
print(firebase_js)
