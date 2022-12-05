import axios from "axios";
import { BASE_URL } from "@env";

export async function createUser(email, password, firstName, lastName) {
  const response = await axios.post(BASE_URL + "users/sign_up", {
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName,
  });

  return response.data;
}

export async function login(email, password) {
  const response = await axios.post(BASE_URL + "users/sign_in", {
    email: email,
    password: password,
  });

  return response.data;
}
