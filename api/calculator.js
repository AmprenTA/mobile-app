import axios from "axios";
import { BASE_URL } from "@env";

export async function createTranports(body, token) {
  const response = await axios.post(BASE_URL + "transportations", body, {
    headers: {
      "Auth-Token": token,
    },
  });

  return response.data;
}

export async function createHousehold(body, token) {
  const response = await axios.post(BASE_URL + "houses", body, {
    headers: {
      "Auth-Token": token,
    },
  });
  return response.data;
}

export async function createFoods(body, token) {
  const response = await axios.post(BASE_URL + "foods", body, {
    headers: {
      "Auth-Token": token,
    },
  });

  return response.data;
}

export async function getResults(footprint_id, token) {
  const response = await axios.get(
    BASE_URL + `footprints/${footprint_id}`,
    {},
    {
      headers: {
        "Auth-Token": token,
      },
    }
  );

  return response.data;
}

export async function getAirports() {
  const response = await axios.get(BASE_URL + "flights/airports");

  return response.data;
}
