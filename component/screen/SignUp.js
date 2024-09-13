import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import React, { useState } from "react";

import signup_css from "../css/signup_css.css";
import Login from './Login';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(Login);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log('Confirm Password:', confirmPassword);
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

          <h2>Re-Enter Password</h2>
          <input 
            type="re-enter_password" 
            placeholder="Nhập lại password..." 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Đăng ký</button>
          <p>
            <span onClick to="Login">Đã có tài khoản? Đăng nhập</span>
        </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
