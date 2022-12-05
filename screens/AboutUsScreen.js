import { Text, View, StyleSheet } from "react-native";
import SvgAboutUs from "../components/ui/svg/SvgAboutUs";

function AboutUsScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.svgContainer}>
        <SvgAboutUs />
      </View>
      <View style={styles.textsContainer}>
        <View style={styles.textContainer}>
          <Text>Creăm site-ul web și îl facem public</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Colectăm datele și le separăm pe nivele</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Mergem la instituțiile responsabile</Text>
        </View>
      </View>
    </View>
  );
}

export default AboutUsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  svgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textContainer: {
    textAlign: "right",
  },
});
