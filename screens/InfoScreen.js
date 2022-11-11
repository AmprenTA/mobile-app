import { View, StyleSheet, Text } from "react-native";
import { useLayoutEffect } from "react";
import { TextData } from "../constants/text";
import { Colors } from "../constants/styles";
import IconButton from "../components/ui/buttons/IconButton";
import SvgCarbonFoot from "../components/ui/svg/SvgCarbonFoot";
import SvgCarbonCloud from "../components/ui/svg/SvgCarbonCloud";
import SvgPlanet from "../components/ui/svg/SvgPlanet";

function InfoScreen({ route, navigation }) {
  const pageInfoId = route.params.buttonId;
  const pageTitle = route.params.title;
  const headerColor = route.params.color;
  const textColor = route.params.textColor.color;
  const data = TextData[pageInfoId];

  function goToCalculatorHandler() {
    navigation.replace("CalculatorScreen");
  }

  let svg =
    pageInfoId === 0 ? (
      <SvgCarbonCloud />
    ) : pageInfoId === 1 ? (
      <SvgPlanet />
    ) : (
      <SvgCarbonFoot />
    );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: pageTitle,
      headerStyle: { backgroundColor: headerColor },
      headerTintColor: textColor,
    });
  }, [pageInfoId, navigation]);

  return (
    <View style={styles.card}>
      <View style={styles.rootContainer}>
        <View style={styles.firstTextContainer}>
          <Text style={styles.firstText}>{data.firstDescription}</Text>
        </View>
        <View style={{ alignSelf: "center", margin: 50 }}>{svg}</View>
        {pageInfoId === 1 && (
          <IconButton
            color={Colors.textPrimary}
            size={20}
            style={{ backgroundColor: Colors.blue }}
            icon="arrow-forward-outline"
            onPress={goToCalculatorHandler}
          >
            Încearcă acum
          </IconButton>
        )}
        <View style={styles.secondTextContainer}>
          <Text style={styles.secondText}>{data.secondDescription}</Text>
        </View>
      </View>
    </View>
  );
}

export default InfoScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
  },
  rootContainer: {
    margin: 12,
    padding: 12,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRadius: 6,
    borderColor: Colors.textPrimary,
  },
  firstText: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.textSecondary,
    padding: 14,
    lineHeight: 27,
    fontFamily: "IBMPlexSans_400Regular",
  },
  secondText: {
    fontSize: 19,
    fontWeight: "500",
    color: Colors.textPrimary,
    padding: 14,
    lineHeight: 27,
    fontFamily: "IBMPlexSans_500Medium",
  },
});
