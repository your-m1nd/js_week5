let typeName = document.getElementById("typeName");
let checkboxYes = document.getElementById('checkboxYes');
let checkboxNo = document.getElementById('checkboxNo');

checkboxNo.addEventListener('change', function(evt) {
  if (document.getElementById('checkboxNo').checked) {
    typeName.style.display = "none";
  }
})

let typeLink = document.getElementById("typeLink");
let commentEnter = document.getElementById("commentEnter");
commentEnter.addEventListener('change', function(evt) {

    
    let userDate = new Date;
    
    let year = userDate.getFullYear();
    let month = userDate.getMonth()+1;
    let day = userDate.getDate();
    let hours = userDate.getHours();
    let minutes = userDate.getMinutes();
    let seconds = userDate.getSeconds();

    let userTime = `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;
    date.textContent=userTime;

});


let paragraf = document.getElementById("paragraf");
let date = document.getElementById('date');
let img = document.getElementById("img");
let comment = document.getElementById("comment");


let send = document.getElementById("send");
send.onclick = function createInfoBlock(evt) {

    let newName = typeName.value.toLowerCase();
    let newName2 = newName[0].toUpperCase() + newName.slice(1);
    paragraf.textContent = newName2;

    img.src = typeLink.value;

  let newStr1 = commentEnter.value.replace(/(xxx|viagra)/gi, "***");
  comment.textContent = newStr1;

  evt.preventDefault();
}