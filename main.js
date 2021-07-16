Webcam.attach('#camera')
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
function ts(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfies">'
    })
}
console.log('ml5version',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jtEJyHMGl/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded")
}
function check(){
    img=document.getElementById("selfies");
    classifier.classify(img,gotResults)
}
function gotResults(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results);
    document.getElementById("ron").innerHTML=results[0].label
    document.getElementById("roa").innerHTML=results[0].confidence.toFixed(3)
}
}