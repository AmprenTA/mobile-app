import { useState } from "react";

import { StyleSheet } from "react-native";

import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  function signupHandler({ firstName, lastName, city, email, password }) {
    console.log(firstName, lastName, city, email, password);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default LoginScreen;
