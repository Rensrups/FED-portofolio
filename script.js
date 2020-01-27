let initialTheme = true;

function toggleColors() {   
  const root = document.documentElement;

  if(initialTheme) {
    root.style.setProperty('--textcolor', 'white');
    root.style.setProperty('--secondColor', '#171717');
    initialTheme = false;  
  } else {
    root.style.setProperty('--textcolor', 'black');
    root.style.setProperty('--secondColor', '#fafafa');
    initialTheme = true;
  }
}

// https://stackoverflow.com/questions/52908846/toggle-css-root-variables-with-javascript-or-jquery - lulius