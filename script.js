// Wait until the basic HTML document structure is ready
document.addEventListener('DOMContentLoaded', () => {

    // --- Part 1: Define and Inject all CSS styles ---
    // We define our CSS as a multi-line string.
    // This is much cleaner than setting dozens of individual style properties.
    const cssStyles = `
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
        }
        h2 {
            margin-top: 0;
            color: #1a253c;
            text-align: center;
        }
        textarea {
            width: 100%;
            height: 120px;
            padding: 15px;
            font-size: 16px;
            color: #333;
            border: 2px solid #dcdfe6; /* Default border */
            border-radius: 8px;
            resize: vertical;
            box-sizing: border-box;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        textarea:focus {
            outline: none;
            border-color: #4a90e2;
        }
        .counter-display {
            text-align: right;
            margin-top: 8px;
            font-size: 14px;
            color: #5a6982;
            transition: color 0.3s ease;
        }
        /* The class that will be toggled by JS to indicate the limit */
        .limit-reached {
            border-color: #e53e3e !important; /* Red border, !important to override focus */
            box-shadow: 0 0 5px rgba(229, 62, 62, 0.5);
        }
        .limit-text {
            color: #e53e3e;
            font-weight: bold;
        }
    `;

    // Create a <style> element and append it to the <head>
    const styleSheet = document.createElement("style");
    styleSheet.textContent = cssStyles;
    document.head.appendChild(styleSheet);


    // --- Part 2: Create all HTML elements ---
    const MAX_CHARS = 150;

    // Create the main container
    const container = document.createElement('div');
    container.className = 'container';

    // Create the heading
    const heading = document.createElement('h2');
    heading.textContent = 'Leave a Message';

    // Create the textarea
    const textarea = document.createElement('textarea');
    textarea.id = 'dynamic-textarea';
    textarea.placeholder = 'Type your message here...';
    // The maxlength attribute is the native way to prevent further input
    textarea.maxLength = MAX_CHARS;

    // Create the counter display
    const counterDisplay = document.createElement('div');
    counterDisplay.className = 'counter-display';

    const currentCountSpan = document.createElement('span');
    currentCountSpan.id = 'current-count';
    currentCountSpan.textContent = '0';

    const separator = document.createTextNode(` / ${MAX_CHARS}`);

    // --- Part 3: Assemble the elements and add to the page ---
    counterDisplay.appendChild(currentCountSpan);
    counterDisplay.appendChild(separator);

    container.appendChild(heading);
    container.appendChild(textarea);
    container.appendChild(counterDisplay);

    // Finally, append the fully assembled container to the document's body
    document.body.appendChild(container);


    // --- Part 4: Add the event listener for dynamic updates ---
    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;

        // Update the character count display
        currentCountSpan.textContent = currentLength;

        // Check if the limit has been reached and toggle CSS classes
        if (currentLength >= MAX_CHARS) {
            textarea.classList.add('limit-reached');
            counterDisplay.classList.add('limit-text');
        } else {
            textarea.classList.remove('limit-reached');
            counterDisplay.classList.remove('limit-text');
        }
    });
});