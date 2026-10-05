/* =====================================================
   PAGE 1 → PAGE 2
===================================================== */
function openGift() {
    const music = document.getElementById("backgroundMusic");

    if (music) {
        music.volume = 0.35;
        music.play().catch(function () {});
    }

    document.getElementById("openingScreen").style.display = "none";
    document.getElementById("birthdayScreen").style.display = "flex";
}


/* =====================================================
   PAGE 2 → PAGE 3
===================================================== */

function continueStory() {

    document.getElementById("birthdayScreen").style.display = "none";

    document.getElementById("memoryScreen").style.display = "flex";

    currentPhoto = 0;

    showPhoto();
}


/* =====================================================
   PAGE 3 — PHOTO MEMORY BOOK
===================================================== */

let currentPhoto = 0;

const photos = [
    "images/photo1.png",
    "images/photo2.png",
    "images/photo3.jpg",
    "images/photo4.png"
];

const captions = [
    "A beautiful memory... 💙",
    "Another moment worth remembering... ✨",
    "A moment that makes us smile... 🦋",
    "Another beautiful chapter... 👑"
];


function showPhoto() {

    const photo = document.getElementById("memoryPhoto");

    const caption = document.getElementById("memoryCaption");

    if (!photo || !caption) {
        return;
    }

    photo.src = photos[currentPhoto];

    caption.textContent = captions[currentPhoto];
}


function nextPhoto() {

    if (currentPhoto < photos.length - 1) {

        currentPhoto++;

        showPhoto();

    }

}


function previousPhoto() {

    if (currentPhoto > 0) {

        currentPhoto--;

        showPhoto();

    }

}


/* =====================================================
   PAGE 3 → PAGE 4
===================================================== */

function goToFinalPage() {

    document.getElementById("memoryScreen").style.display = "none";

    document.getElementById("finalScreen").style.display = "flex";

    startButterflyGame();

}


/* =====================================================
   BUTTERFLY GAME
===================================================== */

let butterflyTimer = null;


function startButterflyGame() {

    const butterfly = document.getElementById("butterfly");

    if (!butterfly) {
        return;
    }

    clearInterval(butterflyTimer);

    butterflyTimer = setInterval(
        moveButterfly,
        1300
    );

}


function moveButterfly() {

    const butterfly =
        document.getElementById("butterfly");

    const arena =
        document.querySelector(".butterfly-arena");

    if (!butterfly || !arena) {
        return;
    }


    const maxX =
        arena.clientWidth -
        butterfly.offsetWidth -
        10;

    const maxY =
        arena.clientHeight -
        butterfly.offsetHeight -
        10;


    const randomX =
        Math.max(
            10,
            Math.random() * maxX
        );

    const randomY =
        Math.max(
            10,
            Math.random() * maxY
        );


    butterfly.style.left =
        randomX + "px";

    butterfly.style.top =
        randomY + "px";

}


/* =====================================================
   CATCH THE BUTTERFLY
===================================================== */

function catchButterfly() {

    clearInterval(butterflyTimer);


    const game =
        document.getElementById("butterflyGame");

    const message =
        document.getElementById("caughtMessage");


    if (!game || !message) {
        return;
    }


    game.style.display = "none";

    message.style.display = "block";


    setTimeout(function () {

        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const butterfly =
            document.getElementById("butterfly");


        if (butterfly) {

            butterfly.addEventListener(
                "click",
                catchButterfly
            );

        }


        showPhoto();

    }
);