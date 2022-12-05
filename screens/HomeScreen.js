import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors } from "../constants/styles";
import MultipleLineChart from "../components/ui/MultipleLineChart";

import FilterButtons from "../components/ui/buttons/FilterButtons";
import SvgFootprint from "../components/ui/svg/SvgFootprint";
import { RecommandationData } from "../constants/text";
import DonationCard from "../components/ui/DonationCard";

function HomeScreen() {
  const [filter, setFilter] = useState("luna");

  function changeFilter(filter) {
    setFilter(filter);
  }
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View>
          <Text style={styles.headerText}>Amprenta ta</Text>
        </View>
        <View style={styles.chartContainer}>
          <View
            style={{ flexDirection: "row", width: "80%", alignItems: "center" }}
          >
            <SvgFootprint color="#87D147" />
            <View>
              <Text style={styles.chartHeader}>
                Amprenta ta a scăzut cu un total de 3kg de CO2 față de luna
                trecută. Continuă tot așa!
              </Text>
              <FilterButtons changeFilter={changeFilter} />
            </View>
          </View>
          <MultipleLineChart />
        </View>
        <View>
          <Text style={[styles.headerText, { marginBottom: 10 }]}>
            Recomandări pentru tine
          </Text>
        </View>
        {RecommandationData.map((recommandation) => {
          return (
            <DonationCard
              key={recommandation.text}
              header={recommandation.header}
              text={recommandation.text}
              image={recommandation.image}
              donation={false}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    justifyContent: "center",
  },
  headerText: {
    marginLeft: "10%",
    fontSize: 24,
    fontFamily: "IBMPlexSans_500Medium",
  },
  chartContainer: {
    marginVertical: "4%",
  },
  chartHeader: {
    fontFamily: "IBMPlexSans_500Medium",
    color: Colors.textPrimary,
  },
});
