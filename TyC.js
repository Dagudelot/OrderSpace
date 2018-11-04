import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Linking} from "react-native";
import { Container, Header, Content, Left, Input, Title, Right, Body, Button, Card, CardItem, Thumbnail, Tab, Tabs, TabHeading, List, ListItem, Item, Form, Label} from 'native-base';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Inicio from './App.js';
import Register from './Register.js';

class TyC extends Component {
  static navigationOptions ={
    drawerLabel: 'TyC',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./iconos/tyc.png')}
        style={styles.icono}
      />
      ),
  };

  btn_back = () => {
    this.props.navigation.navigate('Inicio');
  };

  webPage = () => {
    this.props.navigation.navigate('http://www.google.com.co');
  };

  render() {
    return (
      <Container style={{justifyContent: 'center'}}>

        <Header style={{marginTop: 20, backgroundColor: 'white'}}>
          <Left>
            <Button transparent onPress={this.btn_back}>
              <MaterialIcons name='arrow-back' size={20} color="orange" />
            </Button>
					</Left>
					<Body>
						<Title style={{color: 'orange'}}>Términos & Condiciones</Title>
					</Body>
        </Header>

        <Content style={{marginTop: 20, alignItems: 'center'}}>
        <Text style={styles.tyc}>Mediante la Resolución 4170 de 2016, el Ministerio de Transporte reglamenta el procedimiento que deben adelantar las compañías de seguros autorizadas en el país para la expedición de la póliza de Seguro Obligatorio de Accidentes de Tránsito (SOAT)</Text>
        <Text style={styles.tyc}>Puedes encontrar más información accediendo a nuestra página web:</Text>
        <Text style={{color: 'orange', fontSize: 20, marginLeft: 110}}
        onPress={() => Linking.openURL('http://orderspace.tk')}>
        OrderSpace
        </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tyc: {
    fontSize: 20,
    margin: 20,
  },
  icono: {
    width: 24,
    height: 24,
  },
});

export default TyC;
