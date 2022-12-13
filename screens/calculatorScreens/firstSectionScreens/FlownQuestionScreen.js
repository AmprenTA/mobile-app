import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AnswersContext } from "../../../store/answers-context";
import Progress from "../../../components/ui/Progress";
import AnswerButtons from "../../../components/ui/buttons/AnswerButtons";
import Question from "../../../components/ui/Question";
import { createTranports } from "../../../api/calculator";
import { AuthContext } from "../../../store/auth-context";

function FlownQuestionScreen({ navigation, route }) {
  const [nextLocation, setNextLocation] = useState("");
  const answersCtx = useContext(AnswersContext);
  const authCtx = useContext(AuthContext);
  const questionId = route.params?.questionId + 1;
  const flightId = 1;

  function saveAnswerHandler(savedAlready, yesAnswer, noAnswer) {
    const answer = {
      section: "travel/flight",
      flightId: flightId,
      questionId: questionId,
      question: "Ai zburat cu avionul în ultima lună?",
      yes: yesAnswer,
      no: noAnswer,
    };

    setNextLocation(
      yesAnswer ? "flightFromScreen" : noAnswer ? "secondSection" : ""
    );

    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
  }

  async function goForward() {
    if (nextLocation === "secondSection") {
      const body = answersCtx.createTravelAnswer();
      console.log(body);
      try {
        const createdTransports = await createTranports(body, authCtx.token);

        answersCtx.addFootprintID(createdTransports["footprint_id"]);
      } catch (err) {
        console.log(err);
      }
    }

    navigation.navigate(nextLocation, {
      questionId: questionId,
      flightId: flightId,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.6} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Ai zburat cu avionul{"\n"}în ultima lună?
        </Question>
        <AnswerButtons
          flightId={flightId}
          questionId={questionId}
          saveAnswer={saveAnswerHandler}
          goForward={goForward}
        />
      </View>
    </View>
  );
}

export default FlownQuestionScreen;

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
