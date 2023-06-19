function startClassification()
{
    navigator.mediaBevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_qU1uHFH8/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);S
}