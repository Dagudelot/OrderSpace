import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from "react-native";
import { Container, Header, Content, Left, Input, Title, Right, Body, Button, Card, CardItem, Thumbnail, Tab, Tabs, TabHeading, List, ListItem, Icon, Item, FooterTab, Footer, Badge} from 'native-base';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Perfil from './profile.js';
import Login from './Login.js';
import Register from './Register.js';
import Promotion_Component from './Promotion_Component.js';
import TyC from './TyC.js';

import CategoriaBebidas from './Categorias/Bebidas.js';
import CategoriaCarnes from './Categorias/Carnes.js';
import CategoriaGranos from './Categorias/Granos.js';
import CategoriaLacteos from './Categorias/Lacteos.js';


import { DrawerNavigator } from 'react-navigation'


class Inicio extends Component {
  constructor(props){
    super(props);

    this.state = {
      cantidad_carrito: 0,
      userLoaded: false
    }

  }

  AgregarAlCarrito = () => {
    this.setState ({
      'cantidad_carrito': this.state.cantidad_carrito + 1
    })
    Alert.alert('¡Felicidades!', 'El producto ha sido agregado al pedido')
  };

  irAGranos = () => {
        this.props.navigation.navigate('CategoriaGranos');
  };

  irABebidas = () => {
        this.props.navigation.navigate('CategoriaBebidas');
  };

  irACarnes = () => {
        this.props.navigation.navigate('CategoriaCarnes');
  };

  irALacteos = () => {
        this.props.navigation.navigate('CategoriaLacteos');
  };


  static navigationOptions ={
    drawerLabel: 'Inicio',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./iconos/Inicio.png')}
        style={styles.icono}
      />
      ),
  };

  render() {
    return (
      <Container style={styles.container}>

      <Header searchBar rounded style={{marginTop: 20, backgroundColor: 'orange'}}>
      <Left>
      <Button onPress={() => this.props.navigation.openDrawer()} style={{backgroundColor: 'orange'}}>
        <MaterialIcons name="menu" color="white" size={38} style={{marginTop: 9, marginLeft: -3}} />
        </Button>
        </Left>
        <Body style={{ height: 40}}>
            <Input placeholder="Buscar" style={{backgroundColor: 'white', width: 290, borderRadius: 10}}/>
          </Body>
          <Right>

          </Right>
        </Header>

      <Content>
        <Tabs initialPage={0} tabBarUnderlineStyle={{borderBottomWidth:2}}>
          <Tab heading={ <TabHeading style={{backgroundColor: 'white'}}><MaterialIcons name="explore" size={30} color="orange"/><Text style={{color: 'orange'}}> Explorar</Text></TabHeading>}>

          <Content style={{marginTop: 10, alignItems: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 25, fontFamily: "vincHand", color: 'gray'}}>Categorías</Text>
            <View style={{flexDirection: 'row'}}>
            <Image source={require('./productos/granos/2.png')} style={styles.categorias}/>
            <Image source={require('./productos/granos/3.jpg')} style={styles.categorias}/>
            <Image source={require('./productos/granos/8.jpg')} style={styles.categorias}/>
            <Image source={require('./productos/granos/arroz.jpg')} style={styles.categorias}/>
            <TouchableOpacity
            style={{position: 'absolute', width: 320, marginTop: 30, fontSize: 84, backgroundColor: 'orange'}}
            onPress={this.irAGranos}
            >
            <Text style={{textAlign: 'center', color: 'white'}}> Granos </Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Image source={require('./productos/bebidas/cocacola.jpg')} style={styles.categorias}/>
            <Image source={require('./productos/bebidas/descarga.jpg')} style={styles.categorias}/>
            <Image source={require('./productos/bebidas/klo.jpg')} style={styles.categorias}/>
            <Image source={require('./productos/bebidas/nn.jpg')} style={styles.categorias}/>
            <TouchableOpacity
            style={{position: 'absolute', width: 320, marginTop: 30, fontSize: 84, backgroundColor: 'orange'}}
            onPress={this.irABebidas}
            >
            <Text style={{textAlign: 'center', color: 'white'}}> Bebidas </Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Image source={require('./productos/carnes/cn.jpg')} style={styles.categorias}/>
            <Image source={require('./productos/carnes/corderolechal1.jpg')} style={styles.categorias}/>
            <Image source={require('./productos/carnes/nii.jpg')} style={styles.categorias}/>
            <Image source={require('./productos/carnes/nn.jpg')} style={styles.categorias}/>
            <TouchableOpacity
            style={{position: 'absolute', width: 320, marginTop: 30, fontSize: 84, backgroundColor: 'orange'}}
            onPress={this.irACarnes}
            >
            <Text style={{textAlign: 'center', color: 'white'}}> Carnes </Text>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Image source={require('./productos/lacteos/6022_1_530.png')} style={styles.categorias}/>
            <Image source={require('./productos/lacteos/alqueria.jpg')} style={styles.categorias}/>
            <Image source={require('./productos/lacteos/le.png')} style={styles.categorias}/>
            <Image source={require('./productos/lacteos/yo.jpg')} style={styles.categorias}/>
            <TouchableOpacity
            style={{position: 'absolute', width: 320, marginTop: 30, fontSize: 84, backgroundColor: 'orange'}}
            onPress={this.irALacteos}
            >
            <Text style={{textAlign: 'center', color: 'white'}}> Lacteos </Text>
            </TouchableOpacity>
            </View>
          </Content>

          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: 'white'}}><MaterialIcons name="tag-faces" size={30} color="orange"/><Text style={{color: 'orange'}}> Promociones</Text></TabHeading>}>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./distribuidoras/federal.jpg')} />
                </Left>
                <Body>
                <Text> ARROZ ROA </Text>
                </Body>
                <Right>
                <Text style={styles.distribuidoras}> FEDERAL </Text>
                </Right>
            </CardItem>

            <CardItem>
              <Image source={require('./productos/arroz.jpg')} style={{width: 70, height: 110, flex: 1}}/>
              <Text> 3 PACAS + 5 LIBRAS </Text>
            </CardItem>

            <Promotion_Component precio={74.512} agregar={this.AgregarAlCarrito}/>
          </Card>


      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={require('./distribuidoras/cocacola.png')} />
            </Left>
            <Body>
            <Text> COCACOLA MEDIANA</Text>
            </Body>
            <Right>
            <Text style={styles.distribuidoras}> COCA-COLA </Text>
            </Right>
        </CardItem>

        <CardItem>
          <Image source={require('./productos/cocacola.jpg')} style={{width: 70, height: 110, flex: 1}}/>
          <Text> 3 PACAS + COLGATE GRANDE </Text>
        </CardItem>

          <Promotion_Component precio={89.999} agregar={this.AgregarAlCarrito}/>
      </Card>

      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={require('./distribuidoras/proleche.png')} />
            </Left>
            <Body>
            <Text> LECHE ALQUERÍA</Text>
            </Body>
            <Right>
            <Text style={styles.distribuidoras}>  PARMALAT </Text>
            </Right>
        </CardItem>

        <CardItem>
          <Image source={require('./productos/alqueria.jpg')} style={{width: 100, height: 100, flex: 1}}/>
          <Text> LECHE DESLACTOSADA PACK X6 </Text>
        </CardItem>

          <Promotion_Component precio={13.592} agregar={this.AgregarAlCarrito}/>
      </Card>

          </Tab>

          <Tab heading={ <TabHeading style={{backgroundColor: 'white'}}><MaterialIcons name="help" size={30} color="orange"/><Text style={{color: 'orange'}}> Soporte</Text></TabHeading>}>

          <Card style={{flex: 0}}>
          <CardItem>
          <Left>
          <Image source={require("./Developers/Paulina.jpeg")} style={styles.developers}/>
          </Left>
          <Right>
          <Text>Maria Paulina Acevedo Betancur</Text>
          </Right>
          </CardItem>
          </Card>

          <Card style={{flex: 0}}>
          <CardItem>
          <Left>
          <Image source={require("./Developers/Daniel.jpg")} style={styles.developers}/>
          </Left>
          <Right>
          <Text>Daniel Felipe Agudelo Taborda</Text>
          </Right>
          </CardItem>
          </Card>

          <Card style={{flex: 0}}>
          <CardItem>
          <Left>
          <Image source={require("./Developers/Alejo.jpeg")} style={styles.developers}/>
          </Left>
          <Right>
          <Text>Daniel Alejandro García Villa</Text>
          </Right>
          </CardItem>

          </Card>

          </Tab>
        </Tabs>

        <Footer>
        <FooterTab>
        <Button full badge vertical style={styles.button}>
        <Badge><Text style={{color: 'white'}}>{this.state.cantidad_carrito}</Text></Badge>
        <MaterialIcons name="shopping-cart" size={20} color="white"/>
        </Button>
        </FooterTab>
        </Footer>


      </Content>
      </Container>
    );
  }
}

export default DrawerNavigator({
  Inicio: {
    screen: Inicio,
  },
  Perfil: {
    screen: Perfil,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  CategoriaGranos: {
    screen: CategoriaGranos,
  },
  CategoriaBebidas: {
    screen: CategoriaBebidas
  },
  CategoriaCarnes: {
    screen: CategoriaCarnes
  },
  CategoriaLacteos:{
    screen: CategoriaLacteos
  },
  TyC: {
    screen: TyC,
  },
}, {
  drawerPosition: 'left',
  initialRouteName: 'Login',
  drawerBackgroundColor: '#EFE8E4',
  drawerWidth: 250,
});



const styles = StyleSheet.create({
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
    width: 60,
    height: 60,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 15,
    opacity: 0.3,
  },
  developers: {
    width: 150,
    height: 190,
  }
});
