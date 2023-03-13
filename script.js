// Write your JavaScript code here!

window.addEventListener("load", function() {
   
     let list = document.getElementById("faultyItems"); //list.style.visibility = "hidden" --> default; 
     let form = document.querySelector("form"); //accessing everything inside document's <form> & return references to elements via CSS selectors
   
   form.addEventListener("submit", function(event) { 
        event.preventDefault();

       let document = window.document
       let pilot = document.querySelector("input[name=pilotName]"); //pilot.value
       let copilot = document. querySelector("input[name=copilotName]"); //copilot.value
       let fuelLevel = document.querySelector("input[name=fuelLevel]"); //fuelLevel.value
       let cargoLevel = document.querySelector("input[name=cargoMass]"); //cargoLevel.value

       formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value); //remove: .value

    }) //form listener ending bracket & parentheses

    //Set listedPlanetsResponse equal to the value returned by calling myFetch()
      let listedPlanets;
      let listedPlanetsResponse = myFetch(); 

    listedPlanetsResponse.then(function (result) {
      listedPlanets = result; 
      console.log(listedPlanets); 
    })
     .then(function() {
        console.log(listedPlanets);
    //use pickPlanet() to randomly choose a planet from the list of planets and add that information to your destination
      let selectedPlanet = pickPlanet(listedPlanets);
      console.log(selectedPlanet);
      
      addDestinationInfo(window.document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image); 
   })

}); //window listener ending bracket & parentheses