import { StyleSheet, Text } from "react-native";

import { Colors } from "../../constants/styles";

function Highlight({ children }) {
  return <Text style={[styles.highlight]}>{children}</Text>;
}

export default Highlight;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: Colors.yellow,
  },
  highlight: {
    textAlign: "center",
    color: Colors.textPrimary,
    alignSelf: "flex-start",
    fontSize: 16,
    fontFamily: "IBMPlexSans_500Medium",
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: Colors.yellow,
  },
});
