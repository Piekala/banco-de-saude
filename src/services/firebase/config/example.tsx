//deve-se criar um arquivo index.tsx com essas configurações

import { getAuth }       from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage }    from "firebase/storage";
import { getDatabase }   from "firebase/database";
import { getAnalytics }  from "firebase/analytics";


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth      = getAuth(app);
export const storage   = getStorage(app);
export const db        = getDatabase(app);
export const analytics = getAnalytics(app);
