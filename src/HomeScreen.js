import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title="go user" onPress={()=> this.props.navigation.navigate('UserScreen')}/>
      </View>
    );
  }
}
