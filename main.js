Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id = "captured_image" src="'+data_uri+'"/>';
  }); }

console.log('ml5 version:', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9cRTc1ScD/model.json',modelLoaded)

function modelLoaded()
{
  console.log('Modelo cargado');

}

function check()
{
  img=document.getElementById('captured_image');
  classifier.clasify(img,gotResult);
}
function gotResult(error,result)
{
    if(errror)
    {
      console.log(error);

    }
    else
    {
      console.log(results)

    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

    }

}











































































