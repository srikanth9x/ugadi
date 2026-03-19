ugadiBtn = document.getElementById('ugadi-header');
ugadi = document.getElementById('ugadi');
lifeBtn = document.getElementById('life-header');
life = document.getElementById('life');
waBtn = document.getElementById('waBtn');

ugadiBtn.addEventListener('click', () => {
    ugadi.style.display = ugadi.style.display === 'none' ? 'block' : 'none';
})

lifeBtn.addEventListener('click', () => {
    life.style.display = life.style.display === 'none' ? 'block' : 'none';
})

function shareWish() {
    let resolution = document.getElementById("resolution").value;

    if (!resolution) {
        alert("Please enter your resolution!");
        return;
    }

    let message = `✨ Happy Ugadi ✨\n\n` +
    `A new year, a fresh beginning 🌅  \n\n` +
    `My resolution this year:\n ${resolution}\n\n` +
    `May this Ugadi bring happiness, growth, and new opportunities into your life ✨ \n\n`  +
    `Wish your loved ones from here 👇\n` +
    `https://srikanth9x.github.io/ugadi`;

    let encodedMessage = encodeURIComponent(message);

    let whatsappURL = `https://wa.me/?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
}

waBtn.addEventListener('click', shareWish)