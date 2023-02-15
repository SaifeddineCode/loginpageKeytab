let input = document.querySelector(".main-input")
let btn = document.querySelector(".btn")







function copy(){
    location.href = `https://www.${input.value}.keytab.tech`
}


btn.addEventListener("click",copy)


input.addEventListener("keypress",function(e){
    if(e.key=== "Enter"){
        e.preventDefault();
        copy();
    } 
})







