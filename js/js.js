var video = document.getElementById("myVideo");
//변수 비디오는 도큐먼트에서 id myVideo를 찾는다.
var btn = document.getElementById("myBtn")
//변수 btn은 도큐먼트에서 id myBtn을 찾는다.

function myFunction(){
    //가정법으로 2개의 이벤트를 실행
    if(video.paused){
        video.play();
        btn.innerHTML = "Pause";
    }else{//위 사항과 반대
        video.pause();
        btn.innerHTML = "Play";
    }
}