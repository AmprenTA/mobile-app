import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import Progress from "../../../components/ui/Progress";
import Question from "../../../components/ui/Question";
import { AnswersContext } from "../../../store/answers-context";
import AnswerInput from "../../../components/ui/inputs/AnswerInput";
import { createHousehold } from "../../../api/calculator";
import { AuthContext } from "../../../store/auth-context";

function WoodScreen({ navigation, route }) {
  const answersCtx = useContext(AnswersContext);
  const authCtx = useContext(AuthContext);
  const questionId = route.params?.questionId + 1;

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "household",
      questionId: questionId,
      question:
        "Care este valoarea consumului de lemne pentru această lună? (metru cub)",
      value: value,
    };
    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }
  }

  async function goForward() {
    const householdAnswers = answersCtx.answers.filter(
      (answer) => answer.section === "household"
    );

    const httpBody = {
      electricity: householdAnswers[0].value,
      natural_gas: householdAnswers[1].value,
      wood: householdAnswers[2].value,
      footprint_id: answersCtx.footprintId,
    };
    try {
      const createdHousehold = await createHousehold(httpBody, authCtx.token);
      
    } catch (err) {
      console.log(err);
    }

    navigation.navigate("thirdSection", { questionId: questionId });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={1} secondProgress={0.9} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Care este valoarea{"\n"}consumului de lemne{"\n"}pentru această lună?
          {"\n"}
          (metru cub)
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

export default WoodScreen;

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
