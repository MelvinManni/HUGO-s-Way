//Open&Close menu btn
const openBtn = document.getElementById("openBtn"),
    closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", (e)=>{
    document.getElementById("bg-black").style.display = "block";
    e.preventDefault;
});

closeBtn.addEventListener("click", (e)=>{
    document.getElementById("bg-black").style.display = "none";
});
