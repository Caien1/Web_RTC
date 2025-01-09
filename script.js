let self = document.getElementById("self");
let peer = document.getElementById("peer");
const camera = document.getElementById("camera");
const selfStream = document.getElementById("self_stream");
const cameraOn = false;
const contraints = {
    video: true,
    audio:true
}

function test(){
    //peer.innerHTML = "hello";
   // self.innerHTML ="you"
    camera.innerHTML="Start"
}

camera.addEventListener("click",function(){
    userMedia();
})

async function userMedia(){
  try{
    const stream = await navigator.mediaDevices.getUserMedia(contraints)
    selfStream.srcObject= stream

  }
  catch(e){
    console.error("Something went wrong", e )

  }
    console.log("hello")
}