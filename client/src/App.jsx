import { useEffect } from "react";
import { AuthProvider } from "./auth/Authprovider";
import Tasks from "./pages/Tasks";
function App() {
  useEffect(() => {
    fetch("http://localhost:4000/health")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <AuthProvider>
        <Tasks />
    </AuthProvider>
  );
}

export default App;
