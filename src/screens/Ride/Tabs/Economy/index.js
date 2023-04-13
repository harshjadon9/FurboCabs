import React, { Component } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import styles from "./style";
import Ridedetails from "../../../../components/Ridecar/index";
import Footerdetails from "../../../../components/Ridefooter/index";

export default class Economy extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView>
          <Ridedetails
            navigation={() => this.props.navigation.navigate("Rideconfirm")}
            carimage={require("../../../../images/car.jpg")}
            cartype="FurboCab"
            availablepersons="4"
            price="INR ₹ 900"
            time="8:58 AM"
          />
          <Ridedetails
            navigation={() => this.props.navigation.navigate("Rideconfirm")}
            carimage={require("../../../../images/car.jpg")}
            cartype="Shared"
            availablepersons="2"
            price="INR ₹ 700"
            time="8:58 PM"
          />
          <Footerdetails
            iconname1="credit-card-alt"
            textname1="Add payment"
            iconname2="calendar"
            textname2="Schedule"
            navigation={() => this.props.navigation.navigate("Addpayments")}
            navigation1={() => this.props.navigation.navigate("Scheduleride")}
          />

          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Rideconfirm")}
            >
              <Text style={styles.btntxt}>Request Shared</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
