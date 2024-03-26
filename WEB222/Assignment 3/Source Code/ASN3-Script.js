document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Reset previous error styles
        resetErrors();

        // Check Billing and Credit Card fields
        const billing = document.querySelectorAll('.Billing');
        const CC = document.querySelectorAll('[name="CC"]');
        const zip = document.getElementById('zip');
        const creditCardNumber = document.getElementById('CC#');
        const exp = document.getElementById('exp');
        const cvv = document.getElementById('CVV');
        let valid = true;

        billing.forEach(field => {
            if (!field.value.trim()) {
                showError(field, `${getFieldName(field)} is required.`);
                valid = false;
            }
        });

        let creditCardSelected = false;
        CC.forEach(field => {
            if (field.checked) {
                creditCardSelected = true;
            }
        });

        if (!creditCardSelected) {
            showError(CC[0], `Please select a credit card type.`);
            valid = false;
        }

        // Zip Code Validation (Canadian Zip Code)
        const zipPattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
        if (!zipPattern.test(zip.value)) {
            showError(zip, 'Please enter a valid Canadian Zip Code (e.g., M2J4K6).');
            valid = false;
        }

        // Credit Card Validation (Required Number of Digits)
        const ccNum = creditCardNumber.value.replace(/\s/g, ''); // Remove spaces
        const ccLen = ccNum.length;
        const requiredLength = 16; // Change this to the required number of digits

        if (ccLen !== requiredLength || isNaN(ccNum)) {
            showError(creditCardNumber, `Credit card number must be ${requiredLength} digits.`);
            exp.disabled = true;
            cvv.disabled = true;
            valid = false;
        }

        if (valid) {
            confirmation();
        }
    });

    function resetErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        const fields = document.querySelectorAll('.error');
        fields.forEach(field => field.classList.remove('error'));
    }

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.innerText = message;
        input.classList.add('error');
        input.parentNode.appendChild(error);
    }

    function getFieldName(input) {
        return input.previousElementSibling.innerText.trim();
    }

    function confirmation() {
        const confirmation = document.createElement('div');
        confirmation.className = 'confirmation';
        const fields = document.querySelectorAll('.form-group');

        let confirmationMessage = 'Thanks for submitting your order as follows:<br>';

        fields.forEach(field => {
            const label = field.querySelector('label').innerText.trim();
            const value = field.querySelector('input, select, textarea').value.trim();
            if (value) {
                confirmationMessage += `<strong>${label}:</strong> ${value}<br>`;
            }
        });

        confirmation.innerHTML = confirmationMessage;
        form.parentNode.replaceChild(confirmation, form);
    }
});
