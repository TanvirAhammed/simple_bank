function getInputValue(inputId) {

    // get the amount deposited
    const InputField = document.getElementById(inputId);
    const amountText = InputField.value;
    const amountValue = parseFloat(amountText);
    // clear balance
    InputField.value = '';
    return amountValue;

}

function getTotalValue(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = previousTotal + amount;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-Total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-Total');
    /* const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText); */

    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}
//Handel deposite button Event

document.getElementById('deposite-button').addEventListener('click', function () {

    const newDepositeAmount = getInputValue('deposite-input');

    if (newDepositeAmount > 0) {

        getTotalValue('deposite-total', newDepositeAmount);
        updateBalance(newDepositeAmount, true);
    }
    else {


    }



})

// Handel withdraw event Handelar

document.getElementById('withdraw-button').addEventListener('click', function () {

    const newWithdrawAmount = getInputValue('withdraw-input');
    const CurrentBalance = getCurrentBalance();

    if (newWithdrawAmount > 0 && newWithdrawAmount < CurrentBalance) {
        getTotalValue('withdraw-total', newWithdrawAmount)
        updateBalance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > CurrentBalance) {

        console.log('You Can not withdraw more than what you have in your account');
    }


})