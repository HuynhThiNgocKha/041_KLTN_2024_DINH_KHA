import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ActivityIndicator, Pressable } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    if (!name ||!email ||!password) {
      setError('Vui lòng điền đầy đủ thông tin');
      return;
    }

    if(name!=data.name) {
      setError('Tên đăng nhập không đúng');
      return;    
    }

    if(email!=data.email) {
      setError('Email không đúng');
      return;    
    }
    
    if(password!=data.password) {
      setError('Mật khẩu không đúng');
      return;    
    }

    try{
      setData(data);
      setLoading(true);
      const response = axios.get('192.168.234.229:1999/auth/signup', {
        username: name,
        email: email,
        password: password,
      });
      setData(response.data);
      navigation.navigate('Home');
    }
    catch{
      setError('Lỗi kết nối đến máy chủ');
      return;
    }
    
  };

  useEffect(() => {
    
    axios.get(' 192.168.234.229:1999/auth/signup')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Họ Tên</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập name..."
          value={name}
          onChangeText={(text) => setUsername(text)}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nguyenvana@gmail.com"
          secureTextEntry={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập password..."
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Đăng nhập" onPress={handleSubmit}/>

        <View style={styles.text_question}>
            <Text style={styles.question}>Bạn chưa có tài khoản?</Text>
            <Pressable
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.anwser}>Đăng ký</Text>
            </Pressable>
            
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loginBox: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  text_question: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  question: {
    fontSize: 16,
    color: 'blue',
  },
  anwser: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Login;
