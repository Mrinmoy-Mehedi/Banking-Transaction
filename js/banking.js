// handle deposit button event
document.getElementById('deposit-button').addEventListener
('click',function(){
    const depositInput = document.getElementById('deposit-input');

     // convert amount text to number
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText); 

    // get deposit amount

    const depositTotal= document.getElementById('deposit-total');

    // convert amount text to number

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    // adding and show depositamount
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
// update balance
const balanceTotal= document.getElementById('balance-total');

const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit inputfield
    depositInput.value='';

})

// handle withdraw button event
document.getElementById('withdraw-button').addEventListener
('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');

     // convert amount text to number
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText); 

    // get withdraw amount

    const withdrawTotal= document.getElementById('withdraw-total');

    // convert amount text to number

    const previousWithdrawText = withdrawTotal.innerText;
    const previousDepositAmount = parseFloat(previousWithdrawText);

    // adding and show depositamount
    const newWithdrawTotal = previousDepositAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear the withdraw inputfield
    withdrawInput.value='';

    // update balance
const balanceTotal= document.getElementById('balance-total');

const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit inputfield
    depositInput.value='';
})