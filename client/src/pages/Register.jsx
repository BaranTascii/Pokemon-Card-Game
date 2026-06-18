import { useState } from "react";
import { register } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await register(form);

    alert("Registered");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        onChange={(e) =>
          setForm({
            ...form,
            username: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <button>Register</button>
    </form>
  );
}
