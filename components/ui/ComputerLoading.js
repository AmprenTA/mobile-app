import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import { Colors } from "../../constants/styles";
function ComputerLoading({ message, loadingDone }) {
  const [progress, setProgress] = useState(0);
  const [indeterminate, setIndeterminate] = useState(true);

  useEffect(() => {
    animate();
  }, []);

  function animate() {
    let progress = 0;

    setTimeout(() => {
      setIndeterminate(false);
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
          loadingDone();
        }
        setProgress(progress);
      }, 250);
    }, 1000);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.progress}>
        <Progress.Circle
          progress={progress}
          size={100}
          indeterminate={indeterminate}
          color={Colors.green}
          unfilledColor={Colors.primary100}
          textStyle={{
            color: Colors.textPrimary,
            fontFamily: "IBMPlexSans_500Medium",
          }}
          borderWidth={0}
          borderColor={Colors.primary100}
          showsText={true}
        />
      </View>
      {/* <ActivityIndicator size="large" color={Colors.green} /> */}
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/loading1.png")} />
      </View>
    </View>
  );
}

export default ComputerLoading;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 32,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "IBMPlexSans_500Medium",
    colors: Colors.textPrimary,
  },
  progress: {
    justifyContent: "center",
    flex: 2,
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginRight: "5%",
  },
});
