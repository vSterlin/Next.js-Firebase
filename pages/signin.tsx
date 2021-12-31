import type { NextPage } from "next"
import Link from "next/link";
import { FormEvent, useState } from "react";
import AuthService from "../services/AuthService";

const SignIn: NextPage = () => {

  const initialCredentials = { email: "", password: "" };
  const [credentials, setCredentials] = useState(initialCredentials);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AuthService.signIn(credentials);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          placeholder="Email"
        />
        <input
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          placeholder="Password"
        />

        <button type="submit">Sign In</button>
      </form>
      <Link href="signup">New here? Click to sign up</Link>
    </div>
  );

}

export default SignIn
