import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";          // your auth instance
import { signOut } from "firebase/auth";    // import signOut from firebase/auth

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);   // use auth instance here
      alert("Successfully signed out");
      navigate("/login");
    } catch (error) {
      alert("Sign out failed: " + error.message);
    }
  };

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#f0f0f0",
      borderBottom: "1px solid #ccc"
    }}>
      <h2 style={{ margin: 0 }}>DEV@Deakin</h2>

      <input
        type="text"
        placeholder="Search..."
        style={{
          flex: "1",
          margin: "0 20px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          maxWidth: "500px"
        }}
      />

      <div>
        <Link to="/post" style={{ marginLeft: "20px", color: "#000", fontWeight: "bold", textDecoration: "none" }}>
          Post
        </Link>

        {user ? (
          <button
            onClick={handleSignOut}
            style={{
              marginLeft: "20px",
              padding: "5px 10px",
              backgroundColor: "red",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Sign Out
          </button>
        ) : (
          <Link to="/login" style={{ marginLeft: "20px", color: "#000", fontWeight: "bold", textDecoration: "none" }}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
