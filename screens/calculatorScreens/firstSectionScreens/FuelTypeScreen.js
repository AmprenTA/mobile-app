import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import Progress from "../../../components/ui/Progress";
import Question from "../../../components/ui/Question";
import { AnswersContext } from "../../../store/answers-context";
import AnswerDropdown from "../../../components/ui/inputs/AnswerDropdown";

const data = [
  { key: "0", value: "Diesel" },
  { key: "1", value: "Benzină" },
  { key: "2", value: "GPL" },
  { key: "3", value: "Electric" },
  { key: "4", value: "Hybrid" },
];

function FuelTypeScreen({ navigation, route }) {
  const [nextLocation, setNextLocation] = useState("");
  const answersCtx = useContext(AnswersContext);
  const carId = route.params?.carId ? route.params.carId : 1;
  const initialQuestionNumber = 3;
  const questionId =
    carId !== 1 ? initialQuestionNumber + 4 * carId - 4 : initialQuestionNumber;

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "travel/car",
      carId: carId,
      questionId: questionId,
      question: "fuel_type",
      value: value,
    };
    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
    setNextLocation("howMuchFuelScreen");
  }

  function goForward() {
    if (nextLocation.length > 0) {
      navigation.navigate(nextLocation, { carId: carId });
    }

    return;
  }

  function goBack() {
    navigation.navigate("kmPerMonthScreen", { carId: carId });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.3} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>Ce tip de carburant folosești?</Question>
        <AnswerDropdown
          data={data}
          questionId={questionId}
          carId={carId}
          saveAnswer={saveAnswerHandler}
          goForward={goForward}
          saveKeyOrValue="key"
          placeholder={"Selectează carburant"}
        />
      </View>
    </View>
  );
}

export default FuelTypeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 64,
    marginHorizontal: 16,
    padding: 20,
  },
  mainContainer: {
    flex: 1,
    marginVertical: 40,
    justifyContent: "center",
  },
});
