import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MapView from "react-native-maps";
import { Container } from "native-base";
import Economy from "./Tabs/Economy/index";
import ExtraSeats from "./Tabs/Extraseats/index";
import Luxury from "./Tabs/Luxury/index";
import Icon from "@expo/vector-icons/FontAwesome";
import styles from "./style";

const Ride = ({ navigation }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Cabs" },
    { key: "second", title: "Delivery" },
    // { key: "third", title: "ExtraSeats" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <Economy navigation={navigation} />;
      case "second":
        return <Luxury navigation={navigation} />;
      case "third":
        return <ExtraSeats navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 23.0321,
            longitude: 72.5252,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={styles.menubuttoncontainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.menucontainer}>
              <Image
                source={require("../../images/left-arrow.png")}
                style={{ width: 15, height: 15 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <View style={styles.searchBoxview}>
            <View style={styles.searchBoxinnerview}>
              <TouchableOpacity style={styles.pickuplocation}>
                <View>
                  <Text style={styles.locationtxt}>VIT Vellore, TN </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.directionarrow}>
                <Icon
                  size={15}
                  name="arrow-right"
                  style={{ color: "#A0A0A0" }}
                />
              </View>
              <TouchableOpacity style={styles.droplocation}>
                <View>
                  <Text style={styles.locationtxt}>
                    Green circle Vellore, TN
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor="white"
            tabStyle={{ backgroundColor: "#FF9B05" }}
            labelStyle={{ color: "black", fontSize: 12 }}
            indicatorStyle={{ backgroundColor: "red" }}
          />
        )}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default Ride;
