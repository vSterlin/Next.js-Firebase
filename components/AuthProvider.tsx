import { User } from "firebase/auth";
import { createContext } from "react";
import useAuth from "../hooks/use-auth";

const AuthContext = createContext<User | null>(null)

const AuthProvider = ({ children }: any) => {
  const { user } = useAuth();

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
