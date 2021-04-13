'use strict';

let buttonStart = document.getElementById('start'),
    buttonPlus0 = document.getElementsByTagName('button')[0],
    buttonPlus1 = document.getElementsByTagName('button')[1],
    checkBox = document.querySelector('#deposit-check'),

    additionalIncomeInput0 = document.querySelectorAll(".additional_income-item")[0],
    additionalIncomeInput1 = document.querySelectorAll(".additional_income-item")[1],

    incomeMonth = document.getElementsByClassName('budget_month-value'),
    budgetDay = document.getElementsByClassName('budget_day-value'),
    expensesMonth = document.getElementsByClassName('expenses_month-value'),
    possibleIncome = document.getElementsByClassName('additional_income-value'),
    possibleExpense = document.getElementsByClassName('additional_expenses-value'),
    accumulation = document.getElementsByClassName('income_period-value'),
    targetDate = document.getElementsByClassName('target_month-value'),

    incomeMonthInput = document.querySelector('.salary-amount'),

    additionalIncomeTitle = document.querySelector('.income-title'),
    additionalIncomeAmount = document.querySelector('.income-amount'),

    mandatoryExpensesTitle = document.querySelector('.expenses-title'),
    mandatoryExpensesAmount = document.querySelector('.expenses-amount'),

    additionalExpensesInput = document.querySelector(".additional_expenses-item"),

    target = document.querySelector('.target-amount'),

    range = document.querySelector('.period-select');