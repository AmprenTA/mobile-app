import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import Progress from "../../../components/ui/Progress";
import AnswerButtons from "../../../components/ui/buttons/AnswerButtons";
import Question from "../../../components/ui/Question";
import { AnswersContext } from "../../../store/answers-context";

function OwnCarScreen({ navigation }) {
  const [nextLocation, setNextLocation] = useState("");
  const answersCtx = useContext(AnswersContext);

  function saveAnswerHandler(savedAlready, yesAnswer, noAnswer) {
    const answer = {
      section: "travel/car",
      questionId: 1,
      question: "Deții o mașină?",
      yes: yesAnswer,
      no: noAnswer,
    };
    setNextLocation(
      yesAnswer ? "kmPerMonthScreen" : noAnswer ? "useComTransportScreen" : ""
    );

    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
  }

  function goForward() {
    if (nextLocation.length > 0) {
      navigation.navigate(nextLocation);
    }

    return;
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.1} />
      <View style={styles.mainContainer}>
        <Question number={1}>Deții o mașină?</Question>
        <AnswerButtons
          questionId={1}
          saveAnswer={saveAnswerHandler}
          goForward={goForward}
        />
      </View>
    </View>
  );
}

export default OwnCarScreen;

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
