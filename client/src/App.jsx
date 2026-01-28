import { useEffect } from "react";
import { AuthProvider, useAuth } from "./auth/Authprovider";
import Tasks from "./pages/Tasks";
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "./firebaae/firebase";
import { useState } from "react";

function AuthUI() {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (loading) {
    return <p>Auth loading...</p>;
  }
  if (user) {
    return (
      <div>
        {" "}
        <p>Logged in as {user.email}</p>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </div>
    );
  }
  return (
    <div style={{ padding: 24 }}>
      <h2>DevFlow Login</h2>
      <button onClick={() => signInWithRedirect(auth, googleProvider)}>
        Sign in with Google
      </button>
      <hr />;
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      ;
      <br />;
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      ;
      <br />;
      <button onClick={() => signInWithEmailAndPassword(auth, email, password)}>
        {" "}
        Sign in with email
      </button>
      ;
      <button
        onClick={() => createUserWithEmailAndPassword(auth, email, password)}
      >
        Sign up with Email
      </button>
      ;
    </div>
  );
}
function App() {
  return (
    <div>
      <AuthProvider>
        <AuthUI />
        <Tasks />
      </AuthProvider>
    </div>
  );
}

export default App;
