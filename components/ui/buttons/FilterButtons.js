import { View, StyleSheet } from "react-native";
import { useState, useEffect, memo } from "react";
import Button from "./Button";
import { Colors } from "../../../constants/styles";

function FilterButtons({ changeFilter }) {
  const [firstOption, setFirstOption] = useState(false);

  useEffect(() => {
    if (firstOption) {
      changeFilter("an");
    } else {
      changeFilter("luna");
    }
  }, [firstOption]);

  function firstButtonPress() {
    setFirstOption(true);
  }

  function secondButtonPress() {
    setFirstOption(false);
  }

  return (
    <View style={styles.filterButtons}>
      <Button
        style={{
          marginRight: 5,
          borderWidth: 1,
          borderColor: Colors.textSecondary,
          borderBottomLeftRadius: 7,
          borderTopLeftRadius: 7,
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: firstOption ? Colors.blue : Colors.background,
        }}
        onPress={firstButtonPress}
        textStyle={{ fontSize: 14, color: Colors.textSecondary }}
      >
        Anul trecut
      </Button>
      <Button
        style={{
          borderWidth: 1,
          borderColor: Colors.textSecondary,
          borderBottomRightRadius: 7,
          borderTopRightRadius: 7,
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: !firstOption ? Colors.blue : Colors.background,
        }}
        onPress={secondButtonPress}
        textStyle={{ fontSize: 14, color: Colors.textSecondary }}
      >
        Luna trecută
      </Button>
    </View>
  );
}

export default memo(FilterButtons);

const styles = StyleSheet.create({
  filterButtons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingVertical: 10,
  },
});
