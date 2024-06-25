let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let playinggif = document.getElementById("playinggif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let nowPlaying = document.getElementById("nowPlaying");

let songs = [
    {songname: "Element", filepath: "1.mp3", cover: "cover1.jpeg"},
    {songname: "Money Trees", filepath: "2.mp3", cover: "cover2.jpg"},
    {songname: "Euphoria", filepath: "3.mp3", cover: "cover3.jpg"},
    {songname: "King Kunta", filepath: "4.mp3", cover: "cover4.png"},
    {songname: "All The Stars", filepath: "5.mp3", cover: "cover5.png"}
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].cover;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songname;
});

// audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        makeAllPlays();
        let btn = document.getElementById(`${songIndex}`);
        btn.classList.add('fa-circle-pause');
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        playinggif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        playinggif.style.opacity=0;
        makeAllPlays();
    }
});

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('playbtn')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('playbtn')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(e.target.classList.contains('fa-circle-play')) {
            if(songIndex == parseInt(e.target.id)) {
                audioElement.play();
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                playinggif.style.opacity=1;
            }
            else{
                makeAllPlays();
                songIndex = parseInt(e.target.id);
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                audioElement.src = `${songIndex+1}.mp3`;
                audioElement.currentTime = 0;
                audioElement.play();
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                nowPlaying.innerText = songs[songIndex].songname;
                playinggif.style.opacity=1;
            }
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            playinggif.style.opacity=0;
            makeAllPlays();
        }
    });
});

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex > 4) {
        songIndex = 0;
    }
    else{
        songIndex++;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    nowPlaying.innerText = songs[songIndex].songname;
    playinggif.style.opacity=1;
    makeAllPlays();
    let btn = document.getElementById(`${songIndex}`);
    btn.classList.add('fa-circle-pause');
});

document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex == 0) {
        songIndex = 4;
    }
    else{
        songIndex--;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    nowPlaying.innerText = songs[songIndex].songname;
    playinggif.style.opacity=1;
    makeAllPlays();
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');;
});

const playNext = ()=> {
    if(songIndex > 4) {
        songIndex = 0;
    }
    else{
        songIndex++;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    nowPlaying.innerText = songs[songIndex].songname;
    playinggif.style.opacity=1;
    makeAllPlays();
    let btn = document.getElementById(`${songIndex}`);
    btn.classList.add('fa-circle-pause');
}

myProgressBar.addEventListener('ended', playNext());