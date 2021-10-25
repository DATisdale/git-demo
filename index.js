"use strict"

let destinations = ['NewYork', 'Las Vegas', 'Charlotte', 'Virgina Beach', 'Nashville', 'Charleston', 'Woodbidge', 'Atlanta']
let restaurants = ['Big Brutus', 'Steak & Shake', 'Olive Garden', 'Tacos & Brunch', 'KickBackJacks', 'Tuesdays', 'Burger Work', 'Munchies']
let trasnportation = ['Trolley', 'Taxi', 'Uber', 'Rental Car', 'Yatch', 'Helicopter', 'Skateboard', 'Bike']
let entertainment = [ 'Kriss Kross Concert', 'Juggling', 'Painting', 'Mini Golfing', 'Bowling', 'Zoo', 'A Play', 'A Musical']

let randomDestination = anotherDestination(destinations)
let randomRestaurant =('Big Brutus')
let randomTransportation =('Bike')
let randomEntertainment =('Juggling')
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
}


}

function anotherDestination (destinations) {
let getRandomNumber = Math.floor(Math.random() * 8)
return destinations[getRandomNumber]
}