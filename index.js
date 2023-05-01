const insideBox =document.getElementById("inside")
const container =document.getElementById("list")

function addTask(){
    if(insideBox.value === ""){
        alert("You must Write Something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML= insideBox.value
        container.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML= "\u0078"
        li.appendChild(span)
    }
    insideBox.value=""
}
container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }

},false)