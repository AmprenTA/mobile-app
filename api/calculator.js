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
  console.log(response.request._headers, "header house");
  return response.data;
}

export async function createFoods(body, token) {
  const response = await axios.post(BASE_URL + "foods", body, {
    headers: {
      "Auth-Token": token,
    },
  });
  console.log(response.request._headers, "header foods");
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
  console.log(response.request._headers, " header rezultate");
  return response.data;
}

export async function getAirports() {
  const response = await axios.get(BASE_URL + "flights/airports");

  return response.data;
}

export async function getUserAvailability(token) {
  const response = await axios.get(BASE_URL + `users/availability`, {
    headers: {
      "Auth-Token": token,
    },
  });

  return response.data;
}

export async function getLocationCounties() {
  const response = await axios.get(BASE_URL + "locations/counties");

  return response.data;
}

export async function getLocations(county) {
  const response = await axios.get(BASE_URL + "locations", {
    params: { county: county },
  });

  return response.data;
}
