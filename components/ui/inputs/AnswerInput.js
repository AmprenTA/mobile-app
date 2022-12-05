import { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../../constants/styles";
import { AnswersContext } from "../../../store/answers-context";
import IconButton from "../buttons/IconButton";

function AnswerInput({
  children,
  saveAnswer,
  questionId,
  carId,
  goForward,
  transportId,
  section,
}) {
  const answersCtx = useContext(AnswersContext);
  const answerIndex = answersCtx.answers.findIndex((answer) => {
    return (
      answer.questionId === questionId &&
      (answer.carId === carId || answer.transportId === transportId)
    );
  });

  const [answerValue, setAnswerValue] = useState("");

  useEffect(() => {
    setAnswerValue(
      answerIndex >= 0 ? answersCtx.answers[answerIndex]["value"] : ""
    );
  }, [carId, section, transportId]);

  function changeAnswer(text) {
    setAnswerValue(text);
    saveAnswer(answerIndex, text);
  }

  return (
    <>
      <TextInput
        keyboardType="numeric"
        placeholder={children}
        value={answerValue}
        onChangeText={changeAnswer}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <IconButton
          color={Colors.textPrimary}
          size={20}
          style={{ backgroundColor: Colors.yellow }}
          icon="arrow-forward-outline"
          disabled={answerValue.length === 0}
          onPress={goForward}
        >
          Continuă
        </IconButton>
      </View>
    </>
  );
}

export default AnswerInput;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "60%",
  },
  input: {
    fontSize: 16,
    fontFamily: "IBMPlexSans_400Regular",
    color: Colors.textSecondary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: Colors.textPrimary,
    borderWidth: 1.4,
    borderRadius: 6,
    marginBottom: 15,
  },
});
