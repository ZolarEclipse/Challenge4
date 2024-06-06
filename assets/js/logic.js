const themeswitcher = document.querySelector('#theme-switcher')
const container = document.querySelector('.container');
let mode = 'light'

themeswitcher.addEventListener('click', function() {
//Switches between light and dark mode
if (mode === 'light') {
    mode = 'dark';
container.setAttribute('class', 'dark');
} else {mode = 'light';
container.setAttribute('class', 'light');}
});