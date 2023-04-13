import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from "@expo/vector-icons/FontAwesome";

export default class Drawermenu extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.navigation}>
        <View style={styles.container}>
          <View style={styles.iconcontainer}>
            <Icon size={25} name={this.props.iconname} />
          </View>
          <View style={styles.titlecontainer}>
            <Text style={styles.titletxt}>{this.props.titlename}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
