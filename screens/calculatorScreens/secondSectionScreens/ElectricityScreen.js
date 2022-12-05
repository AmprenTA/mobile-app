import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import Progress from "../../../components/ui/Progress";
import Question from "../../../components/ui/Question";
import { AnswersContext } from "../../../store/answers-context";
import AnswerInput from "../../../components/ui/inputs/AnswerInput";

function ElecticityScreen({ navigation, route }) {
  const questionId = route.params?.questionId + 1;
  const answersCtx = useContext(AnswersContext);

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "household",
      questionId: questionId,
      question: "Câtă electricitate ai consumat în această lună? (kwh)",
      value: value,
    };
    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
  }

  function goForward() {
    navigation.navigate("gasScreen", { questionId: questionId });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={1} secondProgress={0.3} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Câtă electricitate{"\n"}ai consumat{"\n"}în această lună? (kwh)
        </Question>
        <AnswerInput
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

export default ElecticityScreen;

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
