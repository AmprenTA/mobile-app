import { useState } from "react";
// import { Alert, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Colors } from "../constants/styles";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  function signupHandler({ firstName, lastName, city, email, password }) {
    console.log(firstName, lastName, city, email, password);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent isLogin={true} onAuthenticate={signupHandler} />;
}

export default LoginScreen;

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
    marginTop: 64,
    flex: 2,
  },
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
