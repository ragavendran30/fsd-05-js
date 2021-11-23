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
        //get file path
        let filePath = video.getAttribute('src');


        //download the file in browser
        console.log('filePath');
    }
    function swap(){
        //requirement on select box change,update video path of the video palyer based on selected option

        //get select value
        let targetPath = this.value;
        cTime = video.currentTime

        //change the file value of the attribute
        video.setAttribute('src', targetPath);

        //change current time
        video.currentTime = cTime;

        //play the vdeo
        play();
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
    swapBtn.addEventListener('change', swap);
    fullScreenBtn.addEventListener('click', fullScreen);
    
    
    
    
    
    