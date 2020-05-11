//define variables
let amount = prompt("How much amount you want to convert?")
let currencyRatio = 23161.39

//IF-ELSE condition
if(isNaN(amount)){
  console.log("Input a valid number please!!")
}else{
  let from = prompt("Which currency do you have?")
  let to = prompt("Which currency do you want?")
  if(from === "usd" && to === "vnd"){
    console.log(from," to ", to, "is ", formatCurrency(to, usdToVnd()))
  }else if (from === "vnd" && to === "usd"){
    console.log(from," to ",to, "is ", formatCurrency(to, vndToUsd()))
  }else{
    console.log("Invalid currency. Please input again !!!")
  }
}

//Function
function usdToVnd(){
  return result = amount * currencyRatio
}
function vndToUsd(){
  return result = amount / currencyRatio    
}
function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}