import type { NextPage } from "next";
import Link from "next/link";
import { FormEvent, useState } from "react";
import AuthService from "../services/AuthService";

const SignUp: NextPage = () => {
  const initialCredentials = { email: "", password: "" };
  const [credentials, setCredentials] = useState(initialCredentials);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AuthService.signUp(credentials);
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

        <button type="submit">Sign Up</button>
      </form>
      <Link href="/signin">Already signed up? Click to sign in</Link>
    </div>
  );
};

export default SignUp;
