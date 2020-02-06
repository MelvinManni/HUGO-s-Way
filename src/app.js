//Open&Close menu btn
const openBtn = document.getElementById("openBtn"),
    closeBtn = document.getElementById("closeBtn"),
    depoTSelect = document.getElementById("depo-ts");

openBtn.addEventListener("click", (e)=>{
    document.getElementById("bg-black").style.display = "block";
    e.preventDefault;
});

closeBtn.addEventListener("click", (e)=>{
    document.getElementById("bg-black").style.display = "none";
});

var table = document.getElementById("t-body");
const x = 50;
for (let i=0; i<x; i++){
    const row = document.createElement("tr");
    row.innerHTML = `
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    `;

    table.appendChild(row);
}


// depoTSelect.addEventListener("change", ()=>{
//     const x = parseInt(depoTSelect.value);
//     const table = document.getElementById("depo-table");
    
//     const deepRows = document.getElementsByClassName('depo-rows');
//     for(let y = 0; y < deepRows.length; y++){
//         deepRows.style.display = 'none'
//     };

//     for (let i = 0; i< x; i++){
//         const row = document.createElement("tr");
//         row.className = 'depo-rows'
//         row.innerHTML = `
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//     `;

//         table.appendChild(row);
//     };


// });


onclickLoad=()=>{
    
    
};
