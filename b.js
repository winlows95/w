if (window.location.href !== "https://memories.undertale.com/?Hackertesting900") {
  console.log("%cBALL", "font-size: 40px; font-weight: bold; color: red;");

  let ball;

  function makeball() {
    ball = document.createElement('div');
    ball.style.position = 'fixed';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.background = 'cyan';
    ball.style.borderRadius = '50%';
    ball.style.left = '0px';
    ball.style.top = '0px';
    document.body.appendChild(ball);
  }
  
  makeball();
  makeball();
  makeball();
  makeball();
  makeball();
  
  let vx = 5, vy = 3;

  function animate() {
    let x = parseInt(ball.style.left);
    let y = parseInt(ball.style.top);
    let w = window.innerWidth;
    let h = window.innerHeight;

    x += vx;
    y += vy;

    if (x + 50 > w || x < 0) vx = -vx;
    if (y + 50 > h || y < 0) vy = -vy;

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    requestAnimationFrame(animate);
  }
  animate();

} else {
  console.log("testing page");
}
