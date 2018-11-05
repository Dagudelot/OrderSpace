import React, { Component } from 'react';
import { Image, StyleSheet, Alert } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Right, Icon, Button, Title } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Inicio from '../App.js';
import ItemProducto from './ItemProducto';

const cards = [
  {
    nomProducto: 'Leche Alquería Deslactosada x10',
    distribuidora: 'ALQUERÍA',
    image: require('../productos/lacteos/alqueria.jpg'),
    precio: 18000
  },
  {
    nomProducto: 'Alpinito x4',
    distribuidora: 'ALPINA',
    image: require('../productos/lacteos/alpinito.png'),
    precio: 3000
  },
  {
    nomProducto: 'Caja de Leche Litro / Unidad',
    distribuidora: 'ALQUERÍA',
    image: require('../productos/lacteos/le.png'),
    precio: 2000
  },

]

class CategoriaLacteos extends Component {
  static navigationOptions ={
    drawerLabel: 'Lácteos',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../iconos/lacteos.png')}
        style={styles.icono}
      />
      ),
  };

  btn_back = () => {
		this.props.navigation.navigate('Inicio');
	};

  render() {
    return (
      <Container>
      <Header style={{marginTop: 20, backgroundColor: 'white'}}>
        <Left>
          <Button transparent onPress={this.btn_back}>
            <MaterialIcons name='arrow-back' size={20} color="orange" />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'orange'}}>Categoría: Lácteos</Title>
        </Body>
      </Header>
       <View>
         <DeckSwiper
           dataSource={cards}
           renderItem={item =>
             <Card style={{ elevation: 3 }}>
               <CardItem>
                 <Left>
                   <Thumbnail source={item.image} />
                   <Body>
                     <Text>{item.nomProducto}</Text>
                     <Text note>{item.distribuidora}</Text>
                   </Body>
                 </Left>
               </CardItem>
               <CardItem cardBody>
                 <Image style={{ height: 300, flex: 1 }} source={item.image} />
               </CardItem>
               <ItemProducto precio={item.precio}/>
             </Card>
           }
         />
       </View>

       <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, alignItems: 'center', padding: 25}}>
          <Text style={{color: 'gray'}}>Deslíce a la derecha para ver los productos.</Text>
        </View>

     </Container>
    );
  }
}

export default CategoriaLacteos;

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
