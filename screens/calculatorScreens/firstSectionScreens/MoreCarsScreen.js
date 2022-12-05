import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AnswersContext } from "../../../store/answers-context";
import Progress from "../../../components/ui/Progress";
import AnswerButtons from "../../../components/ui/buttons/AnswerButtons";
import Question from "../../../components/ui/Question";

function MoreCarsScreen({ navigation, route }) {
  const [nextLocation, setNextLocation] = useState("");
  const answersCtx = useContext(AnswersContext);
  let newCarId = route.params?.carId ? route.params.carId : 1;
  const [carId, setCarId] = useState(newCarId);
  const [questionId, setQuestionId] = useState(5);

  useEffect(() => {
    setCarId(newCarId);
    setQuestionId((currentId) => currentId + 4 * carId - 4);
  }, [route]);

  function saveAnswerHandler(savedAlready, yesAnswer, noAnswer) {
    const answer = {
      section: "travel/car",
      // carId: carId,
      questionId: questionId,
      question: "Mai ai o mașină pe care vrei să o adaugi?",
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
    navigation.push(nextLocation, { carId: carId + 1 });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.45} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>
          Mai ai o mașină{"\n"}pe care vrei să o adaugi?
        </Question>
        <AnswerButtons
          carId={carId}
          questionId={questionId}
          saveAnswer={saveAnswerHandler}
          goForward={goForward}
        />
      </View>
    </View>
  );
}

export default MoreCarsScreen;

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
