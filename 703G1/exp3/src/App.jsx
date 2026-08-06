import { useState } from "react";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentList from "./pages/StudentList";
import StudentProfile from "./pages/StudentProfile";

function App() {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username.trim().toLowerCase() === "admin" && password === "1234") {
      setUser({ username: "Admin" });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <NavBar user={user} onLogout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="students" element={<StudentList />}>
            <Route path=":id" element={<StudentProfile />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login login={login} user={user} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;