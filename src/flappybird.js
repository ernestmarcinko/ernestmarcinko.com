import FlappyBird from "flappybird-ts";

function flappy() {
    new FlappyBird('game');
}

if (document.readyState === "complete" || document.readyState === "loaded"  || document.readyState === "interactive") {
    // document is already ready to go
    flappy();
} else {
    window.addEventListener('DOMContentLoaded', flappy);
}