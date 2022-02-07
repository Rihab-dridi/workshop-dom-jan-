//1-how to access an elemnt =>> using dom selectors

// let span=document.getElementById('first') //access to the whole tag
//acces the content od the tag
let span = document.getElementById("first").innerHTML; //acces the content od the tag

// let span2=document.querySelector('#first')
let span2 = document.querySelector("body span ");

let parag = document.getElementsByTagName("p");

//how to access an element in an array of elements
for (let i = 0; i < parag.length; i++) {
  console.log(parag[i].innerHTML);
}

// console.log(parag);

//how to change the content od an element
document.getElementById("first").innerHTML = "I'm JavaScrpt ";
//how to change the content od an element inside an array
let paragraph = document.getElementsByTagName("p");
for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].innerHTML = ` I'm a paragraph number ${i + 1} `;
}

//how to style an element
//const spanStyle=document.getElementById('first').style.color='red'
//console.log(spanStyle);

//how to delete an element
// document.getElementById('second').remove()

document.getElementById("btn").addEventListener("mousemove", function () {
  if (document.getElementById("first").style.color === "red") {
    document.getElementById("first").style.color = "yellow"
  }
  else{document.getElementById("first").style.color = "red";}
});
