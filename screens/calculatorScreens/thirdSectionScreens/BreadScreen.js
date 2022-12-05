import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import Progress from "../../../components/ui/Progress";
import Question from "../../../components/ui/Question";
import { AnswersContext } from "../../../store/answers-context";
import AnswerInterval from "../../../components/ui/inputs/AnswerInterval";

function BreadScreen({ route }) {
  const answersCtx = useContext(AnswersContext);
  const questionId = route.params?.questionId + 1;
  const nextLocation = "finalScreen";

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "food",
      questionId: questionId,
      question: "Cât de des consumi pâine?(36g porția)",
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
      <Progress firstProgress={1} secondProgress={1} thirdProgress={0.9} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Cât de des consumi{"\n"}pâine? (36g porția)
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

export default BreadScreen;

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
