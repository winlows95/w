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

    const kanyeImages = [
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg",
      "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-188588-109561363.jpg"
    ];

    function createKanyePopup() {
      const popup = document.createElement('div');
      popup.style.position = 'fixed';
      popup.style.width = '200px';
      popup.style.height = '200px';
      popup.style.left = Math.random() * (window.innerWidth - 200) + 'px';
      popup.style.top = Math.random() * (window.innerHeight - 200) + 'px';
      popup.style.background = 'black';
      popup.style.border = '3px solid cyan';
      popup.style.borderRadius = '8px';
      popup.style.zIndex = 9999;
      popup.style.boxShadow = '0 0 10px cyan';
      popup.style.display = 'flex';
      popup.style.flexDirection = 'column';
      popup.style.alignItems = 'center';
      popup.style.justifyContent = 'space-between';
      popup.style.padding = '10px';
      popup.style.userSelect = 'none';
      popup.style.cursor = 'move';

      const closeBtn = document.createElement('div');
      closeBtn.textContent = '✖';
      closeBtn.style.color = 'cyan';
      closeBtn.style.fontSize = '20px';
      closeBtn.style.alignSelf = 'flex-end';
      closeBtn.style.cursor = 'pointer';
      closeBtn.onclick = () => popup.remove();

      const img = document.createElement('img');
      img.src = kanyeImages[Math.floor(Math.random() * kanyeImages.length)];
      img.style.maxWidth = '100%';
      img.style.maxHeight = 'calc(100% - 30px)';
      img.style.borderRadius = '5px';

      popup.appendChild(closeBtn);
      popup.appendChild(img);
      document.body.appendChild(popup);

      let isDragging = false;
      let offsetX, offsetY;

      popup.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - popup.offsetLeft;
        offsetY = e.clientY - popup.offsetTop;
        popup.style.transition = 'none';
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
        popup.style.transition = '';
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.min(Math.max(0, x), window.innerWidth - popup.offsetWidth);
        y = Math.min(Math.max(0, y), window.innerHeight - popup.offsetHeight);
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
      });
    }

    setInterval(createKanyePopup, 3000);

  } else {
    console.log("Safety.");
  }
}
