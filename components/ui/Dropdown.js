import { useState } from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";

import { SelectList } from "react-native-dropdown-select-list";

function Dropdown({ data, placeholder, saveKeyOrValue, changeCity }) {
  const [selected, setSelected] = useState("");

  function changeAnswer() {
    changeCity(selected);
  }

  return (
    <>
      <SelectList
        setSelected={(val) => setSelected(val)}
        onSelect={changeAnswer}
        searchPlaceholder="Caută"
        notFoundText="Nu am găsit"
        data={data}
        save={saveKeyOrValue}
        search={true}
        placeholder={placeholder}
        boxStyles={styles.inputContainer}
        fontFamily="IBMPlexSans_400Regular"
        inputStyles={{ color: Colors.textSecondary, fontSize: 14 }}
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
          <Ionicons name="arrow-down" size={18} colors={Colors.textPrimary} />
        }
      />
    </>
  );
}

export default Dropdown;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: Colors.textPrimary,
    paddingHorizontal: 8,
    paddingVertical: 10,
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
});
