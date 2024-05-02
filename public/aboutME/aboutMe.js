// if trevel is hovered over dispay the text

//these are all the hidden text variables
const hiddenTravel = document.querySelector(".TravelText");
const hiddenWorkout = document.querySelector(".WorkoutText");
const hiddenGamming = document.querySelector(".GammingText");

function travelUnveiled(){
    hiddenTravel.removeAttribute('hidden');
}

function workoutUnveiled(){
    hiddenWorkout.removeAttribute('hidden');
}

function gammingUnveiled(){
    hiddenGamming.removeAttribute('hidden');
}