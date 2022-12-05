import { Text, View, StyleSheet } from "react-native";
import IconButton from "../../../components/ui/buttons/IconButton";
import { Colors } from "../../../constants/styles";
import Progress from "../../../components/ui/Progress";
import SvgHousehold from "../../../components/ui/svg/SvgHousehold";
import SvgFood from "../../../components/ui/svg/SvgFood";

function ThirdSection({ navigation, route }) {
  const questionId = route.params?.questionId;

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={1} secondProgress={2} />
      <View style={styles.svgContainer}>
        <SvgFood />
      </View>
      <View style={styles.mainContainer}>
        <Text style={[styles.headerText, { fontSize: 25 }]}>
          Felicitări, ai terminat secțiunea de gospodărie.
        </Text>
        <Text style={[styles.headerText, { fontSize: 25 }]}>
          Acum urmează secțiunea de alimentație.
        </Text>
        <View style={styles.buttonContainer}>
          <IconButton
            color={Colors.textPrimary}
            size={20}
            style={{ backgroundColor: Colors.yellow }}
            icon="arrow-forward-outline"
            onPress={() =>
              navigation.navigate("beefScreen", {
                questionId: questionId,
              })
            }
          >
            Bine
          </IconButton>
        </View>
      </View>
    </View>
  );
}

export default ThirdSection;

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
