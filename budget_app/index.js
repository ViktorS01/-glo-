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
    incomeItem = document.querySelectorAll('.income-items'),
    inputElems,
    cancelButton = document.getElementById('cancel');

let accumulatedMonth;

const AppData = function (){
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.addIncome = [];
    this.incomeMonth = 0;
    this.expenses = {};
    this.addExpenses = [];
    this.persentDeposit = 0;
    this.moneyDeposit = 0;
    this.deposit = false;
};

const appData = new AppData ();

AppData.prototype.start = function (){
    this.budget = +incomeMonthInput.value;
    
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getAddExpenses();
    this.getAddIncome();

    this.getBudget();
    this.showResult();

    inputElems = document.querySelectorAll('input[type=text]');

    inputElems.forEach(function (item){
        item.setAttribute('disabled', '');
    });

    buttonStart.style.display = 'none';
    cancelButton.style.display = 'block';
};

AppData.prototype.addExpensesBlock = function (){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus1);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3){
        buttonPlus1.style.display = 'none';
    }
};

AppData.prototype.addIncomeBlock = function (){
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, buttonPlus0);
    incomeItem = document.querySelectorAll('.income-items');

    if (incomeItem.length === 3){
        buttonPlus0.style.display = 'none';
    }
};

AppData.prototype.getExpenses = function (){
    expensesItems.forEach(function (item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;

        if (itemExpenses !== '' && cashExpenses !== ''){
            appData.expenses[itemExpenses] = +cashExpenses;
        }
    });
};

AppData.prototype.getIncome = function (){
    incomeItem.forEach(function (item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;

        if (itemIncome !== '' && cashIncome !== ''){
            appData.income[itemIncome] = +cashIncome;
        }
    });
};

AppData.prototype.getAddExpenses =  function(){
    let addExpenses = additionalExpensesInput.value.split(',');
    addExpenses.forEach(function (item){
        item = item.trim();
        if (item !== ''){
            appData.addExpenses.push(item);
        }
    });
};

AppData.prototype.getAddIncome = function(){
    additionalIncomeInput.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
            appData.addIncome.push(itemValue);
        }
    });
};

AppData.prototype.showResult = function (){
    incomeMonth.value = this.budgetMonth;
    budgetDay.value = this.budgetDay;
    expensesMonth.value = this.expensesMonth;
    possibleExpense.value = this.addExpenses.join(',');
    possibleIncome.value = this.addIncome.join(',');
    targetDate.value = Math.ceil(this.getTargetMonth());
    accumulation.value = this.calkPeriod();
};

AppData.prototype.getExpensesMonth = function (){
    let sum = 0;
    for (let item in this.expenses){
        sum += this.expenses[item];
    }
    this.expensesMonth = sum;
};

AppData.prototype.getIncomeMonth = function (){
    let sum = 0;
    for (let item in this.income){
        sum += this.income[item];
    }
    this.incomeMonth = sum;
};

AppData.prototype.getBudget = function (){
    this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function (){
    return target.value / this.budgetMonth;
};

AppData.prototype.getInfoDeposit = function(){
    if (this.deposit){
        do {
            this.persentDeposit = prompt("Какой годовой процент?", '10');
        }
    
        while(this.persentDeposit === null || this.persentDeposit.trim() === '' ||
            !isNaN(this.persentDeposit));

        do {
            this.moneyDeposit = prompt("Какая сумма заложена?", 10000);
        }
    
        while(this.moneyDeposit === null || this.moneyDeposit.trim() === '' || isNaN(this.moneyDeposit));
    }
};

AppData.prototype.calkPeriod = function(){
    return this.budgetMonth * range.value;
};

AppData.prototype.updateRange = function(){
    periodAmount.textContent = event.target.value;
};

AppData.prototype.reset = function (){
    incomeMonth.value = 0;
    budgetDay.value = 0;
    expensesMonth.value = 0;
    possibleExpense.value = 'Наименование';
    possibleIncome.value = 'Наименование';
    targetDate.value = 0;
    accumulation.value = 0;

    inputElems.forEach (function (item){
        item.removeAttribute('disabled');
    });

    buttonStart.style.display = 'block';
    cancelButton.style.display = 'none';
};

AppData.prototype.eventListeners = function (){

    const __this = this;

    buttonStart.addEventListener('click', function (){
        if (incomeMonthInput.value !== '')
        { 
            __this.start();
        }
    });
    
    buttonPlus1.addEventListener('click', __this.addExpensesBlock);
    
    buttonPlus0.addEventListener('click', __this.addIncomeBlock);
    
    range.addEventListener('input', function(){
        accumulation.value = __this.calkPeriod();
    });
    
    range.addEventListener('input', function (event){
        __this.updateRange(event);
    });
    
    cancelButton.addEventListener('click', __this.reset);
};

appData.eventListeners();