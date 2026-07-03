const btn = document.getElementById("openBtn");

btn.onclick = function(){

document.getElementById("cover").style.display="none";

document.getElementById("letter").style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

}