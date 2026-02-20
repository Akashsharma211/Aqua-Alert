import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function AuthPage() {
  return (
    <div className="min-h-screen">
      <Routes>
        {/* default /auth */}
        <Route path="/" element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}