import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../constants/styles";
import { Formik } from "formik";

function IconInput({
  children,
  icon,
  inputType,
  placeholder,
  secondIcon,
  secondIconName,
  reference,
  afterSubmit,
  onUpdateValue,
  value,
  isInvalid,
  invalidMessage,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [visibleInput, setVisibleInput] = useState(inputType === "password");

  function visibleIconHandler() {
    setVisibleInput((prevVisible) => !prevVisible);
  }
  return (
    <>
      <Text style={styles.label}>{children}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.activeInput,
          ,
          isInvalid && styles.inputInvalid,
        ]}
      >
        <Ionicons style={styles.icon} name={icon} size={18} />
        <TextInput
          autoCapitalize={false}
          autoCorrect={false}
          secureTextEntry={visibleInput}
          keyboardType={inputType}
          style={styles.input}
          cursorColor={Colors.blue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          ref={reference}
          onSubmitEditing={afterSubmit}
          onChangeText={onUpdateValue}
          value={value}
        />
        {secondIcon && (
          <Pressable onPress={visibleIconHandler}>
            <Ionicons style={styles.icon} name={secondIconName} size={18} />
          </Pressable>
        )}
      </View>
      {isInvalid && <Text style={styles.invalidMessage}>{invalidMessage}</Text>}
    </>
  );
}

export default IconInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.textPrimary,
    paddingVertical: 4,
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
  },
  label: {
    marginBottom: 4,
    textTransform: "uppercase",
    color: Colors.textSecondary,
    fontFamily: "IBMPlexSans_500Medium",
  },
  inputInvalid: {
    borderColor: Colors.red,
    marginBottom: 0,
  },
  invalidMessage: {
    margin: 4,
    color: Colors.red,
  },
});
