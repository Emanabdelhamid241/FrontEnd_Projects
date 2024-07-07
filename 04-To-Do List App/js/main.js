let inputfeild=document.querySelector("input");
let buttonaddtask=document.querySelector(".plus");
let taskscontainer=document.querySelector(".tasks");
let controlele=document.querySelector(".control");
let showcounttask= document.querySelector(".info .nooftasks span:nth-child(2)");
let showcountcomplated=document.querySelector(".info .noofcomplate span:nth-child(2)");

let counttask=0;
let countcomplated=0;

window.onload=function(){
    inputfeild.focus();
};

buttonaddtask.onclick= addtask;


/**load from local storage */
let savedContent = localStorage.getItem('divContent');
let saveednooftask=localStorage.getItem('nooftask');
let saveednoofcomptask=localStorage.getItem('noofcomptask');

        if (savedContent || saveednooftask || saveednoofcomptask ) {
        taskscontainer.innerHTML = savedContent; 
        showcounttask.innerHTML = document.querySelectorAll(".tasks .task-title").length;
        showcountcomplated.innerHTML = document.querySelectorAll(".tasks .complated").length;
        }
        

function addtask(){
    let inputvalue=inputfeild.value;
    if(inputvalue !="" && inputvalue !=" "){
        
        let notasksshow=document.querySelector(".no-tasks");
        if(notasksshow){
            notasksshow.remove();
        }
        if(controlele ){
            controlele.remove();
        }
        let newtaskbox=document.createElement("div");
        newtaskbox.classList.add("task-box");
        
        let newtaskp=document.createElement("p");
        newtaskbox.appendChild(newtaskp);
        newtaskp.classList.add("task-title");
        newtaskp.appendChild(document.createTextNode(inputvalue));
    
    
        let newbuttondel=document.createElement("div");
        newtaskbox.appendChild(newbuttondel);
        newbuttondel.classList.add("delate");
        newbuttondel.appendChild(document.createTextNode("Delate"));

        taskscontainer.prepend(newtaskbox);

        
        inputfeild.value="";

        inputfeild.focus();

        calcatetasks();
if(document.querySelectorAll(".control").length == 0){
    addcontrolAll();
    saveinlocalstorage();

}
    }
    else{
        Swal.fire({
            title: "Filed",
            text: "Please Add A New Task!!",
            icon: "question"
          });
    }
}

function createnotasksmsg(){
    let newdivmsg=document.createElement("div");
    newdivmsg.classList.add("no-tasks");
    newdivmsg.classList.add("task-box");

    taskscontainer.appendChild(newdivmsg);

    let newpnotasks=document.createElement("p");
    newdivmsg.appendChild(newpnotasks);
    newpnotasks.appendChild(document.createTextNode("No Tasks To Show"));
}
document.addEventListener('click',function(e){
if(e.target.className == 'delate'){
    e.target.parentNode.remove();
    saveinlocalstorage();

    // if(taskscontainer.childElementCount==0){
    if(document.querySelectorAll(".tasks .task-title").length==0){
        createnotasksmsg();
    }
    if((document.querySelector(".control"))&&(document.querySelectorAll(".tasks .task-title").length <= 1)){
        document.querySelector(".control").remove();
    }
}
    
});
document.addEventListener('click',function(e){
    if(e.target.className == 'deleteAll'){
        document.querySelectorAll(".tasks .task-title").forEach(e=> {
            e.parentNode.remove();
            
    
        });
            createnotasksmsg();
            document.querySelector(".control").remove();
            saveinlocalstorage;

    }
        
    });


document.addEventListener('click',function(e){
    if(e.target.classList.contains('task-title')){
        e.target.classList.toggle('complated');
    }
    calcatetasks();
    saveinlocalstorage();
});
document.addEventListener('click',function(e){
    if(e.target.classList.contains('complateAll')){
        document.querySelectorAll(".tasks .task-title").forEach(e=> {
            e.classList.add('complated');
    
        });
    calcatetasks();
    saveinlocalstorage();

    }
});

function calcatetasks(){
    showcounttask.innerHTML = document.querySelectorAll(".tasks .task-title").length;
    showcountcomplated.innerHTML = document.querySelectorAll(".tasks .complated").length;
    saveinlocalstorage();


}
function addcontrolAll(){
    if(document.querySelectorAll(".tasks .task-title").length > 1){
        let controlele=document.createElement("div");
        controlele.classList.add("control");
        taskscontainer.appendChild(controlele);
        let deleteAll=document.createElement("div");
        deleteAll.classList.add("deleteAll");
        deleteAll.appendChild(document.createTextNode("Delete All"));
        controlele.appendChild(deleteAll);
        let complateAll=document.createElement("div");
        complateAll.classList.add("complateAll");
        complateAll.appendChild(document.createTextNode("Complate All"));
        controlele.appendChild(complateAll);
    }
}
function saveinlocalstorage(){
     //local storage
 let divContent = taskscontainer.outerHTML; 
 localStorage.setItem('divContent', divContent);
 localStorage.setItem("nooftask",showcounttask.innerHTML);
 localStorage.setItem("noofcomtask",showcountcomplated.innerHTML);

}