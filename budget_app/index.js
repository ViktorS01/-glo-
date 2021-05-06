'use strict';

let buttonStart = document.getElementById('start'),
    buttonPlus0 = document.getElementsByTagName('button')[0],
    buttonPlus1 = document.getElementsByTagName('button')[1],
    checkBox = document.querySelector('#deposit-check'),

    additionalIncomeInput0 = document.querySelectorAll(".additional_income-item")[0],
    additionalIncomeInput1 = document.querySelectorAll(".additional_income-item")[1],

    incomeMonth = document.getElementsByClassName('budget_month-value')[0],
    budgetDay = document.getElementsByClassName('budget_day-value')[0],
    expensesMonth = document.getElementsByClassName('expenses_month-value')[0],
    possibleIncome = document.getElementsByClassName('additional_income-value')[0],
    possibleExpense = document.getElementsByClassName('additional_expenses-value')[0],
    accumulation = document.getElementsByClassName('income_period-value')[0],
    targetDate = document.getElementsByClassName('target_month-value')[0],

    incomeMonthInput = document.querySelector('.salary-amount'),

    additionalIncomeTitle = document.querySelector('.income-title'),
    additionalIncomeAmount = document.querySelector('.income-amount'),

    mandatoryExpensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),

    additionalExpensesInput = document.querySelector(".additional_expenses-item"),

    target = document.querySelector('.target-amount'),

    range = document.querySelector('.period-select');

let accumulatedMonth;

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    persentDeposit: 0,
    moneyDeposit: 0,
    deposit: false,
    mission: 500000,
    period: 3,
    start: function (){

        if (incomeMonthInput.value === '' ){
            alert("Поле \"Месячный доход\" должно быть заполнено");
            return;
        }
        appData.budget = incomeMonthInput.value;
        appData.getBudget();
        appData.getExpenses();
        appData.getExpensesMonth();
        
        // appData.asking();
        // appData.getTargetMonth();
        appData.getAddExpenses();
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
    getExpenses: function (){
        expensesItems.forEach(function (item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = +cashExpenses;
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
    showResult: function (){
        incomeMonth.value = appData.budgetMonth;
        budgetDay.value = appData.budgetDay;
        expensesMonth.value = appData.expensesMonth;
        possibleExpense.value = appData.addExpenses.join(',');
    },
    asking: function(){

        if (confirm("Есть ли у вас доп. заработок?")){
            let itemIncome,
                cashIncome;
            do {
                itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
            }
        
            while(itemIncome === null || itemIncome.trim() === '' || !isNaN(itemIncome));

            do {
                cashIncome = prompt("Сколько в месяц зарабатываете на этом?", 10000);
            }
        
            while(cashIncome === null || cashIncome.trim() === '' || isNaN(cashIncome));

            appData.income[itemIncome] = cashIncome;
        }


        let addExpenses;

        do {
            addExpenses = prompt('Перечислите возможные расходы через запятую:');
        }
    
        while(addExpenses === null || addExpenses.trim() === '' || !isNaN(addExpenses));

        appData.addExpenses = addExpenses.toLowerCase().split(",");
        appData.deposit = confirm("Есть ли у вас депозит в банке?");

        let sum = 0;
        let answer = '';
        for (let i = 1; i <= 2; i++){
            answer = prompt("Введите обязательную статью расходов");
            sum = +prompt("Во сколько это обойдется");
            appData.expenses[answer] = sum;
        }
    },
    
    getExpensesMonth: function (){
        let sum = 0;
        for (let item in appData.expenses){
            sum += appData.expenses[item];
        }
        this.expensesMonth = sum;
    },
    getBudget: function (){
        const sum = function(){
            let summ = 0;
            for (let key in appData.expenses){
                summ += +appData.expenses[key];
            }
            return summ;
        };

        this.budgetMonth =  this.budget - (sum());

        this.budgetDay = Math.floor(this.budgetMonth / 12);

        if (budgetDay >= 1200){
            return("У вас высокий уровень дохода.");
        }

        if (budgetDay >= 600 && budgetDay < 1200){
            return("У вас средний уровень дохода.");
        }

        if (budgetDay < 600){
            return("К сожалению у вас уровень дохода ниже среднего");
        }

        else if (budgetDay < 0){
            return("Что-то пошло не так!");
        }
    },
    getTargetMonth: function (){
        const sum = function(){
            let summ = 0;
            for (let key in appData.expenses){
                summ += +appData.expenses[key];
            }
            return summ;
        };
        let accumulatedMonth =  money - (sum());

        return Math.ceil(appData.mission / accumulatedMonth) > 0 ? "Цель будет достигнута за " + Math.ceil(appData.mission / accumulatedMonth)  + " месяцев." : "Цель не будет достигнута";
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

    calkSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }


};

buttonStart.addEventListener('click', appData.start);

buttonPlus1.addEventListener('click', appData.addExpensesBlock);

// console.log(appData.expenses);


// console.log("Наша программа включает в себя данные: ");
// for (let key in appData){
//     console.log("Свойство: " + key + " со значением: " + appData[key]);
// }

// appData.getInfoDeposit();
// console.log(appData.calkSavedMoney, appData.persentDeposit, appData.moneyDeposit);

let expensesString = '';
appData.addExpenses.forEach((element, index) => {
    expensesString += element[0].toUpperCase() + element.substring(1);
    if (index !== appData.addExpenses.length - 1){
        expensesString += ', ';
    }
});

console.log(expensesString);