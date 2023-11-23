/** Lesson - 1
 * 
var a = 5;
var b = 10;
const c = 13;

console.log(a, b, c);

a = 28;
b = 24;

console.log(a, b, c);
 * 
 */

/** Lesson - 2
 *
const a = 100;
a = 20;
console.log(a);

console.log(a);
let a = 15;
console.log(a);

console.log(a);
var a;
a = 10;
console.log(a);


 */

/** Lesson - 3
 *
 *
 */

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");
const resultCost = document.getElementById("resultCost");
const resultMessage = document.getElementById("message");

const resultBtn = document.getElementById("resultBtn");

resultBtn.onclick = function () {
  if (
    productName.value.length === 0 ||
    productPrice.value.length === 0 ||
    productQuantity.value.length === 0
  )
    return;

  resultCost.value = productPrice.value * productQuantity.value;

  resultMessage.value = `Приобретенный товар - ${productName.value} \n (${productQuantity.value} шт.) по ${productPrice.value} ₽. \n Всего было потрачено: ${resultCost.value}  ₽`;
};
