import { Text, View, StyleSheet } from "react-native";
import IconButton from "../../components/ui/buttons/IconButton";
import { useContext } from "react";
import { Colors } from "../../constants/styles";
import { getResults } from "../../api/calculator";
import Progress from "../../components/ui/Progress";
import { AuthContext } from "../../store/auth-context";
import { AnswersContext } from "../../store/answers-context";

function FinalScreen({ navigation }) {
  const authCtx = useContext(AuthContext);
  const answersCtx = useContext(AnswersContext);

  async function handleButtonClick() {
    try {
      const results = await getResults(answersCtx.footprintId, authCtx.token);
      navigation.navigate("resultsScreen", results);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={1} secondProgress={1} thirdProgress={1} />
      <View style={styles.rootContainer}>
        <View style={styles.mainContainer}>
          <Text style={[styles.headerText, { fontSize: 25 }]}>
            Felicitări, ai terminat de completat formularul!
          </Text>
          <Text style={[styles.headerText, { fontSize: 25 }]}>
            Ești gata să vezi rezultatele?
          </Text>
          <View style={styles.buttonContainer}>
            <IconButton
              color={Colors.textPrimary}
              size={20}
              style={{ backgroundColor: Colors.yellow }}
              icon="arrow-forward-outline"
              onPress={handleButtonClick}
            >
              Bine
            </IconButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default FinalScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 64,
    // marginHorizontal: 16,
    padding: 20,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
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
