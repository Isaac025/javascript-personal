// //write a simple atm js algo
// //checkBalance
// //withdrawAmount
// //depositAmount
// //checkPin

let balance = 5000;
let pin = 1234;
let attempts = 3;

function checkPin() {
  while (attempts > 0) {
    let enteredPin = parseInt(prompt("Enter your PIN:"));
    if (enteredPin === pin) {
      alert("Pin is correct: welcome to your account");
      startAtm();
      return;
      // return "Start ATM";
    } else {
      attempts--;
      alert(`Pin is incorect you have ${attempts} attempts left`);
    }
  }

  alert("Your Card has been Blocked please contact your bank");
}

function checkBalance() {
  alert(`Your current Balance is $${balance}`);
}

function withdrawAmount() {
  let amount = parseFloat(prompt("input Withdrawal Amount: "));
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid Amount");
  } else if (amount < balance) {
    balance -= amount;
    alert(`withdrawal successfull your new balance is $${balance}`);
  } else {
    alert("Insufficient funds");
  }
}
// console.log(withdrawAmount(2000));
// console.log(checkBalance());

function depositAmount() {
  let amount = parseFloat(prompt("input Deposit Amount:"));
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid Amount");
  } else {
    balance += amount;
    alert(`Successful Deposit, your new account balance is $${balance}`);
  }
}

function startAtm() {
  while (true) {
    let choice = prompt(
      "Choose an Option: \n1. Check Balance \n2. withdraw Money \n3. Deposit Money \n4.EXIT"
    );
    if (choice === "1") {
      checkBalance();
    } else if (choice === "2") {
      withdrawAmount();
    } else if (choice === "3") {
      depositAmount();
    } else if (choice === "4") {
      alert("Thank You for Using this ATM");
      return;
    } else {
      alert("Invalid option. Try again.");
    }
  }
}

// console.log(depositAmount(8000));
// console.log(checkBalance());

//start atm
checkPin();
