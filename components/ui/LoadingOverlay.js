import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" color={Colors.green} />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "IBMPlexSans_500Medium",
    colors: Colors.textPrimary,
  },
});
