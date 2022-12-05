import { View, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import { Colors } from "../../../constants/styles";

function NavigationButtons({ onPressBack, onPressForward }) {
  return (
    <View style={styles.navigationButtons}>
      <View style={styles.navigateButton}>
        <IconButton
          onPress={onPressBack}
          color={Colors.textPrimary}
          size={24}
          icon="chevron-down-outline"
          style={[
            styles.navigateButtonStyle,
            {
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 0,
            },
          ]}
        />
      </View>
      <View style={styles.navigateButton}>
        <IconButton
          onPress={onPressForward}
          color={Colors.textPrimary}
          size={24}
          icon="chevron-up-outline"
          style={[
            styles.navigateButtonStyle,
            {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 6,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 6,
            },
          ]}
        />
      </View>
    </View>
  );
}

export default NavigationButtons;

const styles = StyleSheet.create({
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  navigateButton: {
    margin: 2,
  },
  navigateButtonStyle: {
    borderWidth: 1,
    borderColor: Colors.textPrimary,
    backgroundColor: Colors.background,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
});
