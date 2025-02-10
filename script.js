var isstatus=document.querySelector("h5")
var btn =document.querySelector('#add')
var check =0;

btn.addEventListener("click",function(){
    if(check==0){
    isstatus.innerHTML = "Friends"
    isstatus.style.color="green"
    btn.innerHTML="Remove friend"
    check=1
    }else{
        isstatus.innerHTML="remove"
        isstatus.style.color="red"
        btn.innerHTML="add friend"
        check=0
    }
})

var con=document.querySelector("#card")
var love=document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.transform="translate(-50%,-50%) scale(1)"
    love.style.opacity=0.8
    setTimeout(function (){
        love.style.opacity=0
    },1000)
    setTimeout(function (){
        love.style.transform="translate(-50%,-50%) scale(0)"
    },2000)

})

