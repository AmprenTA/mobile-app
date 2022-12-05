import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../constants/styles";
function Button({ children, style, onPress, textStyle }) {
  return (
    <Pressable
      style={({ pressed }) => [style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    color: Colors.textPrimary,
    textAlign: "center",
    fontFamily: "IBMPlexSans_500Medium",
  },
  pressed: {
    opacity: 0.7,
  },
});
