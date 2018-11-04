import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from "react-native";
import { Container, Header, Content, Left, Input, Title, Right, Body, Button, Card, CardItem, Thumbnail, Tab, Tabs, TabHeading, List, ListItem, Item, Form, Label, Picker, Icon} from 'native-base';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Inicio from './App.js';

class Register extends Component {
	constructor(props){
    super(props);

    this.state = {
      tipoUsuario: "Tendero",
    }
  }

	static navigationOptions ={
    drawerLabel: 'Register',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./iconos/register.png')}
        style={styles.icono}
      />
      ),
  };

	setTipoUsuario(tipo: String) {
		this.setState({
			tipoUsuario: tipo
		});
	};

  irAlInicio = () => {
		alert('Has sido registrado con éxito');
    this.props.navigation.navigate('Inicio');
  };

	btn_back = () => {
		this.props.navigation.navigate('Login');
	};

  render() {
    return (
      <Container style={{backgroundColor: 'orange', justifyContent: 'center'}}>

				<Header style={{marginTop: 20, backgroundColor: 'white'}}>
          <Left>
            <Button transparent onPress={this.btn_back}>
              <MaterialIcons name='arrow-back' size={20} color="orange" />
            </Button>
					</Left>
					<Body>
						<Title style={{color: 'orange'}}>Regístrate</Title>
					</Body>
        </Header>

				<Content>
          <Form>
            <Item floatingLabel>
              <Label style={{color: 'white'}}>Nombre completo:</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={{color: 'white'}}>Correo o celular:</Label>
              <Input />
            </Item>
						<Item floatingLabel>
              <Label style={{color: 'white'}}>Dirección:</Label>
              <Input />
            </Item>
						<Item floatingLabel>
              <Label style={{color: 'white'}}>Contraseña:</Label>
              <Input />
            </Item>
						<Item floatingLabel>
							<Label style={{color: 'white'}}>Repita contraseña:</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label style={{color: 'white'}}>Nombre de la compañía:</Label>
							<Input />
						</Item>
						<Item picker>
						              <Picker
						                mode="dropdown"
														iosHeader="Selecciona el tipo de usuario"
														iosIcon={<Icon name="ios-arrow-down-outline" />}
						                style={{ width: 100 }}
						                placeholder="Select your SIM"
						                placeholderStyle={{ color: "#bfc6ea" }}
						                placeholderIconColor="#007aff"
														selectedValue={this.state.tipoUsuario}
                						onValueChange={this.setTipoUsuario.bind(this)}
						              >
						                <Picker.Item label="Tendero" value="tendero" />
						                <Picker.Item label="Distribuidora" value="distribuidora" />
						              </Picker>
					</Item>
          </Form>

        <View style={{alignItems: 'center', marginTop: 30}}>
        <TouchableOpacity style={{width: 140, backgroundColor: 'white', borderRadius: 30}} onPress={this.irAlInicio}>
        <Left>
        <MaterialIcons name="assignment-ind" size={20} color="orange" />
        </Left>
        <Body>
        <Text style={{fontSize: 13}}>Regístrate</Text>
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

export default Register;
