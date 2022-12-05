import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AnswersContext } from "../../../store/answers-context";
import Progress from "../../../components/ui/Progress";
import Question from "../../../components/ui/Question";
import AnswerDropdown from "../../../components/ui/inputs/AnswerDropdown";
import { getAirports } from "../../../api/calculator";

function FlightFromScreen({ route, navigation }) {
  const [nextLocation, setNextLocation] = useState("");
  const [airports, setAirports] = useState([]);
  const answersCtx = useContext(AnswersContext);
  const questionId = route.params?.questionId + 1;
  const flightId = 1;

  useEffect(() => {
    async function getAirportsReq() {
      try {
        const response = await getAirports();
        setAirports(() => {
          return response.map((airport) => {
            return { key: airport["id"], value: airport["name"] };
          });
        });
      } catch (err) {
        console.log(err);
      }
    }

    getAirportsReq();
  }, []);

  function saveAnswerHandler(savedAlready, value) {
    const answer = {
      section: "travel/flight",
      flightId: flightId,
      questionId: questionId,
      question: "from",
      value: value,
    };

    if (savedAlready >= 0) {
      answersCtx.updateAnswer(answer);
    } else {
      answersCtx.addAnswer(answer);
    }

    setNextLocation("flightToScreen");
  }

  function goForward() {
    navigation.navigate(nextLocation, {
      questionId: questionId,
      flightId: flightId,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <Progress firstProgress={0.65} />
      <View style={styles.mainContainer}>
        <Question number={questionId}>Care este orașul de plecare?</Question>
        <AnswerDropdown
          flightId={flightId}
          questionId={questionId}
          saveAnswer={saveAnswerHandler}
          goForward={goForward}
          data={airports}
          saveKeyOrValue="value"
        />
      </View>
    </View>
  );
}
export default FlightFromScreen;

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
