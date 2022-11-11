import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/styles";

function Separator({ children, style }) {
  return (
    <View style={styles.container}>
      <View style={[styles.line, style]} />
      <View>{children && <Text style={styles.text}>{children}</Text>}</View>
      <View style={[styles.line, style]} />
    </View>
  );
}

export default Separator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  line: {
    flex: 1,
    height: 2,
    borderRadius: 2,
    margin: 0,
  },
  text: {
    width: 50,
    fontSize: 16,
    textAlign: "center",
    color: Colors.textPrimary,
    fontFamily: "IBMPlexSans_500Medium",
  },
});
