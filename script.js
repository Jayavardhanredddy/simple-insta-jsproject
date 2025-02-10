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
var arr=[
    {dp:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww"},
        {dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
        {dp:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
        {dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
]
var clutter=""
var id=0
arr.forEach(function(elem){
    clutter+=`<div class="story">
                <img id="${id+=1}" src="${elem.dp}" alt="">
            </div>`
})
document.querySelector("#stories").innerHTML=clutter
document.querySelector("#stories").addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)
})


