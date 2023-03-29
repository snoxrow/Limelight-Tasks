let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let candy1 = document.getElementById('candy1')
let candy2 = document.getElementById('candy2')
let candy3 = document.getElementById('candy3')
let candy4 = document.getElementById('candy4')

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  
  img1.style.right = y * 0.5 + 'px';
  img2.style.top =  -y * 0.5 + 'px';
  img3.style.left =  y * 0.5 + 'px';
  candy1.style.top =  -y * 0.45 + 'px';
  candy2.style.bottom =  y * 0.65 + 'px';
  candy3.style.top =  -y * 1 + 'px';
  candy4.style.top =  -y * 1.2 + 'px';

})