import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import React, { useState } from "react";

import login_css from '../css/login_css.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>User Name</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Nhập username..." 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <h2>Password</h2>
          <input 
            type="password" 
            placeholder="Nhập password..." 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Đăng nhập</button>
          <p>
            <span onClick to="SingUp">Chưa có tài khoản? Đăng nhập</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
