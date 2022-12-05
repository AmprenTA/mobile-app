import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import Progress from "../../../components/ui/Progress";
import Question from "../../../components/ui/Question";
import { AnswersContext } from "../../../store/answers-context";
import AnswerInput from "../../../components/ui/inputs/AnswerInput";

function HowMuchfuelScreen({ navigation, route }) {
  const answersCtx = useContext(AnswersContext);
  const carId = route.params?.carId ? route.params.carId : 1;
  const initialQuestionNumber = 4;
  const questionId =
    carId !== 1 ? initialQuestionNumber + 4 * carId - 4 : initialQuestionNumber;

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "travel/car",
      carId: carId,
      questionId: questionId,
      question: "fuel_consumption",
      value: value,
    };
    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
  }

  function goForward() {
    navigation.navigate("moreCarsScreen", { carId: carId });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.4} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Cât carburant consumă{"\n"}mașina în medie,{"\n"}pe lună? (litri/kwh)
        </Question>
        <AnswerInput
          questionId={questionId}
          saveAnswer={saveAnswerHandler}
          carId={carId}
          goForward={goForward}
        >
          EX : 15
        </AnswerInput>
      </View>
    </View>
  );
}

export default HowMuchfuelScreen;

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
