//'use strict';
//import 'DPlayer/dist/DPlayer.min.css';
// import DPlayer from 'DPlayer';
  
/*
// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
  video:  {
    width: {
      min: 1280
    },
    height: {
      min: 720
    }
  }
};

// Video element where stream will be placed.
const localVideo = document.querySelector('video');

// Local stream that will be reproduced on the video.
let localStream;

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
*/
const dp = new DPlayer({
  container: document.getElementById('dplayer'),
  video: {
      url: 'demo.m3u8',
      type: 'hls'
  }
});