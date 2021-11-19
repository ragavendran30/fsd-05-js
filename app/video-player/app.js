let playBtn = document.getElementById('play'),
    pauseBtn = document.getElementById('pause'),
    f10Btn = document.getElementById('f10'),
    b10Btn = document.getElementById('b10'),
    volumeBtn = document.getElementById('volume'),
    volumeInputEle = document.getElementById('volume-slider'),
    muteBtn = document.getElementById('mute'),
    unmuteBtn = document.getElementById('unmute'),
    downloadBtn = document.getElementById('download'),
    swapBtn = document.getElementById('swap'),
    fullScreenBtn = document.getElementById('full-screen'),
    video = document.getElementById('main-video');


    function play(){
        console.log('play the video');
        video.play();
    }
    function pause(){
        console.log('pause the video');
        video.pause();
    }
    function f10(){
        //get current time
        let cTime = video.currentTime;
        //add 2 seconds
        cTime = cTime + 2;
        //play from the new time
        video.currentTime = cTime;
    }
    function b10(){
        console.log('backward 10 seconds');
         //get current time
         let cTime = video.currentTime;
         //substract 2 seconds
         cTime = cTime - 2;
         //play from the new time
         video.currentTime = cTime;
    }
    function volumeUpdate(){
        //get slider value
        let volumeInput = volumeInputEle.value;
        console.log(volumeInput);


        //0->0; 50->0.5; 100->1;
        volumeInput = volumeInput/100; 
        console.log(volumeInput);


        //apply to the video
        video.volume = volumeInput;
    }
    function mute(){
        console.log('mute audio');
        video.muted = true;
    }
    function unmute(){
        console.log('unmute');
        video.muted = false;

    }    
    function download(){
        console.log('download');
    }
    function swap(){
        console.log('swap');
        
    }
    function fullScreen(){
        console.log('fullScreen');
        
    }
    
    playBtn.addEventListener('click', play);
    pauseBtn.addEventListener('click', pause);
    f10Btn.addEventListener('click', f10);
    b10Btn.addEventListener('click', b10);
    volumeBtn.addEventListener('click', volumeUpdate);
    muteBtn.addEventListener('click', mute);
    unmuteBtn.addEventListener('click', unmute);
    downloadBtn.addEventListener('click', download);
    swapBtn.addEventListener('click', swap);
    fullScreenBtn.addEventListener('click', fullScreen);
    
    
    
    
    
    