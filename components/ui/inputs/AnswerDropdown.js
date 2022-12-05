import { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { AnswersContext } from "../../../store/answers-context";
import { SelectList } from "react-native-dropdown-select-list";
import IconButton from "../buttons/IconButton";

function AnswerDropdown({
  data,
  questionId,
  saveAnswer,
  carId,
  goForward,
  placeholder,
  saveKeyOrValue,
}) {
  const answersCtx = useContext(AnswersContext);
  const answerIndex = answersCtx.answers.findIndex(
    (answer) => answer.questionId === questionId && answer.carId === carId
  );

  const [selected, setSelected] = useState("");

  function changeAnswer() {
    saveAnswer(answerIndex, selected);
  }

  return (
    <>
      <SelectList
        setSelected={(val) => setSelected(val)}
        onSelect={changeAnswer}
        searchPlaceholder="Caută"
        notFoundText="Nu am găsit"
        data={data}
        save={saveKeyOrValue}
        search={true}
        placeholder={placeholder}
        boxStyles={styles.inputContainer}
        fontFamily="IBMPlexSans_400Regular"
        inputStyles={{ color: Colors.textSecondary, fontSize: 16 }}
        dropdownStyles={styles.activeInput}
        dropdownTextStyles={{ fontFamily: "IBMPlexSans_400Regular" }}
        searchicon={
          <Ionicons
            style={{ marginRight: 15 }}
            name="search-outline"
            size={18}
            colors={Colors.textPrimary}
          />
        }
        closeicon={
          <Ionicons
            name="close-outline"
            size={18}
            colors={Colors.textPrimary}
          />
        }
        arrowicon={
          <Ionicons name="arrow-down" size={18} colors={Colors.textPrimary} />
        }
      />
      <View style={styles.buttonContainer}>
        <IconButton
          color={Colors.textPrimary}
          size={20}
          style={{ backgroundColor: Colors.yellow }}
          icon="arrow-forward-outline"
          disabled={selected.length === 0}
          onPress={goForward}
        >
          Continuă
        </IconButton>
      </View>
    </>
  );
}

export default AnswerDropdown;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "60%",
  },
  inputContainer: {
    borderColor: Colors.textPrimary,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1.4,
    borderRadius: 6,
    marginBottom: 15,
  },
  activeInput: {
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: Colors.textPrimary,
    marginBottom: 15,
  },
});
