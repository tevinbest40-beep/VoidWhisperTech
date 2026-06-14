const particles = document.getElementById("particles");

for(let i = 0; i < 50; i++){

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 8 + 5) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particles.appendChild(particle);
}
