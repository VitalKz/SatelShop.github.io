window.phoneInputMask = function (element) {
    if (element && typeof element.addEventListener === 'function') {
        element.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
            let formattedValue = '';

            // Add the first digit
            if (value.length > 0) {
                formattedValue += value[0];
            }

            // Add the opening parenthesis and the next three digits if available
            if (value.length > 1) {
                formattedValue += '(' + value.substring(1, 4);
            }

            // Add the closing parenthesis and the next three digits if available
            if (value.length > 4) {
                formattedValue += ') ' + value.substring(4, 7);
            }

            // Add the dash and the next two digits if available
            if (value.length > 7) {
                formattedValue += '-' + value.substring(7, 9);
            }

            // Add the dash and the last two digits if available
            if (value.length > 9) {
                formattedValue += '-' + value.substring(9, 11);
            }

            // Update the input value with the formatted value
            e.target.value = formattedValue;
        });
    }
}

window.emailInputMask = function (element) {
    if (element && typeof element.addEventListener === 'function') {
        element.addEventListener('input', function (e) {
            let value = e.target.value;
            // Check if the input value matches the email format
            if (!isValidEmail(value)) {
                e.target.classList.add('invalid'); // Add a CSS class to indicate invalid input
            } else {
                e.target.classList.remove('invalid');
            }
        });
    }
}

// Function to validate email format
function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

///Changing input type for hide\show password
function changeInputType(elementID) {
    // Get element with the specified ID name
    var inputField = document.getElementById(elementID);
    if (inputField.type == 'password') {
        inputField.type = 'text';
    } else {
        inputField.type = 'password';
    }
}