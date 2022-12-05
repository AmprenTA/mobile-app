import { View, Text, StyleSheet, Linking, Image } from "react-native";
import IconButton from "./buttons/IconButton";
import { Colors } from "../../constants/styles";

function DonationCard({ header, text, link, image, donation }) {
  function donateButtonHandler() {
    Linking.openURL(link);
  }

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} />
      </View>
      <View style={styles.headerContaienr}>
        <Text style={styles.headerText}>{header}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {donation && (
          <IconButton
            icon="arrow-forward-outline"
            color={Colors.textPrimary}
            size={20}
            style={{ backgroundColor: Colors.yellow }}
            onPress={donateButtonHandler}
            // layout={{ justifyContent: "space-around", alignItems: "center" }}
          >
            Donează
          </IconButton>
        )}
      </View>
    </View>
  );
}

export default DonationCard;

const styles = StyleSheet.create({
  card: {
    margin: 12,
    padding: 12,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRadius: 6,
    borderColor: Colors.textPrimary,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 20,
    fontFamily: "IBMPlexSans_500Medium",
    color: Colors.textPrimary,
  },
  text: {
    fontFamily: "IBMPlexSans_400Regular",
    color: Colors.textSecondary,
    marginVertical: 15,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
});
