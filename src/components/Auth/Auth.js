import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";
import "./Auth.css";

function Auth() {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      return false;
    } else return true;
  }

  // const handleGoogleSignIN = () => {
  //   signInWithPopup(auth, provider)
  //     .then((res) => {
  //       navigate("/stack");
  //     })
  //     .catch((error) => {
  //     });
  // };

  const handleSignIn = () => {
    // e.preventDefault();
    setError("");
    setLoading(true);
    if (email === "" || password === "")
     {
      setError("Required field is missing");
      setLoading(false);
    } 
    else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false); 
    }
     else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          navigate("/stack");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.code);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  const handleRegister = (e) => {
    setError("");
    e.preventDefault();
    setLoading(true);
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing.");
      setLoading(false);
    } 
    else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);
    } 
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          // navigate("/");
          setLoading(false);
          alert("Registered")
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
  };
  return (
    <div className="auth">
      <div className="auth-container">
        <p>Add another way to log in using any of the following services. </p>
        <div className="sign-options">
          {/* <div onClick={handleGoogleSignIN} className="single-option">
            
            <p><span><svg aria-hidden="true" class="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path><path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path><path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path><path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path></svg></span>{loading ? "Signing in..." : "Login with Google"}</p>
          </div> */}
         
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                <div className="input-field">
                  <p>Username</p>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </div>
                <button
                  onClick={handleRegister}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                  type="text"
                   />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password" 
                  />
                </div>
                <button
                  onClick={handleSignIn}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </>
            )}

            <p
              onClick={() => setRegister(!register)}
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "#0095ff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {register ? "Login" : "Register"} ?
            </p>
          </div>
        </div>
        {error !== "" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Auth;