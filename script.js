// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select the necessary elements from the DOM
    const textarea = document.getElementById('my-textarea');
    const currentCountEl = document.getElementById('current-count');
    const counterDisplay = document.getElementById('counter-display');
    
    // Get the maximum length from the textarea's 'maxlength' attribute
    // Using parseInt to ensure it's a number
    const maxLength = parseInt(textarea.getAttribute('maxlength'));

    // Add an 'input' event listener to the textarea.
    // This event fires every time the user types, pastes, or cuts text.
    textarea.addEventListener('input', () => {
        // Get the current number of characters in the textarea
        const currentLength = textarea.value.length;

        // Update the text content of the counter span
        currentCountEl.textContent = currentLength;

        // Check if the current length has reached or exceeded the max length
        if (currentLength >= maxLength) {
            // Add a class to the textarea to turn its border red (via CSS)
            textarea.classList.add('limit-reached');
            
            // Add a class to the counter text to make it red and bold
            currentCountEl.classList.add('limit-text');
            
        } else {
            // If below the limit, remove the classes to revert to normal styling
            textarea.classList.remove('limit-reached');
            currentCountEl.classList.remove('limit-text');
        }
    });

});