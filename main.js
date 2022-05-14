Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:95
});
var cam =document.getElementById('camera');
Webcam.attach('#camera');
function take_prtsc(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="picture" src="'+data_uri+'">';  
    });
}