let win = document.getElementById('win')
let file = document.getElementById('file')
let startMenu = document.getElementsByClassName('startMenu')[0]
let explorer = document.getElementsByClassName('explorer')[0]


win.addEventListener("click",()=>{
    if(startMenu.style.bottom == "60px"){
        startMenu.style.bottom = "-670px"
    }
    else{
        startMenu.style.bottom = "60px"
    }
})
file.addEventListener("click",()=>{
    if(explorer.style.bottom == "34px"){
        explorer.style.bottom = "-700px"
    }
    else{
        explorer.style.bottom = "34px"
    }
})







