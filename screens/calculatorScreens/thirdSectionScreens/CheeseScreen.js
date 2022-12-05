import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import Progress from "../../../components/ui/Progress";
import Question from "../../../components/ui/Question";
import { AnswersContext } from "../../../store/answers-context";
import AnswerInterval from "../../../components/ui/inputs/AnswerInterval";

function CheeseScreen({ route }) {
  const answersCtx = useContext(AnswersContext);
  const questionId = route.params?.questionId + 1;
  const nextLocation = "eggsScreen";

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "food",
      questionId: questionId,
      question: "Cât de des consumi brânzeturi? (30g porția)",
      value: value,
    };
    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={1} secondProgress={1} thirdProgress={0.55} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Cât de des consumi{"\n"}brânzeturi?{"\n"}(30g porția)
        </Question>
        <AnswerInterval
          questionId={questionId}
          saveAnswer={saveAnswerHandler}
          nextLocation={nextLocation}
        />
      </View>
    </View>
  );
}

export default CheeseScreen;

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
