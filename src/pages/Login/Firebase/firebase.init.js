
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAithentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAithentication;