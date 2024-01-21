const newLog = document.getElementById('logButton');
const library = document.getElementById('libraryButton');

newLog.addEventListener('click', () => {
    location.replace('/Pages/index.html')
})

library.addEventListener('click', () => {
    location.replace('/Pages/library.html')
})

function change() {
    const root = document.documentElement;
    root.style.setProperty('--happy', emotionMap['Happy']); //Broken
}