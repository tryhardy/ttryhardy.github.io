(function () {
  let videoPlayer = document.querySelector("#videoplayer-html");
  const playerCont = $(".videoplayer__container");
  const btnPlay = $(".videoplayer__btn");
  const btnSplash = $(".videoplayer__splash")
  const videoWrapper = $(".videoplayer__wrapper")

  $(".videoplayer__void-button").on('click', () => {
    if (videoPlayer.muted) {
      videoPlayer.muted = false;
      console.log(videoPlayer.muted)
    } else {
      videoPlayer.muted = true;
      console.log(videoPlayer.muted)
    }
  })

  videoWrapper.on('click', (e) => {
      if (playerCont.hasClass("paused")) {
        videoPlayer.pause();
        playerCont.removeClass("paused");
      } else {
        videoPlayer.play();
        playerCont.addClass("paused");
      }

      let curVol = videoPlayer.volume;
      $(".videoplayer__volume-button").css({
        left: `${curVol}` * 100 + '%'
      })
  })

  btnSplash.on('click', (e) => {
    if (playerCont.hasClass("paused")) {
      videoPlayer.pause();
      playerCont.removeClass("paused");
    } else {
      videoPlayer.play();
      playerCont.addClass("paused");
    }

    let curVol = videoPlayer.volume;
    $(".videoplayer__volume-button").css({
        left: `${curVol}` * 100 + '%'
    })
  })

  btnPlay.on('click', (e) => {
    if (playerCont.hasClass("paused")) {
        videoPlayer.pause();
        playerCont.removeClass("paused");
      } else {
        videoPlayer.play();
        playerCont.addClass("paused");
      }

      let curVol = videoPlayer.volume;
      $(".videoplayer__volume-button").css({
          left: `${curVol}` * 100 + '%'
      })
  })

  $(".videoplayer__playback").on('click', (e) => {
    const bar = $(e.currentTarget);
    const clickedPos = e.originalEvent.layerX;
    const barPercent = Math.round((clickedPos / bar.width()) * 100);
    const playerPosSec = Math.round((videoPlayer.duration / 100) * barPercent);
    
    $(".videoplayer__playback-button").css({
      left: `${barPercent}%`
    })

    videoPlayer.currentTime = playerPosSec;
  });

  $(".videoplayer__playback").on('click', (e) => {
    if (playerCont.hasClass("paused")) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  });

  $(".videoplayer__volume").on('click', (e) => {
    const vol = $(e.currentTarget);
    const clickedVol = e.originalEvent.layerX;
    const volPercent = (clickedVol / vol.width());

    videoPlayer.volume = volPercent;


    $(".videoplayer__volume-button").css({
      left: `${volPercent}` * 100 + '%'
    })

  });


  const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);
    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);
  
    function addZero(num) {
      return num < 10 ? `0${num}` : num;
    }
  
    return `${minutes}:${seconds}`;
  }

  videoPlayer.onplay = () => {
    let interval;
    const durationSec = videoPlayer.duration;

    if (typeof interval !== 'undefined') {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      const completedSec = Math.round(videoPlayer.currentTime);
      const completePercent = (completedSec / durationSec) * 100;
  
      $(".videoplayer__playback-button").css({
        left: `${completePercent}%`
      })
      $(".videoplayer__duration--completed").text(formatTime(completedSec));
  
    }, 1000)

    if (videoPlayer.ended) {
      playerCont.removeClass("paused");
    }
  }

  videoPlayer.onended = () => {
    playerCont.removeClass("paused");
  }


}) ()
