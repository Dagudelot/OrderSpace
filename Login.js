import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from "react-native";
import { Container, Header, Content, Left, Input, Title, Right, Body, Button, Card, CardItem, Thumbnail, Tab, Tabs, TabHeading, List, ListItem, Item, Form, Label} from 'native-base';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Inicio from './App.js';
import Register from './Register.js';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA-IcvvA0Pe1sJ5ihANprIxBgoj-ZTo1xk",
   authDomain: "orderspace-e5bd8.firebaseapp.com",
   databaseURL: "https://orderspace-e5bd8.firebaseio.com",
   projectId: "orderspace-e5bd8",
   storageBucket: "orderspace-e5bd8.appspot.com",
};

 firebase.initializeApp(firebaseConfig);

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      response: '',
    }

    this.signUp = this.signUp.bind(this)
    this.loginUser = this.loginUser.bind(this)

  }

  static navigationOptions ={
    drawerLabel: 'Login',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./iconos/login.png')}
        style={styles.icono}
      />
      ),
  };

  signUp = (email, password) => {
      try {
        firebase.auth().createUserWithEmailAndPassword(email, password)

        this.setState({
          response: 'Usuario registrado correctamente. Inicie sesión'
        })

      } catch (error) {
        console.log(error.toString())
      }

    };

loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)

      this.props.navigation.navigate('Inicio')

    } catch (error) {
      console.log(error.toString())
    }

  };

  irAlInicio = () => {
    this.props.navigation.navigate('Inicio');
  };

  irAlRegister = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <Container style={{backgroundColor: 'orange', justifyContent: 'center'}}>
        <Content>
        <Image source={require('./assets/icon.png')} style={{width: 70, height: 70, borderRadius: 15, marginTop: 100, marginLeft: 150, marginBottom: 70}}/>
          <Form>
            <Item floatingLabel>
              <Label style={{color: 'white'}}>Correo o teléfono</Label>
              <Input
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{color: 'white'}}>Contraseña</Label>
              <Input
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}/>
            </Item>
            <Item>
            <Text>{this.state.response}</Text>
            </Item>
          </Form>

        <View style={{flex: 1, flexDirection: 'row', margin: 50}}>

        <TouchableOpacity style={{width: 140, backgroundColor: 'white', borderRadius: 30}} onPress={() => this.signUp(this.state.email, this.state.password)}>
        <Left>
        <MaterialIcons name="assignment-ind" size={20} color="orange" />
        </Left>
        <Body>
        <Text>Regístrate</Text>
        </Body>
        </TouchableOpacity>

        <TouchableOpacity style={{width: 140, backgroundColor: 'white', borderRadius: 30}} onPress={() => this.loginUser(this.state.email, this.state.password)}>
        <Left>
        <MaterialIcons name="arrow-forward" size={20} color="orange" />
        </Left>
        <Body>
        <Text>Inicia sesión</Text>
        </Body>
        </TouchableOpacity>

        </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
input: {
  color: 'white',
},
  distribuidoras: {
    color: 'gray',
    fontSize: 12,
  },
  FotoPerfil: {
    borderRadius: 30,
    width: 350,
    height: 160,
    marginTop: 20,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    display:'flex',
    color: '#FF9114',
    fontWeight: 'bold',
  },
  productos: {
    width: 130,
    height: 130,
  },
  descripcion: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 6,
    color: 'gray'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10
  },
  icono: {
    width: 24,
    height: 24,
  },
  info: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  categorias: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 15,
    opacity: 0.3,
  },
});

export default Login;
