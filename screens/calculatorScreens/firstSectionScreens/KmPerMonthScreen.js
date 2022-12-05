import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import { AnswersContext } from "../../../store/answers-context";
import Progress from "../../../components/ui/Progress";
import Question from "../../../components/ui/Question";
import AnswerInput from "../../../components/ui/inputs/AnswerInput";

function KmPerMonthScreen({ navigation, route }) {
  const [nextLocation, setNextLocation] = useState("");
  const answersCtx = useContext(AnswersContext);
  const carId = route.params?.carId ? route.params.carId : 1;
  const initialQuestionNumber = 2;
  const questionId =
    carId !== 1 ? initialQuestionNumber + 4 * carId - 4 : initialQuestionNumber;

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "travel/car",
      carId: carId,
      questionId: questionId,
      question: "total_km",
      value: value,
    };
    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
    setNextLocation("fuelTypeScreen");
  }

  function goForward() {
    if (nextLocation.length > 0) {
      navigation.navigate(nextLocation, { carId: carId });
    }

    return;
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.2} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Câți km ai parcurs {"\n"}(în medie) în ultima lună?
        </Question>
        <AnswerInput
          carId={carId ? carId : 1}
          questionId={questionId}
          saveAnswer={saveAnswerHandler}
          goForward={goForward}
        >
          EX : 15
        </AnswerInput>
      </View>
    </View>
  );
}

export default KmPerMonthScreen;

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
