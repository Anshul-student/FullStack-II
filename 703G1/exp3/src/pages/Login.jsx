import { useState } from "react";
import { useNavigate, Navigate } from "react-router";

function Login({ login, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password. Please use admin / 1234.");
    }
  };

  return (
    <div className="container login-page">
      <div className="card login-card">
        <h2>Welcome Back</h2>
        <p className="dashboard-subtitle">Sign in with your username and password to access the student dashboard.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="admin"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="1234"
            />
          </div>

          <button type="submit" className="btn login-submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login