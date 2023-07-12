import React, { Component } from "react";
import {View,Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../screens/Search";
import TransactionScreen from "../screens/Transaction";

const Tab = createBottomTabNavigator()
export default class BottomTabNavigator extends Component {
  render() {
    return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Search" component={SearchScreen}/>
            <Tab.Screen name="Transaction" component={TransactionScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4",
  },
  text: { color: "#ffff", fontSize: 30 },
});
