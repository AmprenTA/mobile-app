import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/styles";
import BeginCalculationScreen from "./calculatorScreens/BeginCalculationScreen";
import FirstSection from "./calculatorScreens/firstSectionScreens/FirstSection";
import OwnCarScreen from "./calculatorScreens/firstSectionScreens/OwnCarScreen";
import KmPerMonthScreen from "./calculatorScreens/firstSectionScreens/KmPerMonthScreen";
import FuelTypeScreen from "./calculatorScreens/firstSectionScreens/FuelTypeScreen";
import HowMuchfuelScreen from "./calculatorScreens/firstSectionScreens/HowMuchFuelSreen";
import MoreCarsScreen from "./calculatorScreens/firstSectionScreens/MoreCarsScreen";
import useComTransportScreen from "./calculatorScreens/firstSectionScreens/UseComTransportScreen";
import FlownQuestionScreen from "./calculatorScreens/firstSectionScreens/FlownQuestionScreen";
import TransportTypeScreen from "./calculatorScreens/firstSectionScreens/TransportTypeScreen";
import KmPublicTransport from "./calculatorScreens/firstSectionScreens/KmPublicTransport";
import MoreTransports from "./calculatorScreens/firstSectionScreens/MoreTransports";
import SecondSection from "./calculatorScreens/secondSectionScreens/SecondSection";
import FlightFromScreen from "./calculatorScreens/firstSectionScreens/FlightFromScreen";
import FlightToScreen from "./calculatorScreens/firstSectionScreens/FlightToScreen";
import MoreFlights from "./calculatorScreens/firstSectionScreens/MoreFlights";
import ElecticityScreen from "./calculatorScreens/secondSectionScreens/ElectricityScreen";
import GasScreen from "./calculatorScreens/secondSectionScreens/GasScreen";
import WoodScreen from "./calculatorScreens/secondSectionScreens/WoodScreen";
import ThirdSection from "./calculatorScreens/thirdSectionScreens/ThirdSection";
import BeefScreen from "./calculatorScreens/thirdSectionScreens/BeefScreen";
import BreadScreen from "./calculatorScreens/thirdSectionScreens/BreadScreen";
import CheeseScreen from "./calculatorScreens/thirdSectionScreens/CheeseScreen";
import ChickenScreen from "./calculatorScreens/thirdSectionScreens/ChickenScreen";
import CoffeScreen from "./calculatorScreens/thirdSectionScreens/CoffeScreen";
import EggsScreen from "./calculatorScreens/thirdSectionScreens/EggsScreen";
import FishScreen from "./calculatorScreens/thirdSectionScreens/FishScreen";
import MilkScreen from "./calculatorScreens/thirdSectionScreens/MikScreen";
import PorkScreen from "./calculatorScreens/thirdSectionScreens/PorkScreen";
import VeggieScreen from "./calculatorScreens/thirdSectionScreens/VeggieScreen";
import SheepScreen from "./calculatorScreens/thirdSectionScreens/SheepScreen";
import FinalScreen from "./calculatorScreens/FinalScreen";
import ResultsScreen from "./calculatorScreens/ResultsScreen";
import NextMonthScreen from "./calculatorScreens/NextMonthScreen";
import CountyScreen from "./calculatorScreens/CountyScreen";

const Stack = createNativeStackNavigator();

function CalculatorScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors.background,
        },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="beginCalculationScreen"
        component={BeginCalculationScreen}
      />
      <Stack.Screen name="nextMonth" component={NextMonthScreen} />
      <Stack.Screen name="countyScreen" component={CountyScreen} />
      <Stack.Screen name="firstSection" component={FirstSection} />
      <Stack.Screen name="ownCarScreen" component={OwnCarScreen} />
      <Stack.Screen name="fuelTypeScreen" component={FuelTypeScreen} />
      <Stack.Screen name="howMuchFuelScreen" component={HowMuchfuelScreen} />
      <Stack.Screen name="moreCarsScreen" component={MoreCarsScreen} />
      <Stack.Screen name="kmPerMonthScreen" component={KmPerMonthScreen} />
      <Stack.Screen
        name="useComTransportScreen"
        component={useComTransportScreen}
      />
      <Stack.Screen
        name="transportTypeScreen"
        component={TransportTypeScreen}
      />
      <Stack.Screen
        name="flownQuestionScreen"
        component={FlownQuestionScreen}
      />
      <Stack.Screen name="kmPublicTransport" component={KmPublicTransport} />
      <Stack.Screen name="moreTransports" component={MoreTransports} />
      <Stack.Screen name="flightFromScreen" component={FlightFromScreen} />
      <Stack.Screen name="flightToScreen" component={FlightToScreen} />
      <Stack.Screen name="moreFlights" component={MoreFlights} />
      <Stack.Screen name="secondSection" component={SecondSection} />
      <Stack.Screen name="electricityScreen" component={ElecticityScreen} />
      <Stack.Screen name="gasScreen" component={GasScreen} />
      <Stack.Screen name="woodScreen" component={WoodScreen} />
      <Stack.Screen name="thirdSection" component={ThirdSection} />
      <Stack.Screen name="beefScreen" component={BeefScreen} />
      <Stack.Screen name="breadScreen" component={BreadScreen} />
      <Stack.Screen name="cheeseScreen" component={CheeseScreen} />
      <Stack.Screen name="chickenScreen" component={ChickenScreen} />
      <Stack.Screen name="coffeScreen" component={CoffeScreen} />
      <Stack.Screen name="eggsScreen" component={EggsScreen} />
      <Stack.Screen name="fishScreen" component={FishScreen} />
      <Stack.Screen name="milkScreen" component={MilkScreen} />
      <Stack.Screen name="porkScreen" component={PorkScreen} />
      <Stack.Screen name="veggieScreen" component={VeggieScreen} />
      <Stack.Screen name="sheepScreen" component={SheepScreen} />
      <Stack.Screen name="finalScreen" component={FinalScreen} />
      <Stack.Screen name="resultsScreen" component={ResultsScreen} />
    </Stack.Navigator>
  );
}

export default CalculatorScreen;
