import { createStackNavigator } from "@react-navigation/stack";

import Userprofile from "../screens/Userprofile";
import Editprofile from "../screens/editprofile";

const Stack = createStackNavigator();

const UserNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Userprofile" component={Userprofile} />
    <Stack.Screen name="Editprofile" component={Editprofile} />
  </Stack.Navigator>
);

export default UserNavigator;
