let noClickCount = 0;
const noMessages = [
    "Are you sure? 😢",
    "Really? 💔",
    "Think again... 🥺",
    "Pleaseeee? 🥰",
    "Last chance! 😳",
    "You have to say YES! 😤"
];

const gifArray = ["cute2.gif", "cute3.gif", "cute4.gif"];

function rejectProposal() {
    noClickCount++;
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const gif = document.getElementById("gif");

    if (noClickCount < noMessages.length) {
        noBtn.innerText = noMessages[noClickCount];
    } else {
        noBtn.innerText = "Fine, you win... 😭";
        yesBtn.style.transform = "scale(1.5)";
    }

    if (noClickCount < gifArray.length) {
        gif.src = gifArray[noClickCount];
    }
}

function acceptProposal() {
    document.getElementById("yesBtn").innerText = "Yay! 💖";
    startConfetti();
}

function startConfetti() {
    const confettiCanvas = document.getElementById("confetti");
    const confettiCtx = confettiCanvas.getContext("2d");

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    let confetti = [];
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            r: Math.random() * 10 + 5,
            d: Math.random() * 2 + 1
        });
    }

    function drawConfetti() {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confetti.forEach((c, i) => {
            confettiCtx.beginPath();
            confettiCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
            confettiCtx.fillStyle = hsl(${Math.random() * 360}, 100%, 70%);
            confettiCtx.fill();
            confettiCtx.closePath();

            c.y += c.d;
            if (c.y > confettiCanvas.height) {
                confetti[i] = { x: Math.random() * confettiCanvas.width, y: -10, r: c.r, d: c.d };
            }
        });

        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}