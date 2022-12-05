import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";

function Question({ number, children }) {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.icon}>
        <Ionicons
          color={Colors.textSecondary}
          size={25}
          name="arrow-forward-outline"
        />
      </View>
      <Text style={styles.question}>{children}</Text>
    </View>
  );
}

export default Question;

const styles = StyleSheet.create({
  questionContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  number: {
    fontSize: 24,
    fontFamily: "IBMPlexSans_400Regular",
    color: Colors.textSecondary,
  },
  question: {
    color: Colors.textPrimary,
    fontFamily: "IBMPlexSans_500Medium",
    fontSize: 18,
  },
  icon: {
    marginRight: 20,
    marginTop: 5,
  },
});
