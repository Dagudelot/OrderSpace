import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from "react-native";
import { Container, Header, Content, Left, Input, Title, Right, Body, Button, Card, CardItem, Thumbnail, Tab, Tabs, TabHeading, List, ListItem} from 'native-base';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

class Perfil extends Component {
  static navigationOptions ={
    drawerLabel: 'Perfil',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./iconos/perfil.png')}
        style={styles.icono}
      />
      ),
  };

  render() {
    return (
      <Container>
      <Content>
      <Image
        source={require('./tendero.jpg')}
        style={styles.FotoPerfil}
      />

      <Tabs initialPage={1} tabBarUnderlineStyle={{borderBottomWidth:2}}>
          <Tab heading={ <TabHeading style={{backgroundColor: 'orange'}}><MaterialIcons name="history" size={30} color="white"/><Text style={{color: 'white'}}> Historial</Text></TabHeading>}>

          <List>

            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./distribuidoras/cocacola.png')} />
              </Left>
              <Body>
                <Text>COCACOLA</Text>
                <Text note style={{color: 'gray'}}>CocaCola mediana x16</Text>
              </Body>
              <Right>
                <Text>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./distribuidoras/federal.jpg')} />
              </Left>
              <Body>
                <Text>FEDERAL</Text>
                <Text note style={{color: 'gray'}}>Paca de Arroz ROA x3</Text>
              </Body>
              <Right>
                <Text>3:49 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./distribuidoras/proleche.png')} />
              </Left>
              <Body>
                <Text>ALQUERIA</Text>
                <Text note style={{color: 'gray'}}>Leche PARMALAT x12</Text>
              </Body>
              <Right>
                <Text>4:01 pm</Text>
              </Right>
            </ListItem>

          </List>

          </Tab>

          <Tab heading={ <TabHeading style={{backgroundColor: 'orange'}}><MaterialIcons name="info-outline" size={30} color="white"/><Text style={{color: 'white'}}> Informacion</Text></TabHeading>}>

          <List>
            <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
              <Text> Samuel Quintero </Text>
            </ListItem>

            <ListItem >
              <Left>
              <Button transparent>
              <MaterialIcons name="label-outline" size={25} color="orange" />
              </Button>
              </Left>
              <Body>
              <Text style={styles.descripcion}>En OrderSpace desde: 11 de Octubre</Text>
              </Body>
              <Right>
              <Button transparent>
              <MaterialIcons name="keyboard-arrow-right" size={25} color="orange"/>
              </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Left>
              <Button transparent>
              <MaterialIcons name="label-outline" size={25} color="orange" />
              </Button>
              </Left>
              <Body>
              <Text style={styles.descripcion}>Ubicación: Aranjuez</Text>
              </Body>
              <Right>
              <Button transparent>
              <MaterialIcons name="keyboard-arrow-right" size={25} color="orange"/>
              </Button>
              </Right>
            </ListItem>
          <ListItem>
              <Left>
              <Button transparent>
              <MaterialIcons name="label-outline" size={25} color="orange" />
              </Button>
              </Left>
              <Body>
              <Text style={styles.descripcion}>Tienda: La Esperanza</Text>
              </Body>
              <Right>
              <Button transparent>
              <MaterialIcons name="keyboard-arrow-right" size={25} color="orange"/>
              </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Left>
              <Button transparent>
              <MaterialIcons name="label-outline" size={25} color="orange" />
              </Button>
              </Left>
              <Body>
              <Text style={styles.descripcion}>Edad: 57 años</Text>
              </Body>
              <Right>
              <Button transparent>
              <MaterialIcons name="keyboard-arrow-right" size={25} color="orange"/>
              </Button>
              </Right>
            </ListItem>

            </List>

          </Tab>
      </Tabs>

      </Content>

      </Container>
    );
  }
}

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
    width: 100,
    height: 100,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 15,
    opacity: 0.3,
  },
});

export default Perfil;
