/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const toggleSwitch=document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const textBox=document.getElementById('text-box');
const toggleIcon=document.getElementById('toggle-icon');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');


function darkMode(){
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
   // textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
   toggleIcon.children[0].textContent='Dark Mode';
   toggleIcon.children[1].classList.remove('fa-sun');
   toggleIcon.children[1].classList.add('fa-moon');
   image1.src='pilatesDark.svg';
    image2.src='carDark.svg';
    image3.src='baristaDark.svg';
   
}

function lightMode(){
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent='Light Mode';
   toggleIcon.children[1].classList.remove('fa-moon');
   toggleIcon.children[1].classList.add('fa-sun');
   image1.src='pilatesLight.svg';
    image2.src='carLight.svg';
    image3.src='baristaLight.svg';
}

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
   }
    else{
         document.documentElement.setAttribute('data-theme','light');
         lightMode();
    }
}

toggleSwitch.addEventListener('change',switchTheme);


