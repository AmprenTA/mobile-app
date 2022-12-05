import ProgressBar from "react-native-progress/Bar";
import { View, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/styles";

const windowWidth = Dimensions.get("window").width;
const progressBarWidth = windowWidth > 400 ? 110 : windowWidth < 390 ? 80 : 100;

function Progress({
  showProgress,
  firstProgress,
  secondProgress,
  thirdProgress,
}) {
  return (
    <View style={styles.progressContainer}>
      <ProgressBar
        progress={firstProgress}
        color={Colors.green}
        borderColor={Colors.textPrimary}
        unfilledColor="#D9D9D9"
        height={8}
        width={progressBarWidth}
      />
      <ProgressBar
        progress={secondProgress}
        color={Colors.green}
        borderColor={Colors.textPrimary}
        unfilledColor="#D9D9D9"
        height={8}
        width={progressBarWidth}
      />
      <ProgressBar
        progress={thirdProgress}
        color={Colors.green}
        borderColor={Colors.textPrimary}
        unfilledColor="#D9D9D9"
        height={8}
        width={progressBarWidth}
      />
    </View>
  );
}

export default Progress;

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
