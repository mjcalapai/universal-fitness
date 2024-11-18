import React from "react";

function Login() {
  const handleLogin = () => {
    // Mock authentication logic
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;