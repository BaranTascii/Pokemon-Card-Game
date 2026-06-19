import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Pack</Link>

      <Link to="/collection">Collection</Link>

      <Link to="/achievements">Achievements</Link>

      {!user && (
        <>
          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>
        </>
      )}

      {user && (
        <>
          <span>{user.username}</span>

          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}
