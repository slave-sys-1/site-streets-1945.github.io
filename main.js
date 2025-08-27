const tooltip = document.querySelector('.tooltip');
const streets = document.querySelectorAll('.street');
const popupBg = document.querySelector('.info__bg');
const popup = document.querySelector('.info');

streets.forEach(street => {
    street.addEventListener('click', function() {
        popup.querySelector('.info_title').innerText = this.dataset.title;
        popup.querySelector('.info_text').innerText = this.dataset.description;
        popupBg.classList.add('active');
    });

    street.addEventListener('mousemove', function(e) {
        tooltip.innerText = this.dataset.title;
        tooltip.style.top = (e.y + 20) + 'px';
        tooltip.style.left = (e.x + 20) + 'px';
    });
    street.addEventListener('mouseover', function() {
        tooltip.style.display = 'block';
    });
    street.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });
});
document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
    }
});


(function(){
let speed = 2; // Скорость скролла.

let scroll = document.querySelector('.wrapper');

let left = 0; // отпустили мышку - сохраняем положение скролла
let drag = false;
let coorX = 0; // нажали мышку - сохраняем координаты.

scroll.addEventListener('mousedown', function(e) {
  drag = true;
  coorX = e.pageX - this.offsetLeft;
});
document.addEventListener('mouseup', function() {
  drag = false;
  left = scroll.scrollLeft;
});
scroll.addEventListener('mousemove', function(e) {
  if (drag) {
    this.scrollLeft = left + (e.pageX - this.offsetLeft - coorX)*speed;
  }
});

})();