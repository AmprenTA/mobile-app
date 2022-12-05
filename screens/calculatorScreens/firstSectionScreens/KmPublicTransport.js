import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import { AnswersContext } from "../../../store/answers-context";
import Progress from "../../../components/ui/Progress";
import Question from "../../../components/ui/Question";
import AnswerInput from "../../../components/ui/inputs/AnswerInput";

function KmPublicTransport({ navigation, route }) {
  const [nextLocation, setNextLocation] = useState("");
  const answersCtx = useContext(AnswersContext);
  const questionId = route.params?.questionId + 1;
  const transportId = route.params?.transportId;

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "travel/transport",
      transportId: transportId,
      questionId: questionId,
      question: "total_km_transport",
      value: value,
    };

    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
    setNextLocation("transportTypeScreen");
  }

  function goForward() {
    if (nextLocation.length > 0) {
      navigation.navigate(nextLocation, {
        transportId: transportId,
        questionId: questionId,
      });
    }

    return;
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.55} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Câți km ai parcurs{"\n"}(în medie) în ultima lună{"\n"}cu transportul
          în comun?
        </Question>
        <AnswerInput
          transportId={transportId}
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

export default KmPublicTransport;

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
