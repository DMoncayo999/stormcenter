window.onload = init;

function init() {
    // Create a callback array at the begining of each page
    callbacks.forEach( f => f() );
}

//change message in banner
function banner() {
    messages = [
        "Saturday = Preston &#129374; Pancakes in the Park! 9 a.m. Saturday at the city park pavilion.",
        "Don't forget to go to Church this Sunday &#9962;"
        ]
    let today = new Date().getDay();
    let message = "";
    message = (today==5)? messages[0]: message;
    message = (today==6)? messages[1]: message;
    document.getElementById("alertBanner").innerHTML = message;

}

const updateWindChill = () => {
    //calculate windchill 

    const tempNumber = parseFloat (document.getElementById("temp").textContent);
    const speedNumber = parseFloat (document.getElementById("speed").textContent);

    let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) 
    + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
    windchill = Math.round(windchill);


    if(tempNumber<= 50 && speedNumber > 3) {
        document.getElementById("chill").innerHTML = windchill + "&deg;";
    } else {
        document.getElementById("chill").textContent = "No wind chill";

    }
}


//toggle sandwiche menu
function toggleMenu () {    
    document.getElementById("primaryNav").classList.toggle("hide"); 
 }
 
//update day and time in webpage
 function updateCurrentDate() {
    let options = {
        weekday: "long"
        ,day: "numeric"
        ,month: "long"
        ,year: "numeric"
        ,hour: "numeric"
        ,minute: "numeric"
    };
    // return new Date();
    return new Date().toLocaleDateString("en-Us", options)
}
