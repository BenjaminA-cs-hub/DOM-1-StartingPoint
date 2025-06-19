console.log("Hello! If you see this, the script is working.");

/*
- [ ] Select the section with an id of container without using querySelector.
- [ ] Select the section with an id of container using querySelector.
- [ ] Select all of the list items with a class of "second".
- [ ] Select a list item with a class of third, but only the list item inside of the ol tag.
- [ ] Give the section with an id of container the text "Hello!".
- [ ] Add the class main to the div with a class of footer.
- [ ] Remove the class main on the div with a class of footer.
- [Charly] Create a new li element.
- [ ] Give the li the text "four".
- [Charly] Append the li to the ul element.
- [Charly] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [ ] Remove the div with a class of footer.
*/

//1: Select the section with an id of container without using querySelector.
const container1 = document.getElementById("container");
console.log("Task 1:", container1);

// 2: Select the section with an id of container using querySelector.
const container2 = document.querySelector("#container");
console.log("Task 2:", container2);

// 3: Select all of the list items with a class of "second".
const seconds = document.getElementsByClassName("second");
console.log("Task 3:", seconds);More actions

// [4] Select a list item with a class of third, but only the list item inside of the ol tag.
const container4 = document.querySelector("ol li.third");
console.log("Task 4:", container4);
//console.log(container4.children);

//[5] Give the section with an id of container the text "Hello!".
const container5 = document.getElementById("container");
container5.textContent = "Hello!";
//container5.innerHTML = "Hello!";
console.log("Task 5:", container5);

//[6] Add the class main to the div with a class of footer.*/
const container6 = document.getElementsByClassName("footer");
container6[0].classList.add("main");
console.log("Task 6:", container6[0]);

// Soluation for Question #7
const footerElement = document.getElementsByClassName("footer");
footerElement[0].classList.remove("main");
console.log("Task 7:", footerElement);

// #8. Create a new li element
const newLi = document.createElement("li");

// Solution for question #9
newLi.innerText = "four";

// #10. Append the li to the ul 
const ul = document.querySelector("ul");
ul.appendChild(newLi);

// #11. Loop over all of the lis inside the ol tag and give them a background color of "green".
const olLis = document.querySelectorAll("ol li");
olLis.forEach(li => {
  li.style.backgroundColor = "green";
});

// Solution for question #12
const container5 = document.getElementsByClassName("footer");
container5[0].remove(container5[0]);








