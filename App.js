import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/Navigation";
import { useFonts } from "expo-font";
import {
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
export default function App() {
  const [fontsLoaded] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
