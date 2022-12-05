import { ScrollView, StyleSheet } from "react-native";
import DonationCard from "../components/ui/DonationCard";
import { DonationData } from "../constants/text";

function DonationScreen() {
  return (
    <ScrollView style={styles.rootContainer}>
      {DonationData.map((donation) => (
        <DonationCard
          header={donation.header}
          text={donation.text}
          link={donation.link}
          image={donation.image}
          key={donation.header}
          donation={true}
        />
      ))}
    </ScrollView>
  );
}

export default DonationScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
