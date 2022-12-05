import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/styles";

function ResultCard({
  text,
  quantity,
  style,
  cardStyle,
  textStyle,
  quantityTextStyle,
}) {
  return (
    <View style={[styles.cardContainer, cardStyle]}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
      <View style={[styles.quantityContainer, style]}>
        <Text style={[styles.quantity, quantityTextStyle]}>
          {Math.trunc(quantity)} kg
        </Text>
      </View>
    </View>
  );
}

export default ResultCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderColor: Colors.textPrimary,
    borderWidth: 1.5,
    borderRadius: 8,
    height: 200,
    width: 140,
    margin: 4,
    alignItems: "center",
  },
  textContainer: {
    marginVertical: 15,
  },
  text: {
    fontSize: 20,
    fontFamily: "IBMPlexSans_500Medium",
  },
  quantityContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1.5,
  },
  quantity: {
    fontSize: 30,
    fontFamily: "IBMPlexSans_500Medium",
    textAlign: "center",
  },
});
