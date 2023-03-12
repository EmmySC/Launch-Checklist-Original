// Write your helper functions here!
require('isomorphic-fetch');

//updates: div id="missionTarget" --> doesn't return anything
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
        <h2>MissionDestination</h2>
           <ol>
               <li>Name: ${name}</li>
               <li>Diameter: ${diameter} </li>
               <li>Star: ${star}</li>
               <li>Distance from Earth: ${distance}</li>
               <li>Number of Moons: ${moons}</li>
          </ol>
          <img src=${imageUrl}>
        `;
}

//validates input from the formSubmission --> strings for pilot & copilot, Numbers for fuel level & cargo mass
function validateInput(testInput) {
   if (testInput === "") {
    console.log("Empty");  //return
    alert("All input fields are required before submitting");
   } else if (isNaN(testInput) === true) {
        console.log("Not a Number"); //return
        alert("Make sure to input valid information into each field before submitting");
   } else { (!isNaN(testInput) === false)
        return "Is a Number"; //
   }
}

//takes in user input for the shuttle launch checklist (display)
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let faultyItems = list; // let list = document.getElementById("faultyItems"); // div id="faultyItems" --> list.style.visibility 
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus"); 
   let launchStatus = document.getElementById("launchStatus"); //h2

//updates: div id="launchStatusCheck" based on test senarios//

    //if fuelLevel too low (less than 10,000L), change h2 id="launchStatus" to "Shuttle not ready for launch" & h2.style.color = "red"
    if (fuelLevel <= 10000) {
        faultyItems.style.visibility = "visible"; //list.style.visibility = "visible"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level too low for launch"; //fuelLevel
        launchStatus.innerHTML = "Shuttle not ready for launch"; //h2.textContent = "Shuttle not ready for launch"
        launchStatus.style.color = "red";  //h2.style.color = "red"
    //otherwise, "Fuel level high enough for launch", set h2 id="launchStatus" to "Shuttle is ready for launch" & h2.style.color = "green"
    } else {
        faultyItems.style.visibility = "hidden"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green"; //h2.style.color = "green"
    }

    //if cargoLevel too large (more than 10,000kg), change h2 id="launchStatus" to "Cargo mass too heavy for launch" & h2.style.color = "red"
    if (cargoLevel >= 10000) {
        faultyItems.style.visibility = "visible"; //list.style.visibility = "visible"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch" //cargoLevel
        launchStatus.innerHTML = "Shuttle not ready for launch"; //h2.textContent = "Shuttle not ready for launch"
        launchStatus.style.color = "red";  //h2.style.color = "red"
    //otherwise, "Cargo mass low enough for launch", set h2 id="launchStatus" to "Shuttle is ready for launch" & h2.style.color = "green"
    } else {
        faultyItems.style.visibility = "hidden"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";  //h2.style.color = "green"
    } 

    //default: shuttle has high enough fuel and low enough mass to launch --> "Shuttle is ready for launch"
    if (fuelLevel > 10000 && cargoLevel < 10000) {
        faultyItems.style.visibility = "hidden"  //list.style.visibility = "hidden"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch" //fuelLevel
        cargoStatus.innerHTML = "Cargo mass low enough for launch" //cargoLevel
        launchStatus.innerHTML = "Shuttle is ready for launch" //h2
        launchStatus.style.color = "green"; //h2
    }
        
}

//gets json planet data
async function myFetch() {
    //let planetsReturned;
    //planetsReturned = await fetch().then(function(response) 
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    const data = await planetsReturned.json();
    console.log(data);
    return data;
    //return planetsReturned;
}

//returns a randomly selected planet
function pickPlanet(planets) {
    let randomPlanetIndex = Math.floor(Math.random() * planets.length);
    let selectedPlanet = planets[randomPlanetIndex];
    return selectedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
