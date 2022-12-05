import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import Progress from "../../../components/ui/Progress";
import Question from "../../../components/ui/Question";
import { AnswersContext } from "../../../store/answers-context";
import AnswerInput from "../../../components/ui/inputs/AnswerInput";

function GasScreen({ navigation, route }) {
  const answersCtx = useContext(AnswersContext);
  const questionId = route.params?.questionId + 1;

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "household",
      questionId: questionId,
      question:
        "Care este valoarea consumului de gaze pentru această lună? (metru cub)",
      value: value,
    };
    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
  }

  function goForward() {
    navigation.navigate("woodScreen", { questionId: questionId });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={1} secondProgress={0.6} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Care este valoarea{"\n"}consumului de gaze{"\n"}pentru această{"\n"}
          lună? (metru cub)"
        </Question>
        <AnswerInput
          questionId={questionId}
          saveAnswer={saveAnswerHandler}
          section="household"
          goForward={goForward}
        >
          EX : 15
        </AnswerInput>
      </View>
    </View>
  );
}

export default GasScreen;

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
