import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AnswersContext } from "../../../store/answers-context";
import Progress from "../../../components/ui/Progress";
import AnswerButtons from "../../../components/ui/buttons/AnswerButtons";
import Question from "../../../components/ui/Question";
import AnswerDropdown from "../../../components/ui/inputs/AnswerDropdown";

const data = [
  { key: "0", value: "Tren" },
  { key: "1", value: "Buz" },
];

function TransportTypeScreen({ navigation, route }) {
  const [nextLocation, setNextLocation] = useState("");
  const answersCtx = useContext(AnswersContext);
  const questionId = route.params?.questionId + 1;
  const transportId = route.params?.transportId;

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "travel/transport",
      transportId: transportId,
      questionId: questionId,
      question: "transportType",
      value: value,
    };

    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
    setNextLocation("moreTransports");
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
      <Progress firstProgress={0.6} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Ce tip de transport{"\n"}în comun folosești?
        </Question>
        <AnswerDropdown
          transportId={transportId}
          questionId={questionId}
          saveAnswer={saveAnswerHandler}
          goForward={goForward}
          saveKeyOrValue="key"
          data={data}
          placeholder={"Selectează transport"}
        />
      </View>
    </View>
  );
}

export default TransportTypeScreen;

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
