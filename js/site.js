//get the values from the page
//start or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    

    // Validating our inputs by : parse int0 integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNUmbers 
        let numbers = generateNumbers(startValue,endValue);
        //we call displayNumbers

        displayNumber(numbers);
    } else {
        alert("you must enter integers")
    }    
}


//generate numbers from the start value to the end va;ues
//logic function
function generateNumbers(sValue,eValue){
    
    let numbers = [];
//we want to get all numbers from satrt to end.

    for(let i=sValue; i<=eValue;i++){
        //this will execute in a loop until index is equal to end value.
        numbers.push(i)
    }

    return numbers;
}



//display the numbers and mark the even numbers bold
//dispaly function
function displayNumber(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let element = numbers[index];
        let className = "even";
        if(element % 2 === 0){
            className = "even";
        }else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${element}</td></tr>`

        document.getElementById("results").innerHTML = templateRows;
    }
}