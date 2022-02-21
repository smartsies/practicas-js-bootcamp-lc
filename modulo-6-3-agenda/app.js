// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true)
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true)
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true)
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true)
  },
];

//Generación aleatoria de la disponibilidad
function getRandomAvailability() {
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber > 4 ? true : false;
}

function generateRandomSchedule(team) {
  for (person of team) {
    let index = 0;
    for (availability of person.availability) {
      let isAvailable = getRandomAvailability();
      person.availability[index] = isAvailable;
      index++;
    }
  }
}

generateRandomSchedule(myTeam);

function printSchedule(team) {
  console.log("AGENDA");
  for (index = 0; index < team.length; index++) {
    console.log("Disponibilidad de " + team[index].name);

    for (j = 0; j < team[index].availability.length; j++) {
      let isAvailable = team[index].availability[j] ? "Sí" : "No";
      console.log(WORK_HOURS[j] + ": " + isAvailable);
    }
  }
  console.log("------------------------------");
}

printSchedule(myTeam);

//Buscar hueco libre
function searchFreeGap(team) {
  for (index = 0; index < WORK_HOURS.length; index++) {
    let isGapFree = true;

    for (j = 0; j < team.length; j++) {
      if (!team[j].availability[index]) {
        isGapFree = false;
      }
    }

    if (isGapFree) {
      return console.log("Hueco encontrado en el horario de " + WORK_HOURS[index]);
    }
  }
  console.log("Lo siento. No hay hueco disponible en el equipo.");
}

searchFreeGap(myTeam);