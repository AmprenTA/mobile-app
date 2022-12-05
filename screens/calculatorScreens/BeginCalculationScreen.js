import { Text, View, StyleSheet } from "react-native";
import IconButton from "../../components/ui/buttons/IconButton";
import { Colors } from "../../constants/styles";

function BeginCalculationScreen({ navigation }) {
  function buttonHandler() {
    navigation.navigate("firstSection");
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>
        Ești gata să-ți calculezi amprenta de carbon?
      </Text>
      <View style={styles.buttonContainer}>
        <IconButton
          color={Colors.textPrimary}
          size={20}
          style={{ backgroundColor: Colors.yellow }}
          icon="arrow-forward-outline"
          onPress={buttonHandler}
        >
          Vreau să incep
        </IconButton>
      </View>
    </View>
  );
}

export default BeginCalculationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 64,
    marginHorizontal: 16,
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    fontFamily: "IBMPlexSans_500Medium",
    color: Colors.textPrimary,
  },
  buttonContainer: {
    width: "60%",
    marginTop: 20,
  },
});
