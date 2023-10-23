// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, 
// totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: "Aug",
    incomes: {
        work: 10000,
        entreprenship: 50000
    },

    expenses: {
        food: 1000,
        transport: 1000,
        appartment: 1500,
        fun: 500,
        saving: 2500
    },

    // a function to return key value of a given property(prop)
    returnKeys: function (prop){
        return Object.keys(prop)
    },

    totalIncome: function(){
        const incomesKeys  = this.returnKeys(this.incomes)
        let total = 0
        for(let i = 0; i < incomesKeys.length; i++){
            total += this.incomes[incomesKeys[i]]
        }
        
        return total
    },

    totalExpense: function(){
        const expensesKeys  = this.returnKeys(this.expenses)
        let total = 0
        for(let i = 0; i < expensesKeys.length; i++){
            total += this.expenses[expensesKeys[i]]
        }
        
        return total
    },

    accountInfo: function(){
        return `Hello my name is ${this.firstName}. I make ${this.totalIncome()}/month and i spend ${this.totalExpense()}`
    },

    addIncome: function (incomeKey, incomeVal) {
        this.incomes[incomeKey] =  incomeVal
    },

    addExpense: function (expenseKey, expenseVal) {
        this.expenses[expenseKey] =  expenseVal
    },

    accountBalance: function (){
        return this.totalIncome() - this.totalExpense()
    }

}

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome('new entreprise', 10000));
console.log(personAccount.addExpense('family', 10000));
console.log(personAccount);
console.log(personAccount.totalExpense());
console.log(personAccount.totalIncome());
console.log(personAccount.accountBalance());