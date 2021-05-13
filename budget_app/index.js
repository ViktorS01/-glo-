'use strict';

let buttonStart = document.getElementById('start'),
    buttonPlus0 = document.getElementsByTagName('button')[0],
    buttonPlus1 = document.getElementsByTagName('button')[1],
    checkBox = document.querySelector('#deposit-check'),

    additionalIncomeInput = document.querySelectorAll(".additional_income-item"),

    incomeMonth = document.getElementsByClassName('budget_month-value')[0],
    budgetDay = document.getElementsByClassName('budget_day-value')[0],
    expensesMonth = document.getElementsByClassName('expenses_month-value')[0],
    possibleIncome = document.getElementsByClassName('additional_income-value')[0],
    possibleExpense = document.getElementsByClassName('additional_expenses-value')[0],
    accumulation = document.getElementsByClassName('income_period-value')[0],
    targetDate = document.getElementsByClassName('target_month-value')[0],

    incomeMonthInput = document.querySelector('.salary-amount'),

    additionalIncomeTitle = document.querySelector('.income-title'),

    mandatoryExpensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),

    additionalExpensesInput = document.querySelector(".additional_expenses-item"),

    target = document.querySelector('.target-amount'),

    range = document.querySelector('.period-select'),
    periodAmount = document.querySelector(".period-amount"),
    incomeItem = document.querySelectorAll('.income-items');

let accumulatedMonth;

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    incomeMonth: 0,
    expenses: {},
    addExpenses: [],
    persentDeposit: 0,
    moneyDeposit: 0,
    deposit: false,
    start: function (){
        appData.budget = +incomeMonthInput.value;
        
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();

        appData.getBudget();
        appData.showResult();
    },
    addExpensesBlock: function (){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus1);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3){
            buttonPlus1.style.display = 'none';
        }
    },
    addIncomeBlock: function (){
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, buttonPlus0);
        incomeItem = document.querySelectorAll('.income-items');

        if (incomeItem.length === 3){
            buttonPlus0.style.display = 'none';
        }
    },
    getExpenses: function (){
        expensesItems.forEach(function (item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        });
    },
    getIncome: function (){
        incomeItem.forEach(function (item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if (itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = +cashIncome;
            }

            for (let key in appData.income){
                appData.incomeMonth += +appData.income[key];
            }
        });
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesInput.value.split(',');
        addExpenses.forEach(function (item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeInput.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    showResult: function (){
        incomeMonth.value = appData.budgetMonth;
        budgetDay.value = appData.budgetDay;
        expensesMonth.value = appData.expensesMonth;
        possibleExpense.value = appData.addExpenses.join(',');
        possibleIncome.value = appData.addIncome.join(',');
        targetDate.value = Math.ceil(appData.getTargetMonth());
        accumulation.value = appData.calkPeriod();
    },
    getExpensesMonth: function (){
        let sum = 0;
        for (let item in appData.expenses){
            sum += appData.expenses[item];
        }
        this.expensesMonth = sum;
    },
    getBudget: function (){

        let summa = 0;

        const sum = function(){
            let summ = 0;
            for (let key in appData.expenses){
                summ += +appData.expenses[key];
            }
            return summ;
        };

        summa = sum();

        this.budgetMonth =  this.budget + appData.incomeMonth - summa;

        this.budgetDay = Math.floor(this.budgetMonth / 12);
    },
    getTargetMonth: function (){
        return target.value / appData.budgetMonth;
    },

    getInfoDeposit: function(){
        if (appData.deposit){
            do {
                appData.persentDeposit = prompt("Какой годовой процент?", '10');
            }
        
            while(appData.persentDeposit === null || appData.persentDeposit.trim() === '' ||
                !isNaN(appData.persentDeposit));

            do {
                appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
            }
        
            while(appData.moneyDeposit === null || appData.moneyDeposit.trim() === '' || isNaN(appData.moneyDeposit));

            
        }
    },

    calkPeriod: function(){
        return appData.budgetMonth * range.value;
    }


};

// buttonStart.setAttribute('disabled', true);

// const start = function (){
//     if (incomeMonthInput.value !== ''){
//         buttonStart.setAttribute('disabled', false);
//     }
//     else{
//         buttonStart.setAttribute('disabled', true);
//     }
// };

// incomeMonthInput.addEventListener ('input', () => {
//     if (incomeMonthInput.value !== ''){
//         buttonStart.setAttribute('disabled', false);
//     }
//     else{
//         buttonStart.setAttribute('disabled', true);
//     }
// });

buttonStart.addEventListener('click', appData.start);

buttonPlus1.addEventListener('click', appData.addExpensesBlock);

buttonPlus0.addEventListener('click', appData.addIncomeBlock);

range.addEventListener('mouseup', ()=>{
    periodAmount.textContent = range.value;
    appData.showResult();
});

// console.log("Наша программа включает в себя данные: ");
// for (let key in appData){
//     console.log("Свойство: " + key + " со значением: " + appData[key]);
// }

// let expensesString = '';
// appData.addExpenses.forEach((element, index) => {
//     expensesString += element[0].toUpperCase() + element.substring(1);
//     if (index !== appData.addExpenses.length - 1){
//         expensesString += ', ';
//     }
// });

// console.log(expensesString);