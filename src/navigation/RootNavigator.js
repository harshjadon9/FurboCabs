import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

const Stack = createStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
    <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
  </Stack.Navigator>
);

export default RootNavigator;
