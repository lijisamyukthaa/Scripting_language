// Function to validate the entered number
function validateNumber() {
    var numberInput = document.getElementById('numberInput').value;
    var statusMessage = document.getElementById('statusMessage');

    // Check if the input is a 4-digit number
    if (!/^\d{4}$/.test(numberInput)) {
        statusMessage.innerHTML = '<p class="error">Please enter a valid 4-digit number.</p>';
        return false;
    }

    // Check if the first digit is zero
    if (numberInput[0] === '0') {
        statusMessage.innerHTML = '<p class="error">The first digit cannot be zero.</p>';
        return false;
    }

    // Check if the digits are in ascending order
    for (let i = 0; i < numberInput.length - 1; i++) {
        if (numberInput[i] >= numberInput[i + 1]) {
            statusMessage.innerHTML = '<p class="error">Digits must be in ascending order (e.g., 1234).</p>';
            return false;
        }
    }

    // If all validations pass
    statusMessage.innerHTML = '<p class="success">Valid number! The digits are in ascending order.</p>';
    return false; // To prevent form submission and keep the result displayed
}
