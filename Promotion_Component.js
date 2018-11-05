import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from "react-native";
import { Container, Header, Content, Left, Input, Title, Right, Body, Button, Card, CardItem, Thumbnail, Tab, Tabs, TabHeading, List, ListItem, Icon, Item, FooterTab, Footer} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class Promotion_Component extends Component {
  constructor (props){
    super(props);

    this.state = {
      corazon: false,
      btn: false,
      btn_agregar:"Agregar al pedido",
    }
  }

  Clicked() {
    this.setState ({
      corazon: !this.state.corazon,
    });

    if(!this.state.corazon){
    Alert.alert('¡Felicidades!', 'El producto ha sido agregado a favoritos')
    }
  };

  changeButtonText = () => {

      if(!this.state.btn){
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

    return(
      <CardItem>
        <Left>
          <Button transparent textStyle={{color: 'orange'}}>
            <MaterialIcons name="attach-money" size={30} color="orange"/>
            <Text>{this.props.precio}</Text>
          </Button>
          </Left>
          <Body>
          <Button style={{backgroundColor: 'orange'}} textStyle={{color: 'orange'}} onPress={this.props.agregar}>
          <MaterialIcons name="add-shopping-cart" size={30} color="white" />
          <Text>{this.state.btn_agregar}</Text>
          </Button>
          </Body>
          <Right>
          <Button transparent onPress={this.Clicked.bind(this)}>
          <Ionicons name="ios-heart" size={30} color={this.state.corazon ? "red" : "gray"} />
          </Button>
          </Right>
      </CardItem>
    );
  }
}
