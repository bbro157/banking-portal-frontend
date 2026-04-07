import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";

function Dashboard() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await API.get(`/accounts/${userId}`);
        setAccounts(response.data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, [userId]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <h2>User ID: {userId}</h2>

      <button onClick={() => navigate(`/transfer/${userId}`)}>
        Go to Transfer Page
      </button>

      <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>
        Logout
      </button>

      <h3 style={{ marginTop: "2rem" }}>Accounts</h3>
      {accounts.length === 0 ? (
        <p>No accounts found.</p>
      ) : (
        <ul>
          {accounts.map((account) => (
            <li key={account[0]}>
              <strong>{account[1]}</strong> | Balance: ${account[2]} | Account #:{" "}
              {account[3]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;