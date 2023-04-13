import { createDrawerNavigator } from "@react-navigation/drawer";
import Homescreen from "../screens/homescreen";
import UserNavigator from "./UserNavigator";
import RideNavigator from "./RideNavigator";
import InviteFriends from "../screens/invitefriends/index";
import Settings from "../screens/Settings/index";
import Help from "../screens/Help/index";
import Addpayments from "../screens/Addpayment/index";
import Promos from "../screens/promos/index";

import DrawerContent from "../screens/Drawer";

const Drawer = createDrawerNavigator();

const HomeNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
    }}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={Homescreen} />
    <Drawer.Screen name="UserNavigator" component={UserNavigator} />
    <Drawer.Screen name="RideNavigator" component={RideNavigator} />
    <Drawer.Screen name="Addpayments" component={Addpayments} />
    <Drawer.Screen name="InviteFriends" component={InviteFriends} />
    <Drawer.Screen name="Promos" component={Promos} />
    <Drawer.Screen name="Help" component={Help} />
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>
);

export default HomeNavigator;
