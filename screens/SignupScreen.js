import { useState, useContext } from "react";

import { StyleSheet, Alert } from "react-native";

import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../api/auth";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ firstName, lastName, city, email, password }) {
    setIsAuthenticating(true);

    try {
      const token = await createUser(email, password, firstName, lastName);
      authCtx.authenticate(token["auth_token"]);
    } catch (err) {
      Alert.alert(
        "Crearea contului nu a funcționat!",
        "Nu am putut să-ți creăm contul, te rog verifcă datele introduse și încearcă mai târziu."
      );
      console.log(err.response);
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creăm contul..." />;
  }
  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default LoginScreen;
