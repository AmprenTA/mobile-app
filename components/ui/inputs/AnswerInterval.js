// import StarRating from "react-native-star-rating";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../../constants/styles";
import { AnswersContext } from "../../../store/answers-context";
import IconButton from "../buttons/IconButton";
import SvgApple from "../svg/SvgApple";
import SvgAppleNotSelected from "../svg/SvgAppleNotSelected";
import { createFoods } from "../../../api/calculator";
import { AuthContext } from "../../../store/auth-context";

const data = [
  { value: 0, label: "Niciodată", description: "0g/lună" },
  { value: 1, label: "Rar", description: "1-2 ori pe lună" },
  { value: 2, label: "Câteodată", description: "1-2 ori pe săptămână" },
  { value: 3, label: "Des", description: "în fiecare zi" },
  { value: 4, label: "Foarte Des", description: "de mai multe ori pe zi" },
];
function AnswerInterval({ questionId, saveAnswer, nextLocation }) {
  const navigation = useNavigation();
  const answersCtx = useContext(AnswersContext);
  const authCtx = useContext(AuthContext);
  const answerIndex = answersCtx.answers.findIndex(
    (answer) => answer.questionId === questionId
  );
  const [selected, setSelected] = useState(
    answerIndex >= 0 ? answersCtx.answers[answerIndex].value : null
  );

  function changeAnswer(value) {
    setSelected(value);
    saveAnswer(answerIndex, value);
  }
  async function goForwardHandler() {
    if (nextLocation === "finalScreen") {
      const body = answersCtx.createFoodAnswer();
      body["footprint_id"] = answersCtx.footprintId;
      try {
        const createdFoods = await createFoods(body, authCtx.token);
      } catch (err) {
        console.log(err);
      }
    }
    navigation.navigate(nextLocation, { questionId: questionId });
  }

  return (
    <>
      <View style={styles.options}>
        {data.map((item) => {
          return (
            <Pressable
              key={item.value}
              onPress={() => changeAnswer(item.value)}
            >
              <View style={styles.option}>
                {selected === item.value ? (
                  <SvgApple />
                ) : (
                  <SvgAppleNotSelected />
                )}
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{item.label}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          color={Colors.textPrimary}
          size={20}
          style={{ backgroundColor: Colors.yellow }}
          icon="arrow-forward-outline"
          disabled={selected === null}
          onPress={goForwardHandler}
        >
          Continuă
        </IconButton>
      </View>
    </>
  );
}

export default AnswerInterval;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "60%",
  },
  ratingContainer: {
    width: "80%",
    justifyContent: "space-between",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  option: {
    alignSelf: "center",
  },
  labelContainer: {
    justifyContent: "center",

    alignItems: "center",
  },
  labelText: {
    fontFamily: "IBMPlexSans_500Medium",
    textTransform: "uppercase",
    fontSize: 11,
    marginVertical: 8,
  },
});
