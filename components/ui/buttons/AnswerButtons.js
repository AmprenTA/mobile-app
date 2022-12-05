import { View, Pressable, StyleSheet, Text } from "react-native";
import { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/styles";
import { AnswersContext } from "../../../store/answers-context";
import IconButton from "./IconButton";

function AnswerButtons({
  questionId,
  saveAnswer,
  goForward,
  carId,
  transportId,
  flightId,
}) {
  const answersCtx = useContext(AnswersContext);
  const answerIndex = answersCtx.answers.findIndex(
    (answer) =>
      answer.questionId === questionId &&
      (answer.carId === carId ||
        answer.transportId === transportId ||
        answer.flightId === flightId)
  );
  const [selectedFirst, setSelectedFirst] = useState(
    answerIndex >= 0 ? answersCtx.answers[answerIndex]["yes"] : false
  );
  const [selectedSecond, setSelectedSecond] = useState(
    answerIndex >= 0 ? answersCtx.answers[answerIndex]["no"] : false
  );

  function firstOptionHandler() {
    setSelectedSecond(false);
    setSelectedFirst(true);
  }
  function secondOptionHandler() {
    setSelectedFirst(false);
    setSelectedSecond(true);
  }

  function submitAnswer() {
    saveAnswer(answerIndex, selectedFirst, selectedSecond);
  }

  useEffect(() => {
    submitAnswer(answerIndex, selectedFirst, selectedSecond);
  }, [selectedFirst, selectedSecond]);

  return (
    <>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.optionButton} onPress={firstOptionHandler}>
          <View style={styles.textContainer}>
            <Text style={styles.option}>A</Text>
            <Text style={styles.text}>Da</Text>
          </View>
          {selectedFirst && (
            <Ionicons
              name="checkmark-outline"
              size={20}
              color={Colors.textPrimary}
            />
          )}
        </Pressable>
        <Pressable style={styles.optionButton} onPress={secondOptionHandler}>
          <View style={styles.textContainer}>
            <Text style={styles.option}>B</Text>
            <Text style={styles.text}>Nu</Text>
          </View>
          <View style={styles.checkmark}>
            {selectedSecond && (
              <Ionicons
                name="checkmark-outline"
                size={18}
                color={Colors.textPrimary}
              />
            )}
          </View>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          color={Colors.textPrimary}
          size={20}
          style={{ backgroundColor: Colors.yellow }}
          icon="arrow-forward-outline"
          disabled={!selectedFirst && !selectedSecond}
          onPress={goForward}
        >
          Continuă
        </IconButton>
      </View>
    </>
  );
}
export default AnswerButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "60%",
  },
  textContainer: {
    flexDirection: "row",
  },
  optionButton: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderColor: Colors.textPrimary,
    borderWidth: 1.4,
    borderRadius: 6,
    marginBottom: 15,
  },
  option: {
    backgroundColor: "rgba(252, 211, 81, 0.3)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    color: Colors.textSecondary,
    fontSize: 20,
  },
  text: {
    fontSize: 22,
    fontFamily: "IBMPlexSans_400Regular",
    marginHorizontal: 10,
  },
  checkmark: {
    alignSelf: "center",
  },
});
