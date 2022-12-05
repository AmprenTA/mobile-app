import { useState } from "react";
import AuthForm from "./AuthForm";

function AuthContent({ isLogin, onAuthenticate }) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  function submitHandler(credentials) {
    let { firstName, lastName, email, password, confirmPassword } = credentials;

    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    password = password.trim();

    const regName = /[0-9]+/g;
    const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    const firstNameIsValid = !regName.test(firstName);
    const lastNameIsValid = !regName.test(lastName);
    const emailIsValid = email.includes("@");
    const passwordIsValid = regPassword.test(password);
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && !passwordsAreEqual) ||
      (!isLogin && !firstNameIsValid) ||
      (!isLogin && !lastNameIsValid)
    ) {
      setCredentialsInvalid({
        validFirstName: !firstNameIsValid,
        validLastName: !lastNameIsValid,
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ firstName, lastName, email, password });
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
