const description = document.getElementById('description');
const emotion = document.getElementById('emotion');
const rating = document.getElementById('rating');
const currentDate = document.getElementById('currentDate');

const submit = document.getElementById('submitButton');

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
    localStorage.clear();
    //ERROR
    if(localStorage == null){
        SetUp();
    }
    else{
        SetUp();
        //ObjectMover();
    }

    localStorage.setItem("obj1", newObj);
    console.log("1: " + newObj['des']);

    for (let i = 2; i <= 10; i++) {
        let holderObj = JSON.parse(localStorage.getItem("obj" + i));
        console.log("\n" + i + ": " + holderObj['des']);
    }
})

function SetUp() {
    console.log("Set Up\n");
    let objects = [];
    for (let i = 0; i < 10; i++) {
        objects[i] = {
            des: "Test",
            emo: "",
            rat: "",
            dat: ""
        };
        localStorage.setItem("obj" + (i + 1), JSON.stringify(objects[i]));
    }
}

function ObjectMover() {
    let i = 1;
    while(i < 10){
        let currentObj = localStorage.getItem("obj"+i);
        localStorage.setItem("obj"+i+1, currentObj);

        i++;
    }
}