// document.addEventListener("click", function() {
//   const firstDiv = document.querySelector('.first');
//   const digits = document.querySelectorAll('.digit');

//   digits.forEach(digit => {
//     digit.addEventListener('click', function() {
//       const number = this.dataset.number;
//       firstDiv.innerText = number;
//     });
//   });

//   firstDiv.addEventListener('click', function() {
//     const currentNumber = parseInt(this.innerText);
//     const nextNumber = currentNumber % 4 + 1; // Cycle from 1 to 4
//     this.innerText = nextNumber;
//   });
// });
// document.addEventListener("click", function() {
//   const firstDiv = document.querySelector('.first');
//   const digits = document.querySelectorAll('.digit');

//   // Keep track of clicked digits
//   const clickedDigits = [];

//   digits.forEach(digit => {
//     digit.addEventListener('click', function() {
//       const number = this.dataset.number;
//       if (!clickedDigits.includes(number)) {
//         clickedDigits.push(number);
//         firstDiv.innerText += number;
//       }
//     });
//   });

//   // No need for event listener on firstDiv anymore
// });
document.addEventListener("DOMContentLoaded", function () {
  const firstDiv = document.querySelector(".first");
  const digits = document.querySelectorAll(".digit");
  const clickedDigits = [];

  digits.forEach((digit) => {
    digit.addEventListener("click", function () {
      const number = this.dataset.number;
      if (!clickedDigits.includes(number)) {
        clickedDigits.push(number);
        firstDiv.innerText = ""; 
        clickedDigits.forEach((clickedNumber) => {
          firstDiv.innerText += clickedNumber; 
        });
      }
    });
  });
});
