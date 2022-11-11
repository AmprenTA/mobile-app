import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
// import { Alert, Pressable } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import IconButton from "../ui/buttons/IconButton";
import Button from "../ui/buttons/Button";
import IconInput from "../ui/inputs/IconInput";
import { Colors } from "../../constants/styles";
import { SelectList } from "react-native-dropdown-select-list";
import SvgIcon from "../ui/svg/SvgIcon";
import Highlight from "../ui/Highlight";
import Separator from "../ui/Separator";

const data = [
  { key: "1", value: "Suceava" },
  { key: "2", value: "Bucuresti" },
  { key: "3", value: "Timisoara" },
  { key: "4", value: "Cluj-Napoca" },
  { key: "5", value: "Sibiu" },
  { key: "6", value: "Deva" },
  { key: "7", value: "Constanta" },
];

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const navigation = useNavigation();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selected, setSelected] = useState("");

  const ref_input2 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "lastName":
        setLastName(enteredValue);
        break;
      case "firstName":
        setFirstName(enteredValue);
        break;
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    console.log(enteredEmail, enteredPassword, enteredConfirmPassword);
    onSubmit({
      firstName: firstName,
      lastName: lastName,
      city: selected,
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  function navigateButtonHandler() {
    if (isLogin) {
      navigation.replace("REGISTER");
    } else {
      navigation.replace("LOGIN");
    }
  }

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.upperContainer}>
          <View style={styles.svg}>
            <SvgIcon />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.header}>
              Dacă ai continua să trăiesti exact ca acum, pe care planetă ai
              vreă să te muți?
            </Text>
            <Highlight>Schimbă-ți amprenta,</Highlight>
            <Text style={styles.boldHeader}>
              pentru că Pământul e singura opțiune.
            </Text>
          </View>
        </View>
        <View style={styles.authContainer}>
          {!isLogin && (
            <IconInput
              icon="person-outline"
              inputType="default"
              placeholder="Nume"
              afterSubmit={() => ref_input2.current.focus()}
              value={lastName}
              onUpdateValue={updateInputValueHandler.bind(this, "lastName")}
            >
              Nume*
            </IconInput>
          )}

          {!isLogin && (
            <IconInput
              icon="person-outline"
              inputType="default"
              placeholder="Prenume"
              reference={ref_input2}
              afterSubmit={() => ref_input4.current.focus()}
              value={firstName}
              onUpdateValue={updateInputValueHandler.bind(this, "firstName")}
            >
              Prenume*
            </IconInput>
          )}
          {!isLogin && <Text style={styles.label}>Oraș*</Text>}
          {!isLogin && (
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              searchPlaceholder="Caută"
              placeholder="Ex: Suceava"
              notFoundText="Nu am găsit"
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
          <IconInput
            icon="mail-outline"
            inputType="email-address"
            placeholder="email@domain.com"
            reference={ref_input4}
            afterSubmit={() => ref_input5.current.focus()}
            value={enteredEmail}
            onUpdateValue={updateInputValueHandler.bind(this, "email")}
            isInvalid={emailIsInvalid}
          >
            Adresa de e-mail*
          </IconInput>
          <IconInput
            icon="key-outline"
            inputType="password"
            placeholder="************"
            secondIcon={true}
            secondIconName="eye-outline"
            reference={ref_input5}
            afterSubmit={() => ref_input6.current.focus()}
            value={enteredPassword}
            onUpdateValue={updateInputValueHandler.bind(this, "password")}
            isInvalid={passwordIsInvalid}
          >
            Parola*
          </IconInput>
          {!isLogin && (
            <IconInput
              icon="key-outline"
              inputType="password"
              placeholder="************"
              secondIcon={true}
              secondIconName="eye-outline"
              reference={ref_input6}
              onUpdateValue={updateInputValueHandler.bind(
                this,
                "confirmPassword"
              )}
              value={enteredConfirmPassword}
              isInvalid={passwordsDontMatch}
            >
              repetă Parola*
            </IconInput>
          )}
          <IconButton
            color={Colors.textPrimary}
            size={20}
            style={{ backgroundColor: Colors.blue, marginBottom: 5 }}
            icon="arrow-forward-outline"
            onPress={submitHandler}
          >
            {isLogin ? "Conectează-te" : "Înregistrează-te"}
          </IconButton>
          <Separator style={{ backgroundColor: Colors.textSecondary }} />
          <View style={styles.otherAuthContainer}>
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 16,
                fontFamily: "IBMPlexSans_400Regular",
              }}
            >
              {isLogin ? "Nu ai un cont?" : "Ai deja un cont?"}
            </Text>
            <Button
              onPress={navigateButtonHandler}
              style={{ marginHorizontal: 10, paddingVertical: 0 }}
            >
              {isLogin ? "Înregistrează-te" : "Conectează-te"}
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginHorizontal: 16,
    padding: 20,
    justifyContent: "center",
  },
  svg: {
    flex: 1,
  },
  descriptionContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  upperContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  authContainer: {
    marginTop: 32,
    flex: 4,
  },
  inputContainer: {
    borderColor: Colors.textPrimary,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1.4,
    borderRadius: 6,
    marginBottom: 15,
  },
  icon: {
    padding: 10,
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "IBMPlexSans_400Regular",
    color: Colors.textSecondary,
    textDecorationLine: "none",
  },
  activeInput: {
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: Colors.textPrimary,
    marginBottom: 15,
  },
  label: {
    marginBottom: 4,
    textTransform: "uppercase",
    color: Colors.textSecondary,
    fontFamily: "IBMPlexSans_500Medium",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  highlightContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  boldHeader: {
    fontSize: 16,
    fontFamily: "IBMPlexSans_500Medium",
  },
  header: {
    marginBottom: 16,
    fontFamily: "IBMPlexSans_400Regular",
    color: Colors.textSecondary,
  },
  otherAuthContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
