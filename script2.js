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


let paragraf = document.getElementById("paragraf");
let img = document.getElementById("img");
let comment = document.getElementById("comment");


let send = document.getElementById("send");
send.onclick = function createInfoBlock(evt) {

    let newName = typeName.value.toLowerCase();
    let newName2 = newName[0].toUpperCase() + newName.slice(1);
    paragraf.textContent = newName2;

    img.src = typeLink.value;

    let date = new Date(); //.toString;
    let userDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(userDate.toString());


  let newStr1 = commentEnter.value.replace(/(xxx|viagra)/gi, "***");
  comment.textContent = newStr1;

  evt.preventDefault();
}