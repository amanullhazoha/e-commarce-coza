import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage"

const config = {
    apiKey: "AIzaSyBCdM2oENuN0ishEYZa6RhEWvCM-ZX2FEg",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "cozastore-55708.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    databaseURL: "https://cozastore-55708-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(config);

export const db = getDatabase(app);
export const storage = getStorage(app);
