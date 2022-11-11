import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../../constants/styles";
import IconButton from "./IconButton";
import Separator from "../Separator";

function InitialButtons() {
  const navigation = useNavigation();
  function loginHandler() {
    navigation.navigate("LOGIN");
  }
  function registerHandler() {
    navigation.navigate("REGISTER");
  }
  return (
    <View styles={styles.buttons}>
      <IconButton
        icon="person"
        color={Colors.textPrimary}
        size={20}
        onPress={loginHandler}
        style={{ backgroundColor: Colors.blue }}
      >
        Conectează-te
      </IconButton>
      <Separator style={{ backgroundColor: Colors.textPrimary }}>Sau</Separator>

      <IconButton
        icon="person-add"
        color={Colors.textPrimary}
        size={20}
        onPress={registerHandler}
        style={{ backgroundColor: Colors.blue }}
      >
        Înregistrează-te
      </IconButton>
    </View>
  );
}

export default InitialButtons;

const styles = StyleSheet.create({
  buttons: {
    justifyContent: "flex-start",
  },
  logo: {
    width: 100,
    height: 100,
  },
  authButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  authButton: {
    width: "45%",
    height: 100,
  },
});
