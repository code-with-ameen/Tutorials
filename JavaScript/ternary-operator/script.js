let isLoggedIn = true; 
let score = 90;

console.log(isLoggedIn ? "Welcome" : "Login");

let grade = score >= 90 ? "A" : score >= 80 ? "B" : "Fail"; // Ternary If Else Chain
console.log(grade);

// ---------------------| 
// Normal If Else Chain |
// ---------------------| 

// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else {
//   console.log("Fail");
// }
