import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/styles";
function IconButton({ children, style, onPress, icon, color, size }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
