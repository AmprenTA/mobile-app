import { Text, View, StyleSheet } from "react-native";
import IconButton from "../../../components/ui/buttons/IconButton";
import { Colors } from "../../../constants/styles";
import SvgCar from "../../../components/ui/svg/SvgCar";
import Progress from "../../../components/ui/Progress";

function FirstSection({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.1} />
      <View style={styles.svgContainer}>
        <SvgCar />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>
          Prima secțiune este legată de călătorii.
        </Text>
        <Text style={styles.headerText}>
          Te rugăm să fii cât mai exact posibil în oferirea informațiilor.
        </Text>
        <View style={styles.buttonContainer}>
          <IconButton
            color={Colors.textPrimary}
            size={20}
            style={{ backgroundColor: Colors.yellow }}
            icon="arrow-forward-outline"
            onPress={() => navigation.navigate("ownCarScreen")}
          >
            Bine
          </IconButton>
        </View>
      </View>
    </View>
  );
}

export default FirstSection;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 64,
    marginHorizontal: 16,
    padding: 20,
    justifyContent: "center",
  },
  mainContainer: {
    flex: 2,
  },
  svgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontFamily: "IBMPlexSans_500Medium",
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "60%",
  },
});
