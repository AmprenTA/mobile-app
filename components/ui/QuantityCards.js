import { View, Text, StyleSheet } from "react-native";
import ResultCard from "./ResultCard";
import { Colors } from "../../constants/styles";
function QuantityCards({
  trasnportValue,
  foodValue,
  energyValue,
  description,
}) {
  return (
    <View style={styles.quantityCard}>
      <View style={styles.textContainer}>
        <Text style={styles.quantityDescription}>{description}</Text>
      </View>
      <View style={styles.cardsContainer}>
        <ResultCard
          text="Transport"
          quantity={trasnportValue}
          cardStyle={{
            height: 130,
            width: 90,
            borderWidth: 0,
            backgroundColor: Colors.background,
          }}
          textStyle={{ fontSize: 14 }}
          style={{
            backgroundColor: Colors.red,
            height: 70,
            width: 70,
            borderRadius: 35,
          }}
          quantityTextStyle={{
            fontSize: 16,
            color: Colors.textPrimary,
          }}
        />
        <ResultCard
          text="Alimentație"
          quantity={foodValue}
          cardStyle={{
            height: 130,
            width: 90,
            borderWidth: 0,
            backgroundColor: Colors.background,
          }}
          textStyle={{ fontSize: 14 }}
          style={{
            backgroundColor: Colors.yellow,
            height: 70,
            width: 70,
            borderRadius: 35,
          }}
          quantityTextStyle={{
            fontSize: 16,
            color: Colors.textPrimary,
          }}
        />

        <ResultCard
          text="Gospodărie"
          quantity={energyValue}
          cardStyle={{
            height: 130,
            width: 90,
            borderWidth: 0,
            backgroundColor: Colors.background,
          }}
          textStyle={{ fontSize: 14 }}
          style={{
            backgroundColor: Colors.green,
            height: 70,
            width: 70,
            borderRadius: 35,
          }}
          quantityTextStyle={{
            fontSize: 16,
            color: Colors.textPrimary,
          }}
        />
      </View>
    </View>
  );
}

export default QuantityCards;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  quantityCard: {
    alignSelf: "center",
    width: "95%",
    backgroundColor: "white",
    borderColor: Colors.textPrimary,
    borderWidth: 1.5,
    borderRadius: 8,
    paddingBottom: 20,
    marginHorizonal: 10,
    marginTop: 14,
  },
  textContainer: {
    paddingVertical: 20,
  },
  quantityDescription: {
    fontFamily: "IBMPlexSans_500Medium",
    color: Colors.textSecondary,
    fontSize: 16,
    paddingHorizontal: "10%",
  },
});
