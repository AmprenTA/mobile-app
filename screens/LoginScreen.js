import { useState, useContext } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../api/auth";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token["auth_token"]);
    } catch (error) {
      console.log(error.response);
      Alert.alert(
        "Autentificarea nu a funcționat!",
        "Nu te-am putut loga. Te rog verifcă credențialele și incearcă mai târziu."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Te logăm imediat..." />;
  }

  return <AuthContent isLogin={true} onAuthenticate={loginHandler} />;
}

export default LoginScreen;
