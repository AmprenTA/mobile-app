import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AnswersContext } from "../../../store/answers-context";
import Progress from "../../../components/ui/Progress";
import AnswerButtons from "../../../components/ui/buttons/AnswerButtons";
import Question from "../../../components/ui/Question";

function MoreTransports({ route, navigation }) {
  const [nextLocation, setNextLocation] = useState("");
  const answersCtx = useContext(AnswersContext);
  const questionId = route.params?.questionId + 1;
  const transportId = route.params?.transportId;

  function saveAnswerHandler(savedAlready, yesAnswer, noAnswer) {
    const answer = {
      section: "travel/transport",
      transportId: transportId,
      questionId: questionId,
      question:
        "Mai ai un mijloc de transport în comun pe care vrei să-l adaugi?",
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
      transportId: transportId + 1,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.45} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Mai ai un mijloc de transport{"\n"}în comun pe care{"\n"}vrei să-l
          adaugi?
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

export default MoreTransports;

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
