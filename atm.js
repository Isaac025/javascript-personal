// //write a simple atm js algo
// //checkBalance
// //withdrawAmount
// //depositAmount
// //checkPin

let balance = 5000;
let pin = 1234;
let attempts = 3;

function checkBalance() {
  return `Your current Balance is $${balance}`;
}

function withdrawAmount(amount) {
  if (amount < balance) {
    balance -= amount;
    return "withdrawal successfull";
  } else {
    return "Insufficient Balance";
  }
}
console.log(withdrawAmount(2000));
console.log(checkBalance());

function depositAmount(amount) {
  balance += amount;
  return "Successfull Deposit";
}

console.log(depositAmount(8000));
console.log(checkBalance());

function checkPin(enteredPin) {
  while (attempts > 0) {
    if (enteredPin === pin) {
      return "Start ATM";
    } else {
      attempts--;
      return "Pin is incorect";
    }
  }

  return "Your Card has been Blocked";
}

console.log(checkPin(4536));
console.log(attempts);
console.log(checkPin(5347));
console.log(attempts);
console.log(checkPin(4386));
console.log(attempts);
console.log(checkPin(3211));
