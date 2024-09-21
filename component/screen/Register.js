import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ActivityIndicator, Pressable } from 'react-native';
import axios from 'axios';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSubmit = async () => {
    try {
        const response = await axios.post('http://192.168.234.229:1999/auth/signin', {
          username,
          email,
          password,
        });
        setData(response.data);
        console.log('Đăng ký thành công:', response.data);
        navigation.navigate('Login');
      } catch (err) {
        setError(err);
        console.error('Có lỗi xảy ra:', err);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    
    axios.get(' 192.168.234.229:1999/auth/signin')
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
        <TextInput
          style={styles.input}
          placeholder="Nhập họ tên"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Nhập password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />       
        <Button title="Đăng ký" onPress={handleSubmit} />

        <View style={styles.text_question}>
            <Text style={styles.question}>Bạn đã có tài khoản?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.anwser}>Đăng nhập</Text>
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

export default Register;
