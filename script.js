// Part 1: Variable declarations and conditionals
// ---

// Declare some variables with a BMW theme
const currentYear = new Date().getFullYear();
const bmwSlogan = "The Ultimate Driving Machine";
let bmwFact;

// Use a conditional statement to present a fact based on the current year
if (currentYear > 2020) {
    bmwFact = "BMW has been investing heavily in electric vehicles, like the iX and i4.";
} else {
    bmwFact = "BMW was founded in 1916 and originally manufactured aircraft engines.";
}

// Display a greeting related to BMW
const greetingMessage = `Welcome to the world of BMW. Did you know? ${bmwFact}`;
document.getElementById('greeting').textContent = greetingMessage;

// ---
// Part 2: At least 2 custom functions
// ---

const bmwFacts = [
    "BMW's headquarters in Munich is shaped like a four-cylinder engine.",
    "The blue and white BMW logo is not based on a propeller. It represents the colors of the Bavarian Free State.",
    "BMW introduced the first turbocharged production diesel car in 1983."
];

let factIndex = 0;

// Function 1: Cycles through BMW facts
function displayNextFact() {
    const paragraph = document.getElementById('function-text');
    paragraph.textContent = bmwFacts[factIndex];
    factIndex = (factIndex + 1) % bmwFacts.length; // Cycle back to the start
}

// Function 2: Calculates the displacement of an engine (simple example)
function calculateEngineDisplacement(cylinders, volumePerCylinder) {
    return cylinders * volumePerCylinder;
}

// Example usage of the function (console log)
console.log("A 6-cylinder engine with 500cc per cylinder has a displacement of: " + calculateEngineDisplacement(6, 500) + "cc.");

// ---
// Part 3: At least 2 loop examples
// ---

// Loop 1: For loop to list a series of models
const modelsList = document.getElementById('loop-list');
const series = ['1 Series', '3 Series', '5 Series', '7 Series', 'X Series'];
for (let i = 0; i < series.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `BMW ${series[i]}`;
    modelsList.appendChild(listItem);
}

// Loop 2: While loop to count up to a certain model year
let year = 2010;
while (year <= 2015) {
    console.log(`Checking BMW models from the year ${year}`);
    year++;
}

// ---
// Part 4: At least 3 DOM interactions
// ---

// DOM Interaction 1: Event listener on a button
const changeTextBtn = document.getElementById('change-text-btn');
changeTextBtn.addEventListener('click', displayNextFact);

// DOM Interaction 2: Getting and setting values from an input and adding to a list
const addItemBtn = document.getElementById('add-item-btn');
const inputField = document.getElementById('my-input');
const domList = document.getElementById('dom-list');
const itemCountSpan = document.getElementById('item-count');

addItemBtn.addEventListener('click', function() {
    const itemText = inputField.value;
    if (itemText.trim() !== "") {
        const newListItem = document.createElement('li');
        newListItem.textContent = `BMW ${itemText}`;
        domList.appendChild(newListItem);
        inputField.value = ""; // Clear the input field
        
        // DOM Interaction 3: Dynamically updating a text element
        itemCountSpan.textContent = domList.children.length;
    }
});