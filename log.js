const description = document.getElementById('description');
const emotion = document.getElementById('emotion');
const rating = document.getElementById('rating');
const currentDate = document.getElementById('currentDate');

//Needs to be saved
const descriptionCollection = [];
const emotionCollection = [];
const ratingCollection = [];
const currentDateCollection = [];

submitButton.addEventListener('click', () => {
    if(descriptionCollection.length >= 10){
        descriptionCollection.pop();
    }
    descriptionCollection.unshift(description.textContent)
    
    
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
    emotionCollection.unshift(emotion.textContent);

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
})