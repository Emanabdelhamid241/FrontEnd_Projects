let bulletsul=document.querySelector(".bulets ul");
let countspan=document.querySelector(".count span");
let questionArea=document.querySelector(".title");
let answerarea=document.querySelector(".answers");
let submitbutton=document.querySelector("#submit");
let resultArea =document.querySelector(".results");
let timerarea=document.querySelector(".timer");


let currunt=0;
let correctcount=0;

function getQuestions(){
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            // console.log(this.responseText);
            let questionsObject=JSON.parse(this.responseText);
            let questionscount=questionsObject.length;
            countspan.innerHTML=questionscount;
                        countdown(5, questionscount);

            createBullets();
            setQuestionData(questionsObject[currunt],questionscount);

            submitbutton.onclick=() =>{
            let therightanswer=questionsObject[currunt].currectanswer;
            currunt++;
            
            checkanswer(therightanswer);
            questionArea.innerHTML="";
            answerarea.innerHTML="";
            setQuestionData(questionsObject[currunt],questionscount);
            handlebullets();

            clearInterval(countdownInterval);
            countdown(5, questionscount);
            setResults(questionscount);

        }
        }
    };
myRequest.open("GET","questions.json",true);
myRequest.send();
}
getQuestions();
function createBullets(num){
    num=countspan.innerHTML;
    for(let i=0;i<num;i++){
        let libullet=document.createElement("li");
if(i===0){
    libullet.className="done";
}
bulletsul.appendChild(libullet);

    }
}




function setQuestionData(obj,count){
let titleQuestion=document.createElement("div");
titleQuestion.appendChild(document.createTextNode(obj[`question`]));
titleQuestion.className="question";
questionArea.appendChild(titleQuestion);

for(let i=1;i<=4;i++){
    let answerdiv=document.createElement("div");
    answerdiv.className="answer";
    let answerfiled=document.createElement("input");
    answerfiled.type="radio";
    answerfiled.id=`answer${i}`;
    answerfiled.name="answers";
    answerfiled.dataset.answer = obj[`answer${i}`];

    if(i===1){
        answerfiled.checked=true;
    }
    let labelans=document.createElement("label");
    labelans.htmlFor=`answer${i}`;
    labelans.appendChild(document.createTextNode(obj[`answer${i}`]));
    answerdiv.appendChild(answerfiled);
    answerdiv.appendChild(labelans);

    answerarea.appendChild(answerdiv);
}
}


function checkanswer(ranswer){
    let answers=document.getElementsByName("answers");
    let choosen;
    for(let i= 0 ; i<answers.length; i++){
        if (answers[i].checked){
            choosen=answers[i].dataset.answer;
        }
    }
    if(ranswer === choosen){
        correctcount++;
    }
}
function handlebullets(){

Array.from(document.querySelectorAll(".bulets li")).forEach((li,index)=>{
if(currunt=== index){
    li.className="done";
}
});
}
function setResults(count){
    if(currunt === count-1){
        submitbutton.remove();
        questionArea.remove();
        answerarea.remove();
        document.querySelector(".bulets").remove();
        resultArea.innerHTML=`<span>Result</span> you get <span>${correctcount}</span> from <span>${count}</span>`
        resultArea.style.backgroundColor="white";
    }
}
function countdown(durastion, count){
    if(currunt < count){
        let min,sec;
        
        countdownInterval = setInterval(function(){
            
min = parseInt(durastion / 60);
sec = parseInt(durastion % 60);

min =min<10? `0${min}`:min;
sec =sec<10? `0${sec}`:sec;
timerarea.innerHTML = `${min}:${sec}`;

if(--durastion< 0){
    clearInterval(countdownInterval);
submitbutton.click();
}
        },1000);
    }


}