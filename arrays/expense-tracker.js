const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push(
            {
                description: description,
                amount: amount
            }
        );
    },
    addIncome: function(description, amount) {
        this.income.push(
            {
                description: description,
                amount: amount
            }
        );
    },
    getAccountSummary: function() {
        let income = 0;
        let expenses = 0;
        this.expenses.forEach(function(item){
            expenses += item.amount;
        })
        this.income.forEach(function(item){
            income += item.amount;
        })
        return `
            ${this.name} has a balance of $${income - expenses}.
            $${income} in income.
            $${expenses} in expenses.
        `;
    }
}



account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());