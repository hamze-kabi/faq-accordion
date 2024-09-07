"use strict";

const questionDiv = document.querySelectorAll(".question-div");
const answers = document.querySelectorAll(".answer")
const iconPlus = document.querySelectorAll(".icon-plus");
const iconMinus = document.querySelectorAll(".icon-minus");
const iconPlusMinusDiv = document.querySelectorAll(".icon-plus-minus-div");

// setting the initial styles before click event. without the following code, needs to
// occur twice to take effect
Array.from(answers).forEach(ans => {ans.style.maxHeight = "0rem"});
Array.from(iconPlus).forEach(iconP => {iconP.style.opacity = "1"});
Array.from(iconMinus).forEach(iconM => {iconM.style.opacity = "0"});

// recieves click from question-div, expands and shrinks answer, changes the opacity of 
// icon-plus and icon-minus
function toggleAnswer() {
  // finding .answer
  if (this.nextElementSibling && this.nextElementSibling.className === "answer") {
    const answer = this.nextElementSibling;
    answer.style.maxHeight = answer.style.maxHeight === "0rem" ? "20rem" : "0rem"
  }

  // finding .icon-plus and .icon-minus, these two are grandchildren of question-div
  Array.from(this.children).forEach(child => {
    Array.from(child.children).forEach(grandchild => {
      if (grandchild && grandchild.className === "icon-plus") {
        grandchild.style.opacity = grandchild.style.opacity === "0" ? "1" : "0"
      } else if (grandchild && grandchild.className === "icon-minus") {
        grandchild.style.opacity = grandchild.style.opacity === "0" ? "1" : "0"
      }
    })
  })
}

questionDiv.forEach(question => question.addEventListener("click", toggleAnswer));
