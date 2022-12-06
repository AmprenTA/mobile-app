import { View, StyleSheet, Text } from "react-native";
import { useState, useContext } from "react";
import Button from "../../components/ui/buttons/Button";
import ComputerLoading from "../../components/ui/ComputerLoading";
import ResultCard from "../../components/ui/ResultCard";
import { Colors } from "../../constants/styles";
import { AnswersContext } from "../../store/answers-context";

function ResultsScreen({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const answersCtx = useContext(AnswersContext);
  const results = route.params;

  function buttonHandler() {
    answersCtx.resetAnswers();
    navigation.reset({
      index: 0,
      routes: [{ name: "Statistici" }],
    });
  }

  function changeLoading() {
    setLoading(false);
  }

  if (loading) {
    return <ComputerLoading loadingDone={changeLoading} />;
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Impactul tău asupra mediului este sub medie, cu următoarele rezultate:
        </Text>
      </View>
      <View style={styles.cardsContainer}>
        <ResultCard
          text="Transport"
          quantity={results["transportation_carbon_footprint"]}
          style={{ color: "white", backgroundColor: Colors.red }}
        />

        <ResultCard
          text="Alimentație"
          quantity={results["food_carbon_footprint"].average}
          style={{
            color: Colors.textPrimary,
            backgroundColor: Colors.yellow,
          }}
        />

        <ResultCard
          text="Gospodărie"
          quantity={results["house_carbon_footprint"]}
          style={{ color: "white", backgroundColor: Colors.green }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={buttonHandler} style={styles.button}>
          Mergi la statistici
        </Button>
      </View>
    </View>
  );
}

export default ResultsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 64,
    // marginHorizontal: 16,
    padding: 20,
  },
  description: {
    fontFamily: "IBMPlexSans_500Medium",
    fontSize: 18,
    color: "#4D4D4D",
    textAlign: "center",
  },
  descriptionContainer: {
    flex: 1,
  },
  cardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    marginVertical: 12,
    flex: 4,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    borderRadius: 6,
    backgroundColor: Colors.yellow,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
});
