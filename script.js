// Write your JavaScript code here!

window.addEventListener("load", function() {

   const document = window.document
   const pilot = document.querySelector("input[name=pilotName]");
   const copilot = document. querySelector("input[name=copilotName]");
   const fuelLevel = document.querySelector("input[name=fuelLevel]");
   const cargoLevel = document.querySelector("input[name=cargoMass]");
   let list = document.getElementById("faultyItems"); 
   list.style.visibility = "hidden";  

   let form = document.querySelector("form"); //accessing everything inside document's <form> //to return references to elements via CSS selectors
   form.addEventListener("submit", function(event) { 
        event.preventDefault();
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);

        //if (validateInput(pilot.value) === "Empty" )


   let listedPlanets;
   let listedPlanetsResponse;  // = myFetch(); //Set listedPlanetsResponse equal to the value returned by calling myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
       console.log(listedPlanets);
       //call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    //    let selectedPlanet = pickPlanet(listedPlanets);
    //    addDestinationInfo(window.document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    })
   
  })
  
});