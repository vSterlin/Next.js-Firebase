import { FirebaseError } from "firebase/app";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";

type Credentials = {
  email: string;
  password: string;
};

class AuthService {
  public static async signUp(credentials: Credentials) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      console.log(userCredential);
    } catch (err) {
      this.handleError(err);
    }
  }


  public static async signIn(credentials: Credentials) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      console.log(userCredential);
    } catch (err) {
      this.handleError(err);
    }
  }

  // server side only function
  public static async isAuthenticated(){

  }

  private static handleError(err: unknown) {
    const firebaseErr = err as FirebaseError;
    console.log(firebaseErr.message, firebaseErr.name);
  }
}

export default AuthService;
