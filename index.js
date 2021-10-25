"use strict"

let destinations = ['NewYork', 'Las Vegas', 'Charlotte', 'Virgina Beach', 'Nashville', 'Charleston', 'Woodbidge', 'Atlanta']
let restaurants = ['Big Brutus', 'Steak & Shake', 'Olive Garden', 'Tacos & Brunch', 'KickBackJacks', 'Tuesdays', 'Burger Work', 'Munchies']
let transportation = ['Trolley', 'Taxi', 'Uber', 'Rental Car', 'Yatch', 'Helicopter', 'Skateboard', 'Bike']
let entertainment = [ 'Kriss Kross Concert', 'Juggling', 'Painting', 'Mini Golfing', 'Bowling', 'Zoo', 'A Play', 'A Musical']

let randomDestination = anotherDestination(destinations)
let randomRestaurant = anotherRestaurant(restaurants)
let randomTransportation =anotherTransportation(transportation)
let randomEntertainment =anotherEntertainment(entertainment)
let userInput=("no")
let numberPrompt = (1)

while(userInput == 'No' || userInput == 'NO' || userInput == 'no') {



alert("Here are your choices!"+ '\n' + randomDestination +'\n' + randomRestaurant + '\n' + randomTransportation + '\n' + randomEntertainment)

userInput = prompt("Are you satisfied with the choices? Yes or No?")
if(userInput == 'Yes' || userInput == 'YES' || userInput == 'yes') {
    alert("Your final choices are!" + '\n' + randomDestination + '\n' + randomRestaurant + '\n' + randomTransportation + '\n' +randomEntertainment)

}
else if (userInput == 'No' || userInput == 'NO'|| userInput == 'no') {
numberPrompt = prompt("What option would you like to change? \n Press 1 for Destination \n Press 2 for Restaurant \n Press 3 for Transportation \n Press 4 for Entertainment")

if(numberPrompt == 1)
randomDestination = anotherDestination(destinations)
else if(numberPrompt==2)
randomRestaurant = anotherRestaurant(restaurants)
else if(numberPrompt ==3)
randomTransportation = anotherTransportation(transportation)
else if(numberPrompt ==4)
randomEntertainment = anotherEntertainment(entertainment)
}
}

function anotherDestination (destinations) {
let getRandomNumber = Math.floor(Math.random() * 8)
return destinations[getRandomNumber]


}

function anotherRestaurant (restaurants){
    let getRandomNumber = Math.floor(Math.random() * 8)
    return restaurants[getRandomNumber]
}
function anotherTransportation (transportation) {
    let getRandomNumber = Math.floor(Math.random() * 8)
    return transportation [getRandomNumber]

}
function anotherEntertainment (entertainment) {
    let getRandomNumber = Math.floor(Math.random() * 8)
    return entertainment [getRandomNumber]
}