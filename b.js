if (window.hasRun) {
  console.log("");
} else {
  window.hasRun = true;

  if (window.location.href !== "https://memories.undertale.com/?Hackertesting900") {
    console.log("%cball attack", "font-size: 40px; font-weight: bold; color: cyan;");
    console.log("maddy@maddy.pet");
    document.body.classList.replace('bg-black', 'bg-white');

    const balls = [];
    const velocities = [];
    const ballSize = 50;
    const numBalls = 5;
    const ballImgSrc = "https://winlows95.github.io/w/Sans_overworld.webp";

    function makeball() {
      const img = document.createElement('img');
      img.src = ballImgSrc;
      img.style.position = 'fixed';
      img.style.width = ballSize + 'px';
      img.style.height = ballSize + 'px';
      img.style.left = Math.random() * (window.innerWidth - ballSize) + 'px';
      img.style.top = Math.random() * (window.innerHeight - ballSize) + 'px';
      img.style.pointerEvents = 'none';
      document.body.appendChild(img);
      balls.push(img);

      let vx = (Math.random() * 10 - 5) || 3;
      let vy = (Math.random() * 10 - 5) || 3;
      velocities.push({ vx, vy });
    }

    for (let i = 0; i < numBalls; i++) {
      makeball();
    }

    function animate() {
      const w = window.innerWidth;
      const h = window.innerHeight;

      balls.forEach((ball, i) => {
        let x = parseFloat(ball.style.left);
        let y = parseFloat(ball.style.top);
        let { vx, vy } = velocities[i];

        x += vx;
        y += vy;

        if (x + ballSize > w || x < 0) vx = -vx;
        if (y + ballSize > h || y < 0) vy = -vy;

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        velocities[i].vx = vx;
        velocities[i].vy = vy;
      });

      requestAnimationFrame(animate);
    }

    animate();

  } else {
    console.log("Safety.");
  }
}
