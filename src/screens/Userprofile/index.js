import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import Userdetails from "../../components/userprofile/index";

export default class Userprofile extends Component {
  openDrawer() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ width: "100%", height: 200 }}
          source={require("../../images/userbackground.png")}
        >
          <View style={styles.headercontainer}>
            <View style={styles.header}>
              <View>
                <TouchableOpacity onPress={() => this.openDrawer()}>
                  <Image
                    source={require("../../images/menu.png")}
                    style={{ width: 20, height: 20, tintColor: "white" }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Editprofile")}
                >
                  <Text style={styles.headertxt}>EDIT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.usernamecontainer}>
          <Text style={styles.username}>King</Text>
        </View>

        <View style={styles.joindatecontainer}>
          <Text style={styles.datetxt}>JOINED DECEMBER 2018</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Userdetails iconname="home" text="From the best city ever" />
          <Userdetails
            iconname="music"
            text="Favorite music is whatever matches my mood"
          />
          <Userdetails iconname="user" text="I am going places" />
        </View>
      </View>
    );
  }
}
