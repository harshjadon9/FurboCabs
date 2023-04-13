import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import styles from "./style";
import Invite from "../../components/invitepage/index";

const width = Dimensions.get("window").width;

export default class InviteFriends extends Component {
  openDrawer() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerimagecontainer}>
            <TouchableOpacity onPress={() => this.openDrawer()}>
              <Image
                style={{ width: 15, height: 15 }}
                source={require("../../images/menu.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titlecontainer}>
            <View>
              <Text style={styles.titletxt}>Invite friends</Text>
            </View>
          </View>
          <View style={styles.toprighttxt}>
            <TouchableOpacity>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../images/share.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.codecontainer}>
          <Text style={styles.codetxt}>Your code:</Text>
          <Text style={styles.titletxt}> KING221</Text>
        </View>

        <View style={{ backgroundColor: "white" }}>
          <Carousel
            loop
            width={width}
            height={350}
            autoPlay={true}
            data={[...new Array(2).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={() => {}}
            renderItem={(item) => (
              <View>
                <Invite
                  Adimage={require("../../images/invitefriends.png")}
                  maintxt="Invite Passengers"
                  description="Invite your friends to ride with Easy Taxi so they can get going now"
                  btn1="Send text"
                  btn2="Send email"
                />
              </View>
            )}
          />
        </View>

        <View style={styles.footercontainer}>
          <View style={styles.footerinnercontainer}>
            <Text style={styles.messagetxt}>
              Enable contacts and refer friends to be{"\n"}a part of the Lyft
              experience
            </Text>
            <View style={styles.buttoncontainer}>
              <TouchableOpacity>
                <Text style={styles.btntxt}>Allow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
