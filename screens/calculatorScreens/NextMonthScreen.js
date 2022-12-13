import { View, Text, StyleSheet, Image } from "react-native";
import IconButton from "../../components/ui/buttons/IconButton";
import { Colors } from "../../constants/styles";

function NextMonthScreen({ navigation }) {
  function buttonHandler() {
    navigation.navigate("Acasă");
  }

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/month.png")}
          style={{
            height: 100,
            width: 100,

            marginBottom: 10,
          }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <View>
          <Text style={styles.headerText}>
            Deja ai calculat amprenta ta pentru această lună. Revino luna
            următoare pentru un update.
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Până atunci, poți să urmărești evoluția personală sau să pui în
            practică recomandările personalizate.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <IconButton
            color={Colors.textPrimary}
            size={20}
            style={{ backgroundColor: Colors.yellow }}
            icon="arrow-back-outline"
            onPress={buttonHandler}
          >
            Înapoi
          </IconButton>
        </View>
      </View>
    </View>
  );
}

export default NextMonthScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 64,
    marginHorizontal: 16,
    padding: 20,
  },
  headerText: {
    fontSize: 25,
    fontFamily: "IBMPlexSans_500Medium",
    color: Colors.textPrimary,
  },
  buttonContainer: {
    width: "60%",
    marginTop: 20,
  },
  descriptionContainer: {
    marginVertical: 15,
  },
  description: {
    fontSize: 18,
    fontFamily: "IBMPlexSans_400Regular",
    color: Colors.textSecondary,
  },
});
