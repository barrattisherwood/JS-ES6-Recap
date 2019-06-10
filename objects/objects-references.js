let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses += amount
}

// addIncome
let addIncome = function(account, income) {
    account.income += income;
}

// resetAccount
let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function(account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`;
}

// addIncome
addIncome(myAccount, 200);
addIncome(myAccount, 1200);
// addExpense
addExpense(myAccount, 100);
// addExpense
addExpense(myAccount, 150);
// getAccountSummary
console.log(getAccountSummary(myAccount));
// resetAccount
resetAccount(myAccount);
// getAccountSummary
console.log(getAccountSummary(myAccount));