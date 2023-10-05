var previsao1=" "
var previsao2=" "
Webcam.set({
    width:300,
    height:250,
    imageFormat:"png",
    pngQuality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function takeSnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img src ='"+data_uri+"'id='captured_image'/>"        
    })
}
console.log("a versao carregada do ml5 é",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J2Ip11PDF/model.json',modelLoaded)
function modelLoaded(){
console.log("modelo carregado")
}
function check(){
img=document.getElementById("captured_image")
classifier.classify(img,gotResult)
}
function gotResult(error,results){
if(error)(
    console.error(error)
)
else(
    console.log(results)
    document.getElementById("resultEmotionName").innerHTML=results[0].label
    document.getElementById("updateEmoji").innerHTML=Emoji
    document.getElementById("resultEmotionName2").innerHTML=results[1].label
    document.getElementById("updateEmoji2").innerHTML=Emoji2
    previsao1=results[0].label
    previsao2=results[1].label
    if(results[0].label=="feliz"){
Emoji="&#128522;"
    }
    if(results[0].label=="triste"){
        Emoji="&#128532;"
    }
    if(results[0].label=="irritado"){
        Emoji="&#128548;"
    }
    if(results[1].label=="feliz"){
        Emoji2="&#128522;"
            }
            if(results[1].label=="triste"){
                Emoji2="&#128532;"
            }
            if(results[1].label=="irritado"){
                Emoji2="&#128548;"
            }
)
}
