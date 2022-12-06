import { View, StyleSheet } from "react-native";
import { Colors } from "../../../constants/styles";
import InfoButton from "./InfoButton";

function InfoButtons() {
  return (
    <View style={styles.infoButtonsContainer}>
      <View style={{ alignSelf: "center" }}>
        <InfoButton
          textColor={{ color: "white" }}
          color={Colors.red}
          style={{ backgroundColor: Colors.red }}
          id={0}
        >
          Ce este amprenta de carbon?
        </InfoButton>
      </View>
      <InfoButton
        textColor={{ color: Colors.textPrimary }}
        color={Colors.blue}
        style={{ backgroundColor: Colors.blue }}
        id={1}
        layout={{ alignSelf: "flex-end" }}
      >
        Cum calculez amprenta de carbon?
      </InfoButton>
      <View style={{ alignSelf: "center" }}>
        <InfoButton
          textColor={{ color: "white" }}
          color={Colors.green}
          style={{ backgroundColor: Colors.green }}
          id={2}
        >
          Efectul de seră, ce este?
        </InfoButton>
      </View>
    </View>
  );
}

export default InfoButtons;

const styles = StyleSheet.create({
  infoButtonsContainer: {
    flex: 4,
    justifyContent: "space-around",
  },
});
