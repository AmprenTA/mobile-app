import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import AuthForm from "./AuthForm";
import { Colors } from "../../constants/styles";

function AuthContent({ isLogin, onAuthenticate }) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    firstName: false,
    lastName: false,
    city: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  function submitHandler(credentials) {
    let { firstName, lastName, city, email, password, confirmPassword } =
      credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 7;
    const passwordsAreEqual = password === confirmPassword;

    if (!emailIsValid || !passwordIsValid || (!isLogin && !passwordsAreEqual)) {
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ firstName, lastName, city, email, password });
  }

  return (
    <AuthForm
      isLogin={isLogin}
      onSubmit={submitHandler}
      credentialsInvalid={credentialsInvalid}
    />
  );
}

export default AuthContent;
