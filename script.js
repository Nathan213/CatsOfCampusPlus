////Scrolling

function getScrollPercent()
{
  let scrollRange = document.body.offsetHeight - window.innerHeight;
  return window.scrollY / scrollRange;
}

window.addEventListener('scroll', function(e){
  //console.log(window.scrollY, getScrollPercent());
  let percent = getScrollPercent();
  document.body.style.backgroundColor = 'rgb('+ 255 * percent +', '+ 255 * (1.0 - percent) +', 255)';
});

////Mouse Interaction

function getRelativeCoordinates(mouse, element){
  let rect = element.getBoundingClientRect();
  return {
    x: mouse.clientX - rect.left,
    y: mouse.clientY - rect.top
  };
}

var sections = document.getElementsByClassName('section');

for(let i = 0; i < sections.length; i++)
{
  sections[i].addEventListener('mouseenter', function(){
  });
  sections[i].addEventListener('mousemove', function(mouse){
    coords = getRelativeCoordinates(mouse, sections[i]);
    coords.x /= sections[i].clientWidth;
    coords.y /= sections[i].clientHeight;
    sections[i].style.backgroundColor = 'rgb(255, '+ 255 * coords.x +', '+ 255 * coords.y +')';
  });
  sections[i].addEventListener('mouseleave', function(){
    sections[i].style.backgroundColor = "rgb(240, 248, 255)";
  });
}

var ginger = document.getElementById("ginger")
var boss = document.getElementById("boss")
var solo = document.getElementById("solo")
let btn = document.getElementById("button");
btn.onclick = function () {
    ginger.src = "pepper.jpeg";
    boss.src = "twins.jpeg";
    solo.src = "doge.jpeg";
};

