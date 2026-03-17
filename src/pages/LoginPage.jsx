import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await API.get("/users");
      const foundUsers = response.data;
      setUsers(foundUsers);

      const matchedUser = foundUsers.find(
        (user) => user[1].toLowerCase() === username.toLowerCase()
      );

      if (matchedUser) {
        navigate(`/dashboard/${matchedUser[0]}`);
      } else {
        alert("User not found");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Could not connect to backend");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Banking Portal Login</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginRight: "1rem", padding: "0.5rem" }}
      />
      <button onClick={handleLogin}>Login</button>

      <div style={{ marginTop: "2rem" }}>
        <h3>Demo Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user[0]}>
              {user[1]} ({user[2]})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LoginPage;