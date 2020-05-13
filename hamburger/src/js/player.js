var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
const playerContainer = $(".player");

let eventsInit = () => {
  $(".player__start").on('click', (e) => {
    e.preventDefault();

    const btn = $(e.currentTarget);

    if (playerContainer.hasClass('paused')) {
      player.pauseVideo();
      let curVol = player.getVolume();
      $(".player__volume-button").css({
        left: `${curVol}%`
      })
    } else {
      player.playVideo();
      let curVol = player.getVolume();
      $(".player__volume-button").css({
        left: `${curVol}%`
      })
    }    
  })

  $(".player__splash").on('click', (e) => {
    e.preventDefault();

    const btn = $(e.currentTarget);

    if (playerContainer.hasClass('paused')) {
      player.pauseVideo();
      let curVol = player.getVolume();
      $(".player__volume-button").css({
        left: `${curVol}%`
      })
    } else {
      player.playVideo();
      let curVol = player.getVolume();
      $(".player__volume-button").css({
        left: `${curVol}%`
      })
    }
  })

  $(".player__playback").on('click', (e) => {
    const bar = $(e.currentTarget);
    const clickedPos = e.originalEvent.layerX;
    const barPercent = (clickedPos / bar.width()) * 100;
    const playerPosSec = (player.getDuration() / 100) * barPercent;
    
    $(".player__playback-button").css({
      left: `${barPercent}%`
    })

    player.seekTo(playerPosSec);
  });

  $(".player__playback").on('click', (e) => {
    player.playVideo();
  });

  // ШКАЛА ГРОМКОСТИ ВИДЕО
  $(".player__volume").on('click', (e) => {
    const vol = $(e.currentTarget);
    const clickedVol = e.originalEvent.layerX;
    const volPercent = (clickedVol / vol.width()) * 100;

    player.setVolume(volPercent)

    $(".player__volume-button").css({
      left: `${volPercent}%`
    })

  });

  // ВКЛЮЧЕНИЕ ИЛИ ОТКЛЮЧЕНИЕ ГРОМКОСТИ ВИДЕО
  $(".player__void-button").on('click', (e) => {
    if (player.isMuted()) {
      player.unMute();
      let curVol = player.getVolume();
      $(".player__volume-button").css({
        left: `${curVol}%`
      })
    } else {
      player.mute();
      $(".player__volume-button").css({
        left: `0%`
      })
    }
    
  });

};

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);
  const minutes = addZero(Math.floor(roundTime / 60));
  const seconds = addZero(roundTime - minutes * 60);

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  return `${minutes}:${seconds}`;
}

const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();

  $(".player__duration--estimate").text(formatTime(durationSec));

  if (typeof interval !== 'undefined') {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completePercent = (completedSec / durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completePercent}%`
    })
    $(".player__duration--completed").text(formatTime(completedSec));

  }, 1000)

};


const onPlayerStateChange = event => {
  /*
  -1 (воспроизведение видео не начато)
  0 (воспроизведение видео завершено)
  1 (воспроизведение)
  2 (пауза)
  3 (буферизация)
  5 (видео подают реплики).
  */
  switch(event.data) {
    case 1: 
      playerContainer.addClass('paused');
      playerContainer.addClass('active');
      break; 

    case 2: 
      playerContainer.removeClass('active');
      playerContainer.removeClass('paused');
      break; 
  }
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '100%',
    width: '100%',
    videoId: 'E5DjLa9Z0s4',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      cc_load_policy: 0,
      iv_load_policy: 3
    }

  });
}

eventsInit();

