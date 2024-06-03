
let songIndex = 0;
let audioElement = new Audio('song/1.mp3.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let time = document.querySelector('.timestamp');


let song = [
    {
        songName: "heeriye",  filepath: "song/1.mp3.mp3", coverPath: "cover/pexels-bertellifotografia-4558481.jpg", time: "3:19"
    },
    {
        songName: "soulmate",  filepath: "song/2.mp3.mp3", coverPath: "cover/pexels-clive-kim-2523249-4221054.jpg", time: "4:12"
    },
    {
        songName: "tu hai kahan",  filepath: "song/3.mp3.mp3", coverPath: "cover/pexels-josh-hild-1270765-14557814.jpg", time: "3:33"
    },
    {
        songName: "gulabi",  filepath: "song/4.mp3.mp3", coverPath: "cover/pexels-khoa-vo-2347168-4075086.jpg", time: "3:45"
    },
    {
        songName: "guli",  filepath: "song/5.mp3.mp3", coverPath: "cover/pexels-lachlan-ross-7084308.jpg", time: "3:22"
    },
    {
        songName: "kahani",  filepath: "song/6.mp3.mp3", coverPath: "cover/pexels-muffin-1646311.jpg", time: "3:14"
    },
    {
        songName: "maan meri",  filepath: "song/7.mp3.mp3", coverPath: "cover/pexels-vickie-intili-3543371-5323336.jpg", time: "3:53"
    },
    {
        songName: "o mahi",  filepath: "song/8.mp3.mp3", coverPath: "cover/pexels-vlada-karpovich-4448847.jpg", time: "7:41"
    },
    
]

// songItem.forEach((element) => {
//     element.getElementByTagName("img")[0].src = song[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = song[i].songName;

// });

songItem.forEach((ele, i) =>{
    ele.getElementsByTagName('img')[0].src = song[i].coverPath;
    ele.getElementsByClassName('songsName')[0].innerHTML = song[i].songName;
    ele.getElementsByClassName('timestamp')[0].innerHTML = song[i].time;
});

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const MakeAllPlay = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((ele) =>{
        ele.classList.remove('fa-circle-pause');
        ele.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener("click" , (e) =>{
        MakeAllPlay(); 
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex+1}.mp3.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-play');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= 8){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-play');
    

});


document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-play');
    

});












