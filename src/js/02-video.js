import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe)

player.on('timeupdate', throttle(onPlay, 1000));

const CURRENT_TIME_KEY = 'videoplayer-current-time';


function onPlay(data) {
    const currentTime = data.seconds;
    

    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(currentTime));
}

const savedTimeFromStorage = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY));

if (savedTimeFromStorage) {
  player.setCurrentTime(savedTimeFromStorage);
}
