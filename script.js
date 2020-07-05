//DOM ELEMENTS
var btnPlay = document.querySelector("#btn-play");
var btnPause = document.querySelector("#btn-pause");
var playedTime = document.querySelector("#current-time");
var songDuration = document.querySelector("#song-duration");
var poster = document.querySelector("#poster");
var songTitle = document.querySelector("#song-title")
var songAlbum = document.querySelector("#song-album");
var songAuthor = document.querySelector("#song-author");
var bar = document.querySelector("#bar");
var progressBar = document.querySelector("#progress-bar");
var volumeBar = document.querySelector("#volume-bar");
var btnNext = document.querySelector("#btn-next");
var btnPrev = document.querySelector("#btn-prev");
var albumCover = document.querySelector("#ccc");
var wholeBar = document.querySelector("#wholeBar");
var aboutSong = document.getElementsByClassName("about-song")[0];
var shouldUpdate = true;


//playlist
var song_links = ['songs/Alan Walker - Fade [NCS Release].mp3', 
                'songs/Cartoon - On & On (feat. Daniel Levi) [NCS Release].mp3',
                'songs/DEAF KEV - Invincible [NCS Release].mp3',
                'songs/Different Heaven & Sian Area - Feel Like Horrible.mp3',
                'songs/Spektrem - Shine [NCS Release].mp3',
                'songs/Wanden & Slashtaq - Better Off [NCS Release].mp3',
                'songs/Jim Yosef - Fall With Me [NCS Release].mp3',
                'songs/Jim Yosef - Firefly [NCS Release].mp3',
                'songs/Dark Heart - Crash Test Dummy [NCS Release].mp3',
                'songs/Brook Xiao - Fire (ft. Rachel Horter) [NCS Release].mp3'];

var song_titles = ['Fade', 'On & On', 'Invincible', 'Feel Like Horible', 'Shine', 'Better Off', 'Fall With Me', 'Firefly', 'Crash Test Dummy', 'Fire'];

var song_authors = ['Alan Walker', 'Cartoon', 'DEAF KEV', 'Different Heaven & Sian Area', 'Spektrem', 'Wanden & Slashtaq', 'Jim Yosef', 'Jim Yosef', 'Dark Heart', 'Brook Xiao'];

var song_albums = ['Unknown Album', 'Unknown Album', 'Unknown Album', 'Unknown Album', 'Unknown Album', 'Unknown Album', 'Unknown Album', 'Unknown Album', 'Unknown Album', 'Unknown Album'];

var song_covers = ['covers/fade.jpg', 'covers/cartoon.jpg', 'covers/invincible.jpg','covers/Feel Like Horrible.jpg', 'covers/shine.jpg', 'covers/better off.jpg', 'covers/Fall with me.jpg', 'covers/firefly.jpg', 'covers/dark heart.jpg', 'covers/fire.jpg'];

var album_covers = ['albumCovers/Poster1.jpg', 'albumCovers/Poster2.jpg', 'albumCovers/Poster3.jpg', 'albumCovers/Poster1.jpg', 'albumCovers/Poster2.jpg', 'albumCovers/Poster3.jpg', 'albumCovers/Poster1.jpg', 'albumCovers/Poster2.jpg', 'albumCovers/Poster3.jpg', 'albumCovers/Poster1.jpg', 'albumCovers/Poster2.jpg', 'albumCovers/Poster3.jpg'];

var song_itunes = ['https://www.apple.com/itunes/', 'https://www.apple.com/itunes/', 'https://www.apple.com/itunes/', 'https://www.apple.com/itunes/', 'https://www.apple.com/itunes/', 'https://www.apple.com/itunes/', 'https://www.apple.com/itunes/', 'https://www.apple.com/itunes/', 'https://www.apple.com/itunes/', 'https://www.apple.com/itunes/'];

var song_spotifys = ['https://www.spotify.com', 'https://www.spotify.com', 'https://www.spotify.com', 'https://www.spotify.com', 'https://www.spotify.com', 'https://www.spotify.com', 'https://www.spotify.com', 'https://www.spotify.com', 'https://www.spotify.com', 'https://www.spotify.com'];

var song_amazons = ['https://music.amazon.com/home', 'https://music.amazon.com/home', 'https://music.amazon.com/home', 'https://music.amazon.com/home', 'https://music.amazon.com/home', 'https://music.amazon.com/home', 'https://music.amazon.com/home', 'https://music.amazon.com/home', 'https://music.amazon.com/home', 'https://music.amazon.com/home'];

var about_song = ['Look for the iTunes and Amazon shopping carts above to buy the music.',
                  'I hope you like the layout and feel of player.',
                  'If you have any other request feel free to message me.',
                  'I didnt want to break initial look and layout of player so i made it like this.',
                  'Look for the iTunes and Amazon shopping carts above to buy the music.',
                  'Look for the iTunes and Amazon shopping carts above to buy the music.',
                  'Look for the iTunes and Amazon shopping carts above to buy the music.',
                  'Look for the iTunes and Amazon shopping carts above to buy the music.',
                  'Look for the iTunes and Amazon shopping carts above to buy the music.',
                  'Look for the iTunes and Amazon shopping carts above to buy the music.'];

var song_genres = ["Latin R&B;/Pop/Rock", "Genre 2", "Genre 3", "Latin R&B;/Pop/Rock", "Latin R&B;/Pop/Rock"
, "Latin R&B;/Pop/Rock", "Latin R&B;/Pop/Rock", "Latin R&B;/Pop/Rock", "Latin R&B;/Pop/Rock", "Latin R&B;/Pop/Rock"];

var final_message = ["Enjoy", "Have a nice day!", "See you again", "Stay positive", "Enjoy",
"Enjoy", "Enjoy", "Enjoy", "Enjoy", "Enjoy"];

//important variables
var currentPlaying = 0;
var song = new Audio();
song.onended = function() {
    next();
};


/*
//setting up first music
songTitle.innerHTML = "Unknown Title";
songAlbum.innerHTML = "Unknown Album";
songAuthor.innerHTML = "Unknown Author";
var song = new Audio();
var playlist = ['Different Heaven & Sian Area - Feel Like Horrible.mp3', 'Different Heaven & Sian Area - Feel Like Horrible.mp3', 'Different Heaven & Sian Area - Feel Like Horrible.mp3', 'Different Heaven & Sian Area - Feel Like Horrible.mp3', 'Different Heaven & Sian Area - Feel Like Horrible.mp3', 'Different Heaven & Sian Area - Feel Like Horrible.mp3'];
var currentPlaying = 0;
song.src = playlist[currentPlaying];
var songName = playlist[currentPlaying];

    poster.src = songName.split(".")[0]+'.jpg';

    if(typeof(poster.src) != "string")
    poster.src = "Poster1.jpg";

songName = songName.split("-");
console.log(songName);
songTitle.innerHTML = songName[1].split(".")[0];
songAuthor.innerHTML = songName[0];

*/


//adding functions to buttons
btnPlay.addEventListener("click", playSong);
btnPause.addEventListener("click", stopSong);
song.addEventListener('timeupdate',statusBar);
bar.addEventListener('change', fastForward);
wholeBar.addEventListener('mousedown', onFastForward);
volumeBar.addEventListener('change', changeVolume);
btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);
document.addEventListener("mouseup", afterFastForward);

//generic functions

function display(){
    song.src = song_links[currentPlaying];
    songTitle.innerHTML = song_titles[currentPlaying];
    songAuthor.innerHTML = song_authors[currentPlaying];
    poster.src = song_covers[currentPlaying];
    albumCover.style.backgroundImage = "url("+album_covers[currentPlaying]+")";
    songAlbum.innerHTML = "Unknown Album";
    if(song_albums[currentPlaying] != '') songAlbum.innerHTML = song_albums[currentPlaying];

        document.getElementsByClassName("b2")[0].classList.remove("hidden");
        document.getElementsByClassName("b2")[1].classList.remove("hidden");
        document.getElementsByClassName("b2")[2].classList.remove("hidden");

        if(song_itunes[currentPlaying] == "") document.getElementsByClassName("b2")[0].classList.add("hidden");
        if(song_spotifys[currentPlaying] == "") document.getElementsByClassName("b2")[1].classList.add("hidden");
        if(song_amazons[currentPlaying] == "") document.getElementsByClassName("b2")[2].classList.add("hidden");

    showSongInfo();
    
}

function showSongInfo() {
    aboutSong.innerHTML = `
    <div>
    <h2>Genre:</h2>
    <p>${song_genres[currentPlaying]}</p>
</div>
    <p>${about_song[currentPlaying]}</p>              
    <p>${final_message[currentPlaying]}</p>
    `
}


function playSong() {
    song.play();
    btnPlay.classList.add("hidden");
    btnPause.classList.remove("hidden");
    var items = document.getElementsByClassName("isPlayed");
    for(var i = 0; i < items.length; i++){
        items[i].classList.add("hidden");
    }
    items[currentPlaying].classList.remove("hidden");
    //currentTime.innerHTML= "0:" + Math.floor(playlist[currentPlaying].currentTime);
}

function stopSong(){
    song.pause();
    btnPlay.classList.remove("hidden");
    btnPause.classList.add("hidden");
    //song.currentTime = 119;
}

function changeVolume() {
    song.volume = volumeBar.value / 100;
}

function statusBar(){
    songDuration.innerHTML = timeTransform(song.duration);
    bar.max = song.duration;
    var tm = song.currentTime;
    playedTime.innerHTML = timeTransform(tm);
    //var position = song.currentTime / song.duration;   
    progressBar.style.width = song.currentTime / song.duration * 100 +'%';
   // shouldUpdate = false;
    if(shouldUpdate) bar.value = song.currentTime - 1.2;
}

function fastForward(){
    song.currentTime = bar.value;
}
function onFastForward(){
    shouldUpdate = false;
}
function afterFastForward(){
    shouldUpdate = true;
}

function next() {
    //song.src = song_links[1];
    currentPlaying++;
    if(currentPlaying == song_links.length) currentPlaying = 0;
    display();
    playSong();
}

function selected(n) {
    //song.src = song_links[1];
    currentPlaying = n;
    display();
    playSong();
}

function prev() {
    //song.src = song_links[1];
    currentPlaying--;
    if(currentPlaying <= 0) currentPlaying = song_links.length-1;
    display();
    playSong();
}


function timeTransform(tm) {
    tm = Math.floor(tm)
    var mn = 0;
    str= "";
    if(tm >= 60){
        mn = Math.floor(tm / 60);
        tm %= 60;
        
        str+=mn + ":";
    }
    if(tm < 60 && mn == 0) str+="0:";
    if(tm < 10) str+="0";
    str+=tm;
    return(str);
}
function createPlaylist(){
    for(var i = 0; i < song_links.length; i++){
        var item = document.createElement("DIV");
        item.classList.add("item");

        var song_title = song_titles[i];
        var song_author = song_authors[i];
        var song_album = song_albums[i];
        var song_duration = "0:00";
        item.innerHTML = `<div class="btns">
        <svg class="isPlayed hidden" viewBox="0 0 36 36" fill="rgb(51, 55, 61)" class="Play__Icon-dd1zf7-1 cBfHqm"><path d="M12.233 7.68l15.75 10.124c.69.443.69 1.45 0 1.892L12.233 29.82a1.125 1.125 0 0 1-1.733-.947V8.627c0-.89.985-1.428 1.733-.947z"></path></svg>

        </div>
        <div class="song-info-length" onclick="selected('${i}')">
        <div class="song-info">
            <div class="player-title">${song_title}</div>
            <div class="playlist-name">${song_author}</div>
        </div>
      
        </div>`;
        
        document.getElementsByClassName("playlist")[0].appendChild(item)
        
    }
    display();
}

function openitune(){
    parent.open(song_itunes[currentPlaying]);
}
function openspotify(){
    parent.open(song_spotifys[currentPlaying]);
}
function openamazon(){
    parent.open(song_amazons[currentPlaying]);
}
function showHide() {
    document.getElementsByClassName("playlist")[0].classList.toggle("hidden");
    document.getElementsByClassName("about-song")[0].classList.toggle("hidden");
    document.getElementsByClassName("playlist-btn")[0].classList.toggle("hidden");
    document.getElementsByClassName("info-btn")[0].classList.toggle("hidden");

}

createPlaylist();
