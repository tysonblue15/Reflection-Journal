const description = document.getElementById('description');
const emotion = document.getElementById('emotion');
const rating = document.getElementById('rating');
const currentDate = document.getElementById('currentDate');

const rateLabel = document.getElementById('currentRate');

const submit = document.getElementById('submitButton');
const logLibrary = document.getElementById('libraryButton');
const clear = document.getElementById('clearButton');

//Needs to be saved
const descriptionCollection = [];
let emotionCollection = [];
const ratingCollection = [];
const currentDateCollection = [];
const dataCollection = [];

let emotionMap = {
    'Happy': 0,
    'Sad': 0,
    'Angry': 0,
    'Anxious': 0,
    'Peaceful': 0,
    'Lazy': 0
};

if(submit){
    submit.addEventListener('click', () => {
        if(descriptionCollection.length >= 10){
            descriptionCollection.pop();
        }
        descriptionCollection.unshift(description.value)

        if(emotionCollection.length >= 10){
            emotionCollection.pop();
        }
        emotionCollection.unshift(emotion.value);

        emotionMap[emotionCollection[0]]++;


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
            localStorage.setItem("logCount", 1);

            SetUp();
        }
        else{
            let holderCount = localStorage.getItem("logCount");
            if(holderCount < 10)
                holderCount =  parseInt(holderCount) + 1;
            localStorage.setItem("logCount", holderCount);

            ObjectMover();
        }

        localStorage.setItem("obj1", JSON.stringify(newObj));

        /*for (let i = 2; i <= 10; i++) {
            let holderObj = JSON.parse(localStorage.getItem("obj" + i));
            console.log("\n" + i + ": " + JSON.stringify(holderObj['emo']));
        }*/

        location.replace('/Pages/library.html')
    })
}

function SetUp() {
    console.log("Set Up\n");
    for (let i = 1; i < 11; i++) {
        let createdObj = {
            des: "No data.",
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

if(rating) {
    rating.addEventListener('mousemove', () => {
        rateLabel.textContent = rating.value;
    })
}

if(logLibrary){
    logLibrary.addEventListener('click', () => {
        if(localStorage.length <= 0){
            SetUp();   
            localStorage.setItem("logCount", 0);
        }
        location.replace('/Pages/library.html');
    })
}

if(clear) {
    clear.addEventListener('click', () => {
        emotionCollection = [];
        emotionMap = {
            'Happy': 0,
            'Sad': 0,
            'Angry': 0,
            'Anxious': 0,
            'Peaceful': 0,
            'Lazy': 0
        };
        localStorage.clear();
        //localStorage.setItem("logCount", 0);
    })
}