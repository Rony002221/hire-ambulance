import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBaseConfig";

const initializeFireBase = () =>{

    initializeApp(firebaseConfig);
}

export default initializeFireBase;