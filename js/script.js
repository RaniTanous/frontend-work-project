
let i = 0;
let txt = "Whats stopping you from trading gold?? Perhaps lack of knowledge and expierence ? \nIf so, our educational package is exactly \n you've been searching for. Including an A-Z \n training course with everything you need \n to know to starting NOW!"; 
let speed = 60; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("whatstopsyou").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
