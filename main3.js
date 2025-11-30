// task 3++++++++_______________________

let userType = "Premium";
let purchaseAmount = 1200;
let hasCoupon = true;
//________________________
// ___________________ if else_________
// ______geust

if (userType == "Guest") {
    console.log("لا يحصل على أي خصم");
}
// _______regular______

else if (userType == "Regular" && purchaseAmount >= 500 && hasCoupon == true) {
    console.log("خصم إجمالي 10% (5% أساسي + 5% إضافي)");
}
else if (userType == "Regular" && purchaseAmount >= 500) {
    console.log("خصم 5%");
}
// _____premium___________
else if (userType == "Premium" && purchaseAmount >= 1000 && hasCoupon == true) {
    console.log("خصم إجمالي 20% (15% أساسي + 5% إضافي)");
}
else if (userType == "Premium" && purchaseAmount >= 1000) {
    console.log("خصم 15%");
}
else if (userType == "Premium" && purchaseAmount >= 500 && hasCoupon == true) {
    console.log("خصم إجمالي 15% (10% أساسي + 5% إضافي)");
}
else if (userType == "Premium" && purchaseAmount >= 500) {
    console.log("خصم 10%");
}
else {
    console.log("لا يوجد خصم");
}