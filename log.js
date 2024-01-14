const description = document.getElementById('description');
const emotion = document.getElementById('emotion');
const rating = document.getElementById('rating');
const currentDate = document.getElementById('currentDate');

const rateSlider = document.getElementById('rating');
const rateLabel = document.getElementById('currentRate');

const submit = document.getElementById('submitButton');
const clear = document.getElementById('clearButton');

//Needs to be saved
const descriptionCollection = [];
const emotionCollection = [];
const ratingCollection = [];
const currentDateCollection = [];
const dataCollection = [];


submit.addEventListener('click', () => {
    if(descriptionCollection.length >= 10){
        descriptionCollection.pop();
    }
    descriptionCollection.unshift(description.value)
    
    
    let emotionMap ={};

    emotionMap['Happy'] = 0;
    emotionMap['Sad'] = 0;
    emotionMap['Angry'] = 0;
    emotionMap['Anxious'] = 0;
    emotionMap['Fearful'] = 0;
    emotionMap['Peaceful'] = 0;
    emotionMap['Lazy'] = 0;

    if(emotionCollection.length >= 10){
        emotionCollection.pop();
    }
    emotionCollection.unshift(emotion.value);

    emotionCollection.forEach(element => {
        emotionMap[element]++;
    });


    if(ratingCollection.length >= 10){
        ratingCollection.pop();
    }
    ratingCollection.unshift(rating.value);

    let ratingTotal = 0;
    ratingCollection.forEach(element => {
        ratingTotal += element;
    });
    const ratingMean = ratingTotal / ratingCollection.length;


    if(currentDateCollection.length >= 10){
        currentDateCollection.pop();
    }
    currentDateCollection.unshift(currentDate.value)

    let newObj = {
        des: description.value ,
        emo: emotion.value ,
        rat: rating.value ,
        dat: currentDate.value
    };

    if(localStorage.length <= 0){
        SetUp();
    }
    else{
        ObjectMover();
    }

    localStorage.setItem("obj1", JSON.stringify(newObj));
    console.log('1: "' + newObj['des'] + '"');

    for (let i = 2; i <= 10; i++) {
        let holderObj = JSON.parse(localStorage.getItem("obj" + i));
        console.log("\n" + i + ": " + JSON.stringify(holderObj['des']));
    }

    location.replace('/library.html')
})

function SetUp() {
    console.log("Set Up\n");
    for (let i = 1; i < 11; i++) {
        let createdObj = {
            des: "" + i,
            emo: "",
            rat: "",
            dat: ""
        };
        localStorage.setItem("obj" + (i), JSON.stringify(createdObj));
    }
}


function ObjectMover() {
    console.log("Object Mover\n");
    let i = 10;
    while(i > 1){
        let currentObj = JSON.parse(localStorage.getItem("obj" + (i - 1))); 
        localStorage.setItem("obj" + (i), JSON.stringify(currentObj));
        
        i--;
    }
}

rateSlider.addEventListener('mousemove', () => {
    rateLabel.textContent = rateSlider.value;
})

clear.addEventListener('click', () => {
    localStorage.clear();
})