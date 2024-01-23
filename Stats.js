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
    let ratingCollection = [0,0,0,0,0];
    let mean = 0;

    let i = 1;
    while(i <= localStorage.getItem("logCount")){
        root.style.setProperty('--emotionCount', i); 
        let holderObj = JSON.parse(localStorage.getItem("obj" + i));
        let holderValue = 0;

        if(JSON.stringify(holderObj['emo']) == '"Happy"'){
            holderValue = getComputedStyle(document.documentElement).getPropertyValue('--happy');
            holderValue = parseInt(holderValue) + 1;
            root.style.setProperty('--happy', holderValue); 
        }
        else if(JSON.stringify(holderObj['emo']) == '"Sad"'){
            holderValue = getComputedStyle(document.documentElement).getPropertyValue('--sad');
            holderValue = parseInt(holderValue) + 1;
            root.style.setProperty('--sad', holderValue); 
        }
        else if(JSON.stringify(holderObj['emo']) == '"Angry"'){
            holderValue = getComputedStyle(document.documentElement).getPropertyValue('--angry');
            holderValue = parseInt(holderValue) + 1;
            root.style.setProperty('--angry', holderValue); 
        }
        else if(JSON.stringify(holderObj['emo']) == '"Anxious"'){
            holderValue = getComputedStyle(document.documentElement).getPropertyValue('--anxious');
            holderValue = parseInt(holderValue) + 1;
            root.style.setProperty('--anxious', holderValue); 
        }
        else if(JSON.stringify(holderObj['emo']) == '"Peaceful"'){
            holderValue = getComputedStyle(document.documentElement).getPropertyValue('--peaceful');
            holderValue = parseInt(holderValue) + 1;
            root.style.setProperty('--peaceful', holderValue); 
        }
        else if(JSON.stringify(holderObj['emo']) == '"Lazy"'){
            holderValue = getComputedStyle(document.documentElement).getPropertyValue('--lazy');
            holderValue = parseInt(holderValue) + 1;
            root.style.setProperty('--lazy', holderValue); 
        }

        ratingCollection[holderObj['rat'] - 1]++;
        mean += parseInt(holderObj['rat']);

        i++;
    }

    mean /= localStorage.getItem("logCount"); 
    
    document.getElementById("happyOption").innerText += ": " + getComputedStyle(document.documentElement).getPropertyValue('--happy');
    
    document.getElementById("sadOption").innerText += ": " + getComputedStyle(document.documentElement).getPropertyValue('--sad');
    
    document.getElementById("angryOption").innerText += ": " + getComputedStyle(document.documentElement).getPropertyValue('--angry');
    
    document.getElementById("anxiousOption").innerText += ": " + getComputedStyle(document.documentElement).getPropertyValue('--anxious');
    
    document.getElementById("peacefulOption").innerText += ": " + getComputedStyle(document.documentElement).getPropertyValue('--peaceful');
    
    document.getElementById("lazyOption").innerText += ": " + getComputedStyle(document.documentElement).getPropertyValue('--lazy');  
    
    for(let j = 1; j <= 5; j++){
        document.getElementById("bar"+j).setAttribute("data-amount", ratingCollection[j-1]);
    }
    document.getElementById("meanText") .innerText = "Average Rating: " + mean.toFixed(2);
}