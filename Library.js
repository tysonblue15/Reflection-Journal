const newLog = document.getElementById('logButton');

newLog.addEventListener('click', () => {
    location.replace('/index.html')
})

function updateText(){
    for (let i = 1; i <= 10; i++) {
        let holderObj = JSON.parse(localStorage.getItem("obj" + i));
        document.getElementById('log'+i+'Description').innerText = i+ ": " + JSON.stringify(holderObj['des']); //Use only holderObj['des'] to remove ""
        if(JSON.stringify(holderObj['des']) == '"No data."'){
            document.getElementById('date'+i).innerText = "No date."; //holderObj['dat']
            document.getElementById('emotion'+i).innerText = "No emotion.";
            document.getElementById('rating'+i).innerText = "No rating.";
        }
        else{
            document.getElementById('date'+i).innerText = holderObj['dat']; //holderObj['dat']
            document.getElementById('emotion'+i).innerText = holderObj['emo'];
            document.getElementById('rating'+i).innerText = holderObj['rat'] + "/10";
        }
    }    
}