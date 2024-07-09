let inputfeild=document.querySelector("input");
let buttonaddRepos=document.querySelector(".plus");
let repocontainer=document.querySelector(".tasks");
// let showcounttask= document.querySelector(".info .nooftasks span:nth-child(2)");
// let showcountcomplated=document.querySelector(".info .noofcomplate span:nth-child(2)");

buttonaddRepos.onclick=function(){
    getRepos();
}

function getRepos(){
if(inputfeild.value==""){
    repocontainer.innerHTML="<span>Please write Githup Username</span>";
}
else{
    fetch(`https://api.github.com/users/${inputfeild.value}/repos`) // emanabdelhamid241
    .then(response => response.json())
    .then((data) =>{
        repocontainer.innerHTML="";
        data.forEach(repo => {
            // console.log(repo.name);
        let newtaskbox=document.createElement("div");
        newtaskbox.classList.add("task-box");
        
        let newtaskp=document.createElement("p");
        newtaskbox.appendChild(newtaskp);
        newtaskp.classList.add("task-title");
        newtaskp.appendChild(document.createTextNode(repo.name));
    
        let urlRepo=document.createElement("a");
        urlRepo.appendChild(document.createTextNode(`visit`));
        urlRepo.href=`https://github.com/${inputfeild.value}/${repo.name}`;

        urlRepo.setAttribute("target","_blank");
        newtaskbox.appendChild(urlRepo);


        let starsSpan = document.createElement("span");
        starsSpan.appendChild(document.createTextNode(`Stars ${repo.stargazers_count}`));
        newtaskbox.appendChild(starsSpan);


        repocontainer.append(newtaskbox);

        });
    });
}
}