import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/login";
import Loginnumber from "../screens/loginnumber";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Loginnumber" component={Loginnumber} />
  </Stack.Navigator>
);

export default AuthNavigator;
