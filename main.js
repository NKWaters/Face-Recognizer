classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KS5QyAChK/model.json', modelLoaded);

function modelLoaded() {
    console.log("model Loaded");
}