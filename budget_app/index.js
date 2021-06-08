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
    incomeItems = document.querySelectorAll('.income-items'),
    inputElems,
    cancelButton = document.getElementById('cancel');

let accumulatedMonth;

class AppData {
    constructor(){
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
    }

    start (){
        this.budget = +incomeMonthInput.value;
        
        this.getExpInc();
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
    }

    addExpensesBlock (){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus1);
        expensesItems = document.querySelectorAll('.expenses-items');
    
        if (expensesItems.length === 3){
            buttonPlus1.style.display = 'none';
        }
    }
    
    addIncomeBlock (){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonPlus0);
        incomeItems = document.querySelectorAll('.income-items');
    
        if (incomeItems.length === 3){
            buttonPlus0.style.display = 'none';
        }
    }

    getExpInc (){
        const count = item => {
            const startStr = item.className.split('-')[0];
            const itemTitle = item.querySelector(`.${startStr}-title`).value;
            const itemAmount = item.querySelector(`.${startStr}-amount`).value;
            if (itemTitle !== '' && itemAmount !== ''){
                this[startStr][itemTitle] = +itemAmount;
            }
        };

        expensesItems.forEach(count);
        incomeItems.forEach(count);
    }
    
    getAddExpenses (){
        let addExpenses = additionalExpensesInput.value.split(',');
        addExpenses.forEach(function (item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    }
    
    getAddIncome (){
        additionalIncomeInput.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    }
    
    showResult (){
        incomeMonth.value = this.budgetMonth;
        budgetDay.value = this.budgetDay;
        expensesMonth.value = this.expensesMonth;
        possibleExpense.value = this.addExpenses.join(',');
        possibleIncome.value = this.addIncome.join(',');
        targetDate.value = Math.ceil(this.getTargetMonth());
        accumulation.value = this.calkPeriod();
    }
    
    getExpensesMonth (){
        let sum = 0;
        for (let item in this.expenses){
            sum += this.expenses[item];
        }
        this.expensesMonth = sum;
    }
    
    getIncomeMonth (){
        let sum = 0;
        for (let item in this.income){
            sum += this.income[item];
        }
        this.incomeMonth = sum;
    }
    
    getBudget (){
        this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    }
    
    getTargetMonth (){
        return target.value / this.budgetMonth;
    }
    
    getInfoDeposit (){
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
    }
    
    calkPeriod (){
        return this.budgetMonth * range.value;
    }
    
    updateRange (){
        periodAmount.textContent = event.target.value;
    }
    
    reset (){
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
    }
    
    eventListeners (){
    
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
    }

}


const appData = new AppData ();
appData.eventListeners();