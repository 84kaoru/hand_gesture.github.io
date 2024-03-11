const video = document.getElementById("input");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const config = {
    locateFile: file =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
};

const hands = new Hands(config);

const camera = new Camera(video, {
    onFrame: async () =>{
        await hands.send({image: video});
    },
    width: 600,
    height: 400
});

hands.setOptions({
    maxNumHands: 2,
    modeComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});

document.getElementById("start")
.addEventListener("click", () => camera.start());

document.getElementById("stop")
.addEventListener("click", () => camera.stop());