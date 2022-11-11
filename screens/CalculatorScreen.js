import { Text, StyleSheet, View } from "react-native";

function CalculatorScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>Calculator SCREEN</Text>
    </View>
  );
}

export default CalculatorScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 64,
    marginHorizontal: 16,
    padding: 20,
    // justifyContent: "center",
  },
});
