import React, { Component } from 'react';
import { Image, StyleSheet, Alert } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Right, Icon, Button, Title } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class ItemProducto extends Component {
  constructor (props){
    super(props);

    this.state = {
      cantidad:0,
      btn: false,
      btn_agregar:"Agregar al pedido",
    }
  }

  mas = () => {
    this.setState({
      'cantidad': this.state.cantidad + 1
    })
  };

  menos = () => {
    if(this.state.cantidad > 0){
    this.setState({
      'cantidad': this.state.cantidad - 1
    })
    }
  };

  changeButtonText = () => {

      if(!this.state.btn){
        Alert.alert('¡Felicidades!','Producto agregado al pedido')
          this.setState ({
        'btn_agregar': 'Eliminar del pedido',
        'btn': true
        })
      }else{
        this.setState ({
      'btn_agregar': 'Agregar al pedido',
      'btn': false
      })

      }

  };

  render () {
    return (
      <CardItem>
      <Left>
      <Button transparent onPress={this.mas}>
      <Text>+</Text>
      </Button>
      <Text style={{color: 'orange'}}>{this.state.cantidad}</Text>
      <Button transparent onPress={this.menos}>
      <Text>—</Text>
      </Button>
      </Left>
      <Body>
      <Button style={{backgroundColor: 'orange'}} textStyle={{color: 'orange'}} onPress={this.changeButtonText}>
      <MaterialIcons name="add-shopping-cart" size={30} color="white" />
      <Text>{this.state.btn_agregar}</Text>
      </Button>
      </Body>
      <Right>
      <MaterialIcons name="attach-money" size={30} color={"orange"} />
      <Text>{this.props.precio}</Text>
      </Right>
      </CardItem>
    );
  }
}
