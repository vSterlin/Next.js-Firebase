import { onAuthStateChanged, onIdTokenChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onIdTokenChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    });
    // onAuthStateChanged(auth, (user) => {
    //   // if (!user){
    //   //   console.log("unauthorized")
    //   //   // redirect here
    //   // }
    //   // else {
    //   //   setUser(user);
    //   // }
    //   console.log(user)
    //   setUser(user);
    // });
  }, []);

  return { user };
};

export default useAuth;
