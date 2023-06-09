import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import MapView from "react-native-maps";
import Icon from "@expo/vector-icons/FontAwesome";

export default class Rideconfirm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 23.0321,
              longitude: 72.5252,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />

          <View style={styles.searchBox}>
            <View style={styles.searchcontainer}>
              <View style={styles.searchview}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Pickuplocation")
                  }
                  style={styles.location}
                >
                  <View style={styles.locationcontainer}>
                    <Text style={styles.locationtxt}>
                      VIT Vellore, Tamil Nadu
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.editiconcontainer}>
                  <TouchableOpacity>
                    <Icon size={15} name="pencil" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.searchbottom}>
                <Text style={styles.searchbottomtxt}>
                  Drag map or tap to edit pickup spot
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.menubuttoncontainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Ride")}
            >
              <View style={styles.menucontainer}>
                <Image
                  source={require("../../images/left-arrow.png")}
                  style={{ width: 17, height: 17 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.menubuttoncontainer, { right: 5 }]}>
            <TouchableOpacity>
              <View style={styles.menucontainer}>
                <Image
                  source={require("../../images/gps.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Rideconfirmed");
            }}
          >
            <Text style={styles.btntxt}>Confirm Pickup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
