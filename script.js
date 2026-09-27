function showSurprise() {
    createConfetti();
    document.body.innerHTML = `
        <div class="surprise">

            <audio src="music.mp3"  loop></audio>

            <h1>🎉 Surprise! 🎉</h1>

            <img src="photo.jpg" alt="Special Photo">

            <h2>Happy Birthday Wingless Angel 💌💫</h2>

            <p>
                You deserve all the happiness in the world. 💌✨
                Keep smiling, Wingless Angel. ❤️💫
            </p>

            <p>Stay happy and keep shining always! 🌸💖</p>

           <button onclick="alert('Neenga epavume enaku spl person dhaan... 💖 Boom Boom Boomer 😂😂✨')"> 💌 For You 💌 </button>


            <p class="signature">With love, 💌✨</p>
            <p class="made">✨ Made with 💖 ✨</p>

            <button onclick="location.reload()">🏠 Back to Start</button>

        </div>
    `;

    const music = document.querySelector("audio");
music.play();


     createConfetti();

     function showMessage() {
     alert("Neenga epavume enaku spl person dhaan... 💖 Boom Boom Boomer 😂😂✨");
}
}

setInterval(() => {
    const heart = document.createElement("div");

    heart.innerHTML = "💌";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.zIndex = "999";
heart.style.animation = `fall ${3 + Math.random() * 3}s linear`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}, 350);

function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");

        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "20px";
        confetti.style.zIndex = "999";
        confetti.style.animation = "confettiFall 3s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}