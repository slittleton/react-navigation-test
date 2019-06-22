import React from "react";
// import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/HomeScreen";
import UserScreen from "./src/UserScreen";

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Home Screen</Text>
//         <Button title="go user" onPress={()=> this.props.navigation.navigate('UserScreen')}/>
//       </View>
//     );
//   }
// }
// class UserScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>User Screen</Text>
//       </View>
//     );
//   }
// }

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    UserScreen: UserScreen
  },
  {initialRouteName: 'HomeScreen'}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
