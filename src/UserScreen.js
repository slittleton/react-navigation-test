import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class UserScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor: 'white'}}>
        <Text>User Screen</Text>
        <Button title="go Home" onPress={()=> this.props.navigation.navigate('HomeScreen')}/>
      </View>
    );
  }
}

