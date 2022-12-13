import { createContext, useState } from "react";

export const AnswersContext = createContext({
  answers: [],
  location: null,
  footprintId: null,
  addAnswer: (answer) => {},
  updateAnswer: (answer) => {},
  resetAnswers: () => {},
  addFootprintID: (id) => {},
  changeLocation: (location) => {},
  createTravelAnswer: () => {},
  createFoodAnswer: () => {},
});

function AnswersContextProvider({ children }) {
  const [answers, setAnswers] = useState([]);
  const [footprintId, setFootprintID] = useState(null);
  const [location, setLocation] = useState(null);

  function resetAnswers() {
    setAnswers(() => []);
  }

  function addAnswer(answer) {
    setAnswers((currentAnswer) => [...currentAnswer, answer]);
  }
  function updateAnswer(answer) {
    const newAnswers = answers.map((currentAnswer) => {
      if (currentAnswer.questionId === answer.questionId) {
        return { ...answer };
      }

      return currentAnswer;
    });
    setAnswers(newAnswers);
  }

  function addFootprintID(id) {
    setFootprintID(id);
  }

  function createTravelAnswer() {
    const cars = [];
    const flights = [];
    const transports = [];

    const totalKm = answers.filter((answer) => answer.question === "total_km");
    const fuelType = answers.filter(
      (answer) => answer.question === "fuel_type"
    );
    const fuelConsumption = answers.filter(
      (answer) => answer.question === "fuel_consumption"
    );
    const fromFlights = answers.filter((answer) => answer.question === "from");
    const toFlights = answers.filter((answer) => answer.question === "to");
    const transportType = answers.filter(
      (answer) => answer.question === "transportType"
    );
    const transportKM = answers.filter(
      (answer) => answer.question === "total_km_transport"
    );

    const fromValues = fromFlights.map((flight) => {
      return {
        from: flight.value,
      };
    });
    const toValues = toFlights.map((flight) => {
      return {
        to: flight.value,
      };
    });
    const carsTotalkm = totalKm.map((car) => {
      return {
        total_km: car.value,
      };
    });
    const carsFuelType = fuelType.map((car) => {
      return {
        fuel_type: car.value,
      };
    });
    const carsFuelConsumption = fuelConsumption.map((car) => {
      return {
        fuel_consumption: car.value,
      };
    });
    const transportKmValues = transportKM.map((transport) => {
      return {
        total_km: transport.value,
      };
    });
    const transportTypeValues = transportType.map((transport) => {
      return {
        transport_type: transport.value,
      };
    });

    for (let i = 0; i < totalKm.length; i++) {
      cars.push({
        ...carsTotalkm[i],
        ...carsFuelConsumption[i],
        ...carsFuelType[i],
      });
    }
    for (let i = 0; i < fromFlights.length; i++) {
      flights.push({ ...fromValues[i], ...toValues[i] });
    }

    for (let i = 0; i < transportKM.length; i++) {
      transports.push({ ...transportTypeValues[i], ...transportKmValues[i] });
    }

    return {
      cars: cars,
      flights: flights,
      public_transports: transports,
      location: location,
    };
  }

  function createFoodAnswer() {
    const foodAnswers = answers.filter((answer) => answer.section === "food");
    return {
      beef: foodAnswers[0].value,
      lamb: foodAnswers[1].value,
      poultry: foodAnswers[2].value,
      pork: foodAnswers[3].value,
      fish: foodAnswers[4].value,
      milk_based: foodAnswers[5].value,
      cheese: foodAnswers[6].value,
      eggs: foodAnswers[7].value,
      coffee: foodAnswers[8].value,
      vegetables: foodAnswers[9].value,
      bread: foodAnswers[10].value,
    };
  }

  function changeLocation(location) {
    setLocation(location);
  }

  const value = {
    answers: answers,
    footprintId: footprintId,
    addFootprintID: addFootprintID,
    resetAnswers: resetAnswers,
    addAnswer: addAnswer,
    updateAnswer: updateAnswer,
    changeLocation: changeLocation,
    createTravelAnswer: createTravelAnswer,
    createFoodAnswer: createFoodAnswer,
  };

  return (
    <AnswersContext.Provider value={value}>{children}</AnswersContext.Provider>
  );
}

export default AnswersContextProvider;
