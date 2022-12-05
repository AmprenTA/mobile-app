import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../../constants/styles";
import IconButton from "./IconButton";
import Button from "./Button";
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

      <Button
        // icon="person-add"
        // color={Colors.textPrimary}
        // size={20}
        layout={{ justifyContent: "center" }}
        onPress={registerHandler}
        style={{
          // borderWidth: 2,
          // borderColor: Colors.yellow,

          backgroundColor: Colors.background,
        }}
      >
        Înregistrează-te
      </Button>
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
