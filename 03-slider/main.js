// Arrey.from
var sliderimages= Array.from(document.querySelectorAll(".slider_container img"));
var slider_count = sliderimages.length;

var currentslide=3;
var numberofslide=document.querySelector(".number")

var prevbutton= document.querySelector(".prev");
var nextbutton= document.querySelector(".next");


var indicators= document.createElement("ul");
indicators.setAttribute('id','indicators-ul');
var indicatorscrested =document.querySelector("#indicators-ul");
for(let i=1 ; i<=slider_count ; i++){
    var indicatorsitem= document.createElement("li");
    indicatorsitem.setAttribute('index-data',i);
    indicatorsitem.appendChild(document.createTextNode(i));
    indicators.appendChild(indicatorsitem);
}
// var indicatorslic = Array.from(document.querySelectorAll("#indicators-ul li"));
var indicatorslic = Array.from(indicators.children);


document.querySelector(".indicators").appendChild(indicators);


prevbutton.onclick=getprev;
nextbutton.onclick=getnext;
indicatorslic.forEach(function(li){
    li.onclick=function(){
currentslide=parseInt(this.getAttribute(`index-data`));
checker();
    }
});

function checker(){
    numberofslide.textContent = 'slide #'+ (currentslide)+ ' of ' + (slider_count);
    removeactiveclass();

    sliderimages[currentslide - 1].classList.add('active');
    indicators.children[currentslide - 1].classList.add("active");
    if(currentslide===1){
        prevbutton.classList.add('disabled');
    }
    else{
        prevbutton.classList.remove('disabled');

    }

    if(currentslide===slider_count){
        nextbutton.classList.add('disabled');
    
    }
    else{
        nextbutton.classList.remove('disabled');

    }
}
function removeactiveclass(){
    sliderimages.forEach(function(img){
        img.classList.remove("active")
    });
    indicatorslic.forEach(function(li){
        li.classList.remove("active");
    });
}
checker();

function getnext(){
    if(currentslide<slider_count){
currentslide++;
checker();
    }
}
function getprev(){
    if(currentslide>1){
    currentslide--;
    checker();
    }
}