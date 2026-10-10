// Used ;ogical, Operator
let age = prompt("Enter your age :");
let feePaid = prompt("Fees is Paid or Not :");
if (age >= 18 && feePaid == "paid") {
  console.log("You are allowd");
} else {
  console.log("You are not allowd");
}

// Logicall , OR Opeartor
let correctEmail = "example@gmail.com";
let correctPhone = "+92-------";
let isemail = prompt("Enter your email :");
let isphone = prompt("Enter your Phone Number :");
if (isemail == correctEmail || isphone == correctPhone) {
  console.log("You are allowed");
} else {
  console.log("You are not allowed");
}

// Logicall Not
let isblocked = prompt("Enter true or false :");
if (isblocked != "false") {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

// Combine Logicall Operator
let isLoggedIn = true;
let isPremium = true;
let hasCoupon = false;

let Special_Discount = isLoggedIn && (isPremium || hasCoupon);
console.log("Special Discount :", Special_Discount);
