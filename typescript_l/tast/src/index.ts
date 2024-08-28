type buttons={
    up:string,
    down:string,
    right:string,
    left:string
}
type addpar=buttons &{
    x:boolean
}
function getAction(btns:addpar){
    console.log(`${btns.up}`);
    console.log(`${btns.down}`);
    console.log(`${btns.right}`);
    console.log(`${btns.left}`);
}
getAction({up:"u",down:"d",right:"r",left:"l",x:true})