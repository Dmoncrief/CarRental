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
    estimateTotalCostButton.onclick = estimateTotalCostButtonClick;
};


function onEstimateTotalCostButton() {
    // get known values
    let numOfDays = Number



    // Calulate unknown values
    let carRentalAmount = 29.99 * numOfDays;
    let optionsAmount = 0;

    if(isOptElectTooltag){
        optionsAmount +=(3.95 * numOfDays);
    }
    {
        if(OptGPS)
            optionsAmount(2.95 * numOfDays);

        
    }
    if(isOpRoadAsst){
        optionsAmount += (2.95 * numOfDays);
    }
    let surchargeAmount;
    if(isUnder25){
        surchargeAmount = 0.30 * (carRentalAmount + optionsAmount);

    }
    else{
        surchargeAmount = 0;
    }

    let totaldueAmount = carRentalAmount + optionsAmount + surchargeAmount;




    // display the results

}
outputCarRental.innerHTML = carRentalAmount;
outputOptions.innerHtml = optionsAmount;
outputSurcharge.innerHtml = surchargeAmount;
outputTotal.innerHtml = totaldueAmount; 

