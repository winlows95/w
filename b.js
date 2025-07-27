if (window.hasRun) {
  console.log("")
} else {
  window.hasRun = true;

  if (window.location.href !== "https://memories.undertale.com/?Hackertesting900") {
    console.log("%cball attack", "font-size: 40px; font-weight: bold; color: cyan;");
    console.log("maddy@maddy.pet");

    const balls = [];
    const velocities = [];
    const ballSize = 50;
    const numBalls = 5;

    function makeball() {
      let ball = document.createElement('div');
      ball.style.position = 'fixed';
      ball.style.width = ballSize + 'px';
      ball.style.height = ballSize + 'px';
      ball.style.background = 'cyan';
      ball.style.borderRadius = '50%';
      ball.style.left = Math.random() * (window.innerWidth - ballSize) + 'px';
      ball.style.top = Math.random() * (window.innerHeight - ballSize) + 'px';
      document.body.appendChild(ball);
      balls.push(ball);

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
    console.log("testing page");
  }
}
