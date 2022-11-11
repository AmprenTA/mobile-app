import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../constants/styles";
import SvgArrow from "../svg/SvgArrow";

function InfoButton({ id, children, textColor, style, color, layout }) {
  const navigation = useNavigation();

  function infoButtonHandler() {
    navigation.navigate("INFO", {
      buttonId: id,
      color: color,
      title: children,
      textColor: textColor,
    });
  }

  return (
    <View style={style.infoButtonContainer}>
      <View style={layout}>
        <SvgArrow color={color} />
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          style,
          pressed && styles.pressed,
        ]}
        onPress={infoButtonHandler}
      >
        <View>
          <Text style={[styles.buttonText, textColor]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default InfoButton;

const styles = StyleSheet.create({
  infoButtonContainer: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 6,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.textPrimary,
    textAlign: "center",
    fontFamily: "IBMPlexSans_400Regular",
  },
  pressed: {
    opacity: 0.7,
  },
});
