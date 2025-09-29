import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // track logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); 
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Successfully signed out");
      navigate("/login");
    } catch (error) {
      alert("Sign out failed: " + error.message);
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", padding: "20px" }}>
      {user ? (
        // If user is logged in, show Sign Out button
        <div style={{ textAlign: "center" }}>
          <h2>Welcome, {user.email}</h2>
          <button
            onClick={handleSignOut}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "red",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Sign Out
          </button>
        </div>
      ) : (
        // Otherwise, show the existing login form
        <>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link
              to="/signup"
              style={{
                padding: "5px 10px",
                backgroundColor: "#fff",
                border: "1px solid blue",
                borderRadius: "4px",
                color: "blue",
                textDecoration: "none",
                fontSize: "14px"
              }}
            >
              Sign up
            </Link>
          </div>

          <h2 style={{ textAlign: "center" }}>Login</h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "15px", textAlign: "left" }}>
              <label>Email</label><br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div style={{ marginBottom: "15px", textAlign: "left" }}>
              <label>Password</label><br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "blue",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px"
              }}
            >
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
