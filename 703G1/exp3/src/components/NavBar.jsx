import { NavLink } from "react-router";

function NavBar({ user, onLogout }) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {user ? (
        <>
          <span className="nav-user">Welcome, {user.username}</span>
          <button type="button" className="btn logout-btn" onClick={onLogout}>
            Logout
          </button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
}

export default NavBar;