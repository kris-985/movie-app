import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
}

export const logOut = () => {
    return signOut(auth);
}

 export const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}
