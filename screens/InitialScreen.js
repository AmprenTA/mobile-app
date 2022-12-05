import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/styles";
import SvgIcon from "../components/ui/svg/SvgIcon";
import InitialButtons from "../components/ui/buttons/InitialButtons";
import Highlight from "../components/ui//Highlight";
import InfoButtons from "../components/ui/buttons/InfoButtons";

function InitialSCreen({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.svgContainer}>
          <SvgIcon />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.textDescription}>
            Calculează-ți amprenta de carbon și
          </Text>
          <View style={styles.highlightContainer}>
            <Highlight style={{ backgroundColor: Colors.yellow }}>
              acționează
            </Highlight>
            <Text style={[styles.textDescription, { marginLeft: 8 }]}>
              imediat
            </Text>
          </View>
        </View>
        <InfoButtons />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.authButtons}>
          <InitialButtons />
        </View>
      </View>
    </View>
  );
}

export default InitialSCreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 64,
    marginHorizontal: 16,
    padding: 20,
    justifyContent: "center",
  },
  upperContainer: {
    flex: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  svgContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  descriptionContainer: {
    flex: 1,
  },
  highlightContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textDescription: {
    fontSize: 16,
    fontFamily: "IBMPlexSans_500Medium",
  },
  authButtons: {
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 50,
  },
  continueTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  continueText: {
    color: Colors.textSecondary,
    marginRight: 4,
    fontFamily: "IBMPlexSans_400Regular",
  },
});
