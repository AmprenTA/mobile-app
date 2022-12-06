import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useState, useCallback } from "react";
import Dropdown from "../components/ui/Dropdown";
import MultipleLineChart from "../components/ui/MultipleLineChart";
import { Colors } from "../constants/styles";
import ResultCard from "../components/ui/ResultCard";
import QuantityCards from "../components/ui/QuantityCards";
import SvgFootprint from "../components/ui/svg/SvgFootprint";
import Button from "../components/ui/buttons/Button";
import FilterButtons from "../components/ui/buttons/FilterButtons";

const data = [
  { key: "1", value: "Suceava" },
  { key: "2", value: "Bucuresti" },
  { key: "3", value: "Timisoara" },
  { key: "4", value: "Cluj-Napoca" },
  { key: "5", value: "Sibiu" },
  { key: "6", value: "Deva" },
  { key: "7", value: "Constanta" },
];

function StatisticsScreen() {
  const [city, setCity] = useState();
  const [firstfilter, setFirstFilter] = useState("luna");
  const [secondfilter, setSecondFilter] = useState("luna");

  function changeCity(city) {
    setCity(city);
  }

  function changeFirstFilter(filter) {
    setFirstFilter(filter);
  }

  function changeSecondFilter(filter) {
    setSecondFilter(filter);
  }

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View>
          <Text style={styles.headerText}>Statistici</Text>
        </View>
        <View>
          <Text style={styles.chartDescription}>
            În baza informațiilor adunate, AmprenTA prezice următoarea evoluție
            la nivelul local:
          </Text>
        </View>
        <View style={styles.dropdown}>
          <View>
            <Dropdown
              data={data}
              placeholder="Alege orașul"
              saveKeyOrValue="value"
              changeCity={changeCity}
            />
          </View>
        </View>
        <MultipleLineChart />
        <QuantityCards
          foodValue={10}
          trasnportValue={10}
          energyValue={10}
          description="În medie, o persoană din orașul Suceava produce CO2 în cantitate de:"
        />
        <QuantityCards
          foodValue={10}
          trasnportValue={10}
          energyValue={10}
          description="Iar o persoană din România produce CO2 în cantitate de:"
        />
        <View style={styles.chartContainer}>
          <View
            style={{ flexDirection: "row", width: "80%", alignItems: "center" }}
          >
            <SvgFootprint color="#FF6165" />
            <View>
              <Text style={styles.chartHeader}>
                Amprenta orașului Suceava a crescut cu un total de 18kg de CO2
                față de luna trecută.
              </Text>
              <FilterButtons changeFilter={changeFirstFilter} />
            </View>
          </View>
          <MultipleLineChart />
        </View>
        <View style={styles.chartContainer}>
          <View
            style={{ flexDirection: "row", width: "80%", alignItems: "center" }}
          >
            <SvgFootprint color="#87D147" />
            <View>
              <Text style={styles.chartHeader}>
                Amprenta României a scăzut cu un total de{"\n"}15 g de CO2 față
                de luna trecută.
              </Text>
              <FilterButtons changeFilter={changeSecondFilter} />
            </View>
          </View>
          <MultipleLineChart />
        </View>
      </View>
    </ScrollView>
  );
}

export default StatisticsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
    justifyContent: "center",
  },
  headerText: {
    // marginLeft: "10%",
    marginHorizontal: 10,
    fontSize: 24,
    fontFamily: "IBMPlexSans_500Medium",
  },
  chartDescription: {
    // marginLeft: "10%",
    marginHorizontal: 10,
    marginTop: 12,
    color: Colors.textPrimary,
    fontFamily: "IBMPlexSans_500Medium",
  },
  dropdown: {
    marginLeft: "20%",
    justifyContent: "center",

    marginTop: 12,
    paddingRight: 80,
  },
  chartContainer: {
    marginVertical: "4%",
  },
  chartHeader: {
    fontFamily: "IBMPlexSans_500Medium",
    color: Colors.textPrimary,
  },
  filterButtons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingVertical: 10,
  },
});
