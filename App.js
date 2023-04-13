import React, { useEffect, useCallback } from "react";
import { NativeBaseProvider } from "native-base";
import { View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./src/navigation/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const [fontsLoaded] = useFonts({
    "lyftpro-bold": require("./assets/fonts/lyftpro-bold.ttf"),
    "lyftpro-light": require("./assets/fonts/lyftpro-light.ttf"),
    "lyftpro-medium": require("./assets/fonts/lyftpro-medium.ttf"),
    "lyftpro-semibold": require("./assets/fonts/lyftpro-semibold.ttf"),
    "proximanova-bold": require("./assets/fonts/proximanova-bold.ttf"),
    "proximanova-medium": require("./assets/fonts/proximanova-medium.ttf"),
    "proximanova-regular": require("./assets/fonts/proximanova-regular.ttf"),
  });
  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <View
        style={{ flex: 1, marginTop: 20, backgroundColor: "white" }}
        onLayout={onLayoutRootView}
      >
        <NavigationContainer>
          <StatusBar backgroundColor="white" />
          <RootNavigator />
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
};

export default App;
