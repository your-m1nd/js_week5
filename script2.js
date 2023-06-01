let typeName = document.getElementById("typeName");
let checkboxYes = document.getElementById('checkboxYes');
let checkboxNo = document.getElementById('checkboxNo');

checkboxNo.addEventListener('change', function(evt) {
  if (document.getElementById('checkboxNo').checked) {
    typeName.style.display = "none";
  }
})

let typeLink = document.getElementById("typeLink");

let paragraf = document.getElementById("paragraf");
let date = document.getElementById('date');
let img = document.getElementById("img");
let comment = document.getElementById("comment");


let send = document.getElementById("send");
send.onclick = function createInfoBlock(evt) {

    let newName = typeName.value.toLowerCase();
    let newName2 = newName[0].toUpperCase() + newName.slice(1);
    paragraf.textContent = newName2;


    let images = [
      'https://img.freepik.com/free-photo/beautiful-wedding-bouquet-of-roses_24837-420.jpg?w=2000',
      'https://img.freepik.com/free-photo/top-view-roses-flowers_23-2148860041.jpg?w=2000',
      'https://img.freepik.com/free-vector/beautiful-watercolour-bouquet-of-flowers_52683-45189.jpg?w=2000',
      'https://img.freepik.com/premium-vector/watercolor-floral-bouquet-illustration-with-butterfly-blush-pink-blue-yellow-vivid-flowers-decorative-elements-template-flat-cartoon-illustration-isolated-on-white-background_76964-7411.jpg',
      'https://img.freepik.com/free-vector/frame-of-leaves-and-flowers-cornflower_105738-1621.jpg?w=2000',
    ];
  
      if (typeLink.value != "") {
        img.src = typeLink.value;
      } else {
        img.src=images[Math.floor(Math.random()*images.length)]
      };

  let newStr1 = commentEnter.value.replace(/(xxx|viagra)/gi, "***");
  comment.textContent = newStr1;

  let userDate = new Date;
    
  let year = userDate.getFullYear();
  let month = userDate.getMonth()+1;
  let day = userDate.getDate();
  let hours = userDate.getHours();
  let minutes = userDate.getMinutes();
  let seconds = userDate.getSeconds();

  let userTime = `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;
  date.textContent=userTime;


  evt.preventDefault();
}