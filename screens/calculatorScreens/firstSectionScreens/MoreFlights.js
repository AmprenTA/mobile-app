import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import { AnswersContext } from "../../../store/answers-context";
import Progress from "../../../components/ui/Progress";
import AnswerButtons from "../../../components/ui/buttons/AnswerButtons";
import Question from "../../../components/ui/Question";
import { createTranports } from "../../../api/calculator";
import { AuthContext } from "../../../store/auth-context";

function MoreFlights({ navigation, route }) {
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
      question: "Mai ai un zbor cu avionul pe care vrei să-l adaugi?",
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

      try {
        const createdTransports = await createTranports(body, authCtx.token);
        answersCtx.addFootprintID(createdTransports["footprint_id"]);
      } catch (err) {
        console.log(err);
      }
    }

    navigation.navigate(nextLocation, {
      questionId: questionId,
      flightId: flightId + 1,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.8} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Mai ai un zbor cu avionul{"\n"}pe care vrei să-l adaugi?
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

export default MoreFlights;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginVertical: 40,
    justifyContent: "center",
  },
  rootContainer: {
    flex: 1,
    marginTop: 64,
    marginHorizontal: 16,
    padding: 20,
  },
});
