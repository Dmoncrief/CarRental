"use strict";

// Input elements
const inputPickupDate = document.getElementById("inputPickupDate");
const inputNumOfDays = document.getElementById("inputNumOfDays");
const inputOptElecTollTagCheckbox = document.getElementById("inputOptElecTollTagCheckbox");
const inputOptGPSCheckbox = document.getElementById("inputOptGPSCheckbox");
const inputOptRoadsideAsstCheckbox = document.getElementById("inputOptRoadsideAsstCheckbox");
const inputUnder25NoRadio = document.getElementById("inputUnder25NoRadio");
const inputUnder25YesRadio = document.getElementById("inputUnder25YesRadio");

// Button
const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");

// Output elements
const outputCarRental = document.getElementById("outputCarRental");
const outputOptions = document.getElementById("outputOptions");
const outputSurcharge = document.getElementById("outputSurcharge");
const outputTotal = document.getElementById("outputTotal");


window.onload = function(){
    estimateTotalCostButton.onclick = EstimateTotalCostButtonClick;
};


function onEstimateTotalCostButton() {
    // get known values
    let numOfDays = Number



    // Calulate unknown values




    // display the results

}