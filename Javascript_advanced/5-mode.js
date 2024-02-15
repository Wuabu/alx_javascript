function changeMode(size, weight, transform, background, color) {
    return function () {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    const welcomeParagraph = document.createElement('p');
    welcomeParagraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(welcomeParagraph);
  
    const spookyButton = createModeButton('Spooky', spooky);
    const darkModeButton = createModeButton('Dark mode', darkMode);
    const screamModeButton = createModeButton('Scream mode', screamMode);
  
    document.body.appendChild(spookyButton);
    document.body.appendChild(darkModeButton);
    document.body.appendChild(screamModeButton);
  }
  
  function createModeButton(text, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
  }
  
  document.addEventListener('DOMContentLoaded', main);
  