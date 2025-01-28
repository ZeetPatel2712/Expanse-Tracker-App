const transactionForm = document.getElementById('transaction-form') as HTMLFormElement;
transactionForm?.addEventListener('submit', function (e: Event) {
     e.preventDefault(); // Prevent form submission

     // Clear previous error messages
     const formGroups = document.querySelectorAll('.form-group');
     formGroups.forEach((group) => {
          const error = group.querySelector('.error-message');
          if (error) error.remove();
     });

     let isValid = true;

     // Validate Total Amount
     const amountField = document.getElementById('amount-field') as HTMLInputElement;
     if (!amountField?.value.trim() || isNaN(Number(amountField.value)) || parseFloat(amountField.value) <= 0) {
          showError(amountField, 'Please enter a valid amount.');
          isValid = false;
     }

     // Validate Amount Type
     const amountType = document.getElementById('amount-type') as HTMLSelectElement;
     if (!amountType?.value.trim()) {
          showError(amountType, 'Please select an amount type.');
          isValid = false;
     }

     // Validate Amount Category
     const amountCategory = document.getElementById('amount-category') as HTMLSelectElement;
     if (!amountCategory?.value.trim()) {
          showError(amountCategory, 'Please select an amount category.');
          isValid = false;
     }

     // Validate Date
     const amountDate = document.getElementById('amount-date') as HTMLInputElement;
     if (!amountDate?.value.trim()) {
          showError(amountDate, 'Please select a date.');
          isValid = false;
     }

     // Validate Time
     const amountTime = document.getElementById('amount-time') as HTMLInputElement;
     if (!amountTime?.value.trim()) {
          showError(amountTime, 'Please select a time.');
          isValid = false;
     }

     // Validate File Attach (optional field, no validation required)

     // Validate Description
     const amountDescription = document.getElementById('amount-description') as HTMLTextAreaElement;
     if (!amountDescription?.value.trim()) {
          showError(amountDescription, 'Please enter a description.');
          isValid = false;
     }

     // If all fields are valid, show success message
     if (isValid) {
          alert('Form submitted successfully!');
          // Optionally, reset the form
          transactionForm.reset();
     }
});

function showError(element: HTMLElement, message: string): void {
     const error = document.createElement('div');
     error.className = 'error-message text-danger mt-1';
     error.innerText = message;
     const formGroup = element.closest('.form-group');
     formGroup?.appendChild(error);
}

// Clear button functionality
const clearBtn = document.getElementById('clear-btn') as HTMLButtonElement;
clearBtn?.addEventListener('click', function () {
     const form = document.getElementById('transaction-form') as HTMLFormElement;
     form?.reset();

     // Remove all error messages
     const errors = document.querySelectorAll('.error-message');
     errors.forEach((error) => error.remove());
});
