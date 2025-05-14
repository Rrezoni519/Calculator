//calculator program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    
}

function clearDisplay() {
 display.value = "";
}

function calculate() {
    try {
        display.value = Function('"use strict"; return (' + display.value + ')')();
    }

    catch (error) {
        display.value = "Error!";
    }
}

// Add event listeners for buttons
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (value === "C") {
            clearDisplay();
        } else if (value === "=") {
            calculate();
        } else {
            appendToDisplay(value);
        }
    });
});

// Function i cili jep vleren ne display
function appendToDisplay(value) {
    const display = document.getElementById('Display');
    display.value = display.value + value;
}

// Funksioni qe kalkulon rezulatatin
function calculate() {
    const display = document.getElementById('Display');
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Handle invalid expressions
    }
}

//Funksioni qe pastron vleren ne display
function clearDisplay() {
    const display = document.getElementById('Display');
    display.value = ''; // Clear the display
} 