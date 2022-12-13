import { View, Text, StyleSheet } from "react-native";
import { useState, useContext, useEffect, useLayoutEffect } from "react";
import { Colors } from "../../constants/styles";
import IconButton from "../../components/ui/buttons/IconButton";
import { SelectList } from "react-native-dropdown-select-list";
import { AnswersContext } from "../../store/answers-context";
import { Ionicons } from "@expo/vector-icons";
import { getLocationCounties, getLocations } from "../../api/calculator";

function CountyScreen({ navigation }) {
  const answersCtx = useContext(AnswersContext);
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [counties, setCounties] = useState([]);

  useEffect(() => {
    async function getLocationCountiesReq() {
      try {
        const countiesResponse = await getLocationCounties();
        setCounties(() => {
          return countiesResponse.map((county) => {
            return { key: county["id"], value: county["name"] };
          });
        });
      } catch (err) {
        console.log(err);
      }
    }

    getLocationCountiesReq();
  }, []);

  async function changeCountyAnswer() {
    try {
      const locationsResponse = await getLocations(selectedCounty);
      setLocations(() => {
        return locationsResponse.map((location) => {
          return { key: location["id"], value: location["name"] };
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  function goForward() {
    answersCtx.changeLocation(selectedLocation);
    navigation.navigate("firstSection");
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>Alege județul</Text>
        <View style={styles.dropdownsContainer}>
          <SelectList
            setSelected={(val) => setSelectedCounty(val)}
            onSelect={changeCountyAnswer}
            searchPlaceholder="Caută"
            notFoundText="Nu am găsit"
            data={counties}
            save="value"
            search={true}
            placeholder="Alege județul"
            boxStyles={styles.inputContainer}
            fontFamily="IBMPlexSans_400Regular"
            inputStyles={{ color: Colors.textSecondary, fontSize: 16 }}
            dropdownStyles={styles.activeInput}
            dropdownTextStyles={{ fontFamily: "IBMPlexSans_400Regular" }}
            searchicon={
              <Ionicons
                style={{ marginRight: 15 }}
                name="search-outline"
                size={18}
                colors={Colors.textPrimary}
              />
            }
            closeicon={
              <Ionicons
                name="close-outline"
                size={18}
                colors={Colors.textPrimary}
              />
            }
            arrowicon={
              <Ionicons
                name="arrow-down"
                size={18}
                colors={Colors.textPrimary}
              />
            }
          />
          {selectedCounty && (
            <SelectList
              setSelected={(val) => setSelectedLocation(val)}
              searchPlaceholder="Caută"
              notFoundText="Nu am găsit"
              data={locations}
              save="value"
              search={false}
              placeholder="Alege locația"
              boxStyles={styles.inputContainer}
              fontFamily="IBMPlexSans_400Regular"
              inputStyles={{ color: Colors.textSecondary, fontSize: 16 }}
              dropdownStyles={styles.activeInput}
              dropdownTextStyles={{ fontFamily: "IBMPlexSans_400Regular" }}
              searchicon={
                <Ionicons
                  style={{ marginRight: 15 }}
                  name="search-outline"
                  size={18}
                  colors={Colors.textPrimary}
                />
              }
              closeicon={
                <Ionicons
                  name="close-outline"
                  size={18}
                  colors={Colors.textPrimary}
                />
              }
              arrowicon={
                <Ionicons
                  name="arrow-down"
                  size={18}
                  colors={Colors.textPrimary}
                />
              }
            />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <IconButton
            color={Colors.textPrimary}
            size={20}
            style={{ backgroundColor: Colors.yellow }}
            icon="arrow-forward-outline"
            disabled={
              selectedCounty.length === 0 || selectedLocation.length === 0
            }
            onPress={goForward}
          >
            Continuă
          </IconButton>
        </View>
      </View>
    </View>
  );
}

export default CountyScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 64,
    marginHorizontal: 16,
    padding: 20,
  },
  mainContainer: {
    flex: 1,
    marginVertical: 40,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontFamily: "IBMPlexSans_500Medium",
    color: Colors.textPrimary,
  },
  buttonContainer: {
    width: "60%",
  },
  inputContainer: {
    borderColor: Colors.textPrimary,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1.4,
    borderRadius: 6,
    marginBottom: 15,
  },
  activeInput: {
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: Colors.textPrimary,
    marginBottom: 15,
  },
  dropdownsContainer: {
    marginVertical: 15,
  },
});
