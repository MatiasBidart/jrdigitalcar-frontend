"use client";

import { useState, useEffect } from "react";
import { AdminPanel } from "@/components/AdminPanel";
import { LoginPage } from "@/components/LoginPage";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminPanel />;
}

