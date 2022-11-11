import axios from "axios";

const url =
  "https://bedb-2a02-2f0e-f715-4b00-1d73-8b25-412f-53eb.eu.ngrok.io/api/v1/";

async function authenticate(mode, email, password) {
  const response = await axios.post(url + mode, {
    email: email,
    password: password,
  });

  console.log(response.data);
}

export async function createUser(mode, email, password) {
  await authenticate(mode, email, password);
}

export async function login(mode, email, password) {
  await authenticate(mode, email, password);
}
