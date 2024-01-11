const newLog = document.getElementById('logButton');

newLog.addEventListener('click', () => {
    location.replace('/index.html')
})

function updateText(){
    for (let i = 1; i <= 1; i++) {
        let holderObj = JSON.parse(localStorage.getItem("obj" + i));
        document.getElementById('log'+i+'Description').innerText = JSON.stringify(holderObj['des']); //Use only holderObj['des'] to remove ""
    }    
}