import { createStackNavigator } from "@react-navigation/stack";

import Ride from "../screens/Ride";
import Rideconfirm from "../screens/confirmride";
import Scheduleride from "../screens/Scheduleride";
import Confirmed from "../screens/confirmed";
const Stack = createStackNavigator();

const RideNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Ride" component={Ride} />
    <Stack.Screen name="Rideconfirm" component={Rideconfirm} />
    <Stack.Screen name="Rideconfirmed" component={Confirmed} />
    <Stack.Screen name="Scheduleride" component={Scheduleride} />
  </Stack.Navigator>
);

export default RideNavigator;
