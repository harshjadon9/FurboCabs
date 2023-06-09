import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Drawermenu from "../../components/Drawermenu/index";

export default class Drawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.userpiccontainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("UserNavigator")}
            >
              <View style={styles.picinnercontainer}>
                <Image
                  style={styles.userimage}
                  source={require("../../images/user.jpg")}
                />
                <View style={styles.cameracontainer}>
                  <Image
                    source={require("../../images/photo-camera.png")}
                    style={styles.camerapic}
                  />
                </View>
              </View>
              <View style={styles.username}>
                <Text style={styles.usertxt}>Harsh</Text>
                <Text style={styles.usertxt2}>View profile</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Drawermenu
            iconname="car"
            titlename="Get a ride"
            navigation={() => this.props.navigation.navigate("RideNavigator")}
          />
          <Drawermenu
            iconname="credit-card-alt"
            titlename="Add payment"
            navigation={() => this.props.navigation.navigate("Addpayments")}
          />
          <Drawermenu
            iconname="gift"
            titlename="Invite friends"
            navigation={() => this.props.navigation.navigate("InviteFriends")}
          />
          <Drawermenu
            iconname="star"
            titlename="Promos"
            navigation={() => this.props.navigation.navigate("Promos")}
          />
          <Drawermenu
            iconname="question"
            titlename="Help"
            navigation={() => this.props.navigation.navigate("Help")}
          />
          <Drawermenu
            iconname="cog"
            titlename="Settings"
            navigation={() => this.props.navigation.navigate("Settings")}
          />
        </ScrollView>
      </View>
    );
  }
}
