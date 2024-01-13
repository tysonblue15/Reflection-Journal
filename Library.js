const newLog = document.getElementById('logButton');

newLog.addEventListener('click', () => {
    location.replace('/index.html')
})

function updateText(){
    for (let i = 1; i <= 1; i++) {
        let holderObj = JSON.parse(localStorage.getItem("obj" + i));
        document.getElementById('log'+i+'Description').innerText = "1: " + JSON.stringify(holderObj['des']); //Use only holderObj['des'] to remove ""
        document.getElementById('date'+i).innerText = "Here"; //holderObj['dat']
        document.getElementById('emotion'+i).innerText = holderObj['emo'];
        document.getElementById('rating'+i).innerText = holderObj['rat'] + "/10";
    }    
}