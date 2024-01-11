//document.getElementById("count").innerText=7
let count=0
let c=document.getElementById("count-el")
let d=document.getElementById("save-el")
function increment()
{
    count=count+1;
    c.textContent=count
}
function save()
{
    let countStr=count+" - "
    d.textContent +=countStr
    c.textContent=0
    count=0
}