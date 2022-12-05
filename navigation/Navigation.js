import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { Colors } from "../constants/styles";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import InitialSCreen from "../screens/InitialScreen";
import CalculatorNavigation from "../screens/CalculatorNavigation";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import InfoScreen from "../screens/InfoScreen";
import SvgAmprenta from "../components/ui/svg/SvgAmprenta";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import DonationsScreen from "../screens/DonationScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import CustomDrawer from "../components/CustomDrawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: Colors.background, elevation: 0 },
        headerTitleAlign: "center",
        headerTintColor: Colors.textPrimary,
        sceneContainerStyle: {
          backgroundColor: Colors.background,
        },
        drawerContentStyle: { backgroundColor: Colors.background },
        drawerInactiveTintColor: Colors.textSecondary,
        drawerActiveTintColor: Colors.textPrimary,
        drawerActiveBackgroundColor: Colors.yellow,

        headerTitle: () => <SvgAmprenta />,
      }}
    >
      <Drawer.Screen
        // options={{
        //   drawerItemStyle: { height: 0 },
        // }}
        options={{
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name="Acasă"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "calculator" : "calculator-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name="Calculator"
        component={CalculatorNavigation}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name="Statistici"
        component={StatisticsScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "cash" : "cash-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name="Donații"
        component={DonationsScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name="Despre noi"
        component={AboutUsScreen}
      />
    </Drawer.Navigator>
  );
}

function AuthStack() {
  return (
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
        options={{ headerShown: false }}
        name="CalculatorNavigation"
        component={CalculatorNavigation}
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
  );
}

function AuthenticatedStack() {
  return (
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
        name="homeScreen"
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default Navigation;
