// Function to change the mode of the page
function changeMode(size, weight, transform, background, color) {
    return function () {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  // Function to set up the main functionality
  function main() {
    // Set up different modes using the changeMode function
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    // Add a paragraph to the body
    const welcomeParagraph = document.createElement('p');
    welcomeParagraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(welcomeParagraph);
  
    // Add buttons to change the mode
    const spookyButton = createModeButton('Spooky', spooky);
    const darkModeButton = createModeButton('Dark mode', darkMode);
    const screamModeButton = createModeButton('Scream mode', screamMode);
  
    // Append buttons to the body
    document.body.appendChild(spookyButton);
    document.body.appendChild(darkModeButton);
    document.body.appendChild(screamModeButton);
  }
  
  // Function to create a mode change button
  function createModeButton(text, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
  }
  
  // Call the main function when the page has loaded
  document.addEventListener('DOMContentLoaded', main);
  