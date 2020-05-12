//define variables
const currencyRatio = 23161.39
let amount = document.getElementById("amountInput")
let from = document.getElementById("fromList")
let to = document.getElementById("toList")
let result = document.getElementById("resultArea")
let convertedAmount = 0
let formatAmount = ""

function convert(){
  //IF-ELSE condition
  if(from.value === "VND" && to.value === "USD"){
    convertedAmount = vndToUsd()
    formatAmount = formatCurrency(to.value, convertedAmount)
  }else if(from.value ==="USD" && to.value === "VND"){
    convertedAmount = usdToVnd()
    formatAmount = formatCurrency(to.value, convertedAmount)
  }else{
    alert("Invalid currency. Please input again !!!")
    return;
  }
  result.innerHTML = `${formatCurrency(from.value, amount.value)} is ${formatAmount}`
}

//Function
function usdToVnd(){
  return amount.value * currencyRatio
}
function vndToUsd(){
  return amount.value / currencyRatio    
}
function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}
  
