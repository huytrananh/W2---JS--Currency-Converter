//define variables
const exchangeRate = {
  "USD": 1,
  "VND": 23325.34,
  "EUR": 0.921844,
  "GBP": 0.815339,
  "AUD": 1.54488,
  "CAD": 1.40744,
}

let amount = document.getElementById("amountInput")
let from = document.getElementById("fromList")
let to = document.getElementById("toList")
let result = document.getElementById("resultArea")
let convertedAmount = 0
let formatAmount = ""

function convert(){
  let amountValue = amount.value
  let fromValue = from.value
  let toValue = to.value
  convertedAmount = amountValue * (exchangeRate[toValue] / exchangeRate[fromValue])
  formatAmount = formatCurrency(toValue, convertedAmount)
  //IF-ELSE condition
  // if(from.value === "VND" && to.value === "USD"){
  //   convertedAmount = vndToUsd()
  //   formatAmount = formatCurrency(to.value, convertedAmount)
  // }else if(from.value ==="USD" && to.value === "VND"){
  //   convertedAmount = usdToVnd()
  //   formatAmount = formatCurrency(to.value, convertedAmount)
  // }else{
  //   alert("Invalid currency. Please input again !!!")
  //   return;
  // }
  result.innerHTML = `${formatCurrency(fromValue, amountValue)} is ${formatAmount}`
}

function swapCurrency(){
  let fromValue = document.getElementById("fromList").value
  let toValue = document.getElementById("toList").value
  document.getElementById("toList").value = fromValue
  document.getElementById("fromList").value = toValue
}

// //Function
// function usdToVnd(){
//   return amount.value * currencyRatio
// }
// function vndToUsd(){
//   return amount.value / currencyRatio    
// }

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}
  
