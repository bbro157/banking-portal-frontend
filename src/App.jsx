import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import TransferPage from "./pages/TransferPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard/:userId" element={<Dashboard />} />
        <Route path="/transfer/:userId" element={<TransferPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;