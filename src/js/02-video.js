import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe)

player.on('timeupdate', throttle(onPlay, 1000));

let isSettingTime = false;

function onPlay(data) {
    const currentTime = data.seconds;
    

    if (!isSettingTime) {
        localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));

    }
}

const savedTimeFromStorage = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

if (savedTimeFromStorage !== null) {
  isSettingTime = true;
  player.setCurrentTime(savedTimeFromStorage);
  isSettingTime = false;
}















// const storage = JSON.parse(localStorage.getItem(KEY_TIME)) ?? [];



// const currentTimeHold = {
//     "videoplayer-current-time" : data,
// }

// setItem - додати значення
// getItem - отримати значення
// removeItem - видалити значення
// clear - очистити все 
// localStorage.setItem(
//   'назва ключа' /**, JSON.stringify(значення таймера відео) */
// );

// localStorage.removeItem('назва ключа')
// localStorage.clear()

