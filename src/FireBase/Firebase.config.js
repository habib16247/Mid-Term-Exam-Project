import { initializeApp } from "firebase/app";
let all = import.meta.env
const firebaseConfig = {
  apiKey: all.VITE_API_KEY,
  authDomain: all.VITE_AUTH_DOMAIN,
  projectId: all.VITE_PROJECT_ID,
  storageBucket: all.VITE_STORAGE_BUCKET,
  messagingSenderId: all.VITE_MESSAGING_SENDER_ID,
  appId: all.VITE_APP_ID
};

export const app = initializeApp(firebaseConfig);