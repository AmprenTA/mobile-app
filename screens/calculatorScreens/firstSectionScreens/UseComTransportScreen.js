import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AnswersContext } from "../../../store/answers-context";
import Progress from "../../../components/ui/Progress";
import AnswerButtons from "../../../components/ui/buttons/AnswerButtons";
import Question from "../../../components/ui/Question";

function UseComTransportScreen({ navigation, route }) {
  const [nextLocation, setNextLocation] = useState("");
  const answersCtx = useContext(AnswersContext);
  const carId = route.params?.carId ? route.params.carId : 1;
  const transportId = 1;
  const initialQuestionNumber = 2;
  const questionId =
    carId !== 1 ? initialQuestionNumber + 4 * carId - 4 : initialQuestionNumber;

  function saveAnswerHandler(savedAlready, yesAnswer, noAnswer) {
    const answer = {
      section: "travel/transport",
      transportId: transportId,
      questionId: questionId,
      question: "Folosești transportul în comun?",
      yes: yesAnswer,
      no: noAnswer,
    };

    setNextLocation(
      yesAnswer ? "kmPublicTransport" : noAnswer ? "flownQuestionScreen" : ""
    );

    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
  }

  function goForward() {
    navigation.navigate(nextLocation, {
      questionId: questionId,
      transportId: transportId,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.5} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Folosești transportul{"\n"} în comun?
        </Question>
        <AnswerButtons
          transportId={transportId}
          questionId={questionId}
          saveAnswer={saveAnswerHandler}
          goForward={goForward}
        />
      </View>
    </View>
  );
}

export default UseComTransportScreen;

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
