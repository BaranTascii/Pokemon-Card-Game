import { useState } from "react";
import { login as loginApi }
from "../services/api";

import { useAuth }
from "../context/AuthContext";

export default function Login() {

  const auth = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleSubmit(e) {

    e.preventDefault();

    const result =
      await loginApi({
        email,
        password
      });

    auth.login(result);
  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>
          setPassword(e.target.value)
        }
      />

      <button>
        Login
      </button>

    </form>

  );
}