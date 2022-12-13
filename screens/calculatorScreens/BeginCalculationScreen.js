import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import IconButton from "../../components/ui/buttons/IconButton";
import { Colors } from "../../constants/styles";
import { AuthContext } from "../../store/auth-context";
import { getUserAvailability } from "../../api/calculator";
function BeginCalculationScreen({ navigation }) {
  const authCtx = useContext(AuthContext);

  async function buttonHandler() {
    try {
      const availability = await getUserAvailability(authCtx.token);
      if (availability) {
        navigation.navigate("countyScreen");
      } else {
        navigation.navigate("nextMonth");
      }
    } catch (e) {
      console.error(e);
    }
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
