import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/styles";
import CalculatorScreen from "../screens/CalculatorScreen";
import InitialSCreen from "../screens/InitialScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import InfoScreen from "../screens/InfoScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 18,
            fontFamily: "IBMPlexSans_500Medium",
          },
          contentStyle: {
            backgroundColor: Colors.background,
          },
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="InitialScreen"
          component={InitialSCreen}
        />
        <Stack.Screen
          options={{ title: "Calculator" }}
          name="CalculatorScreen"
          component={CalculatorScreen}
        />
        <Stack.Screen
          options={{ title: "Conectează-te" }}
          name="LOGIN"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ title: "Înregistrează-te" }}
          name="REGISTER"
          component={SignupScreen}
        />
        <Stack.Screen name="INFO" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
