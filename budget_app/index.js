'use strict';

let buttonStart = document.getElementById('start');
let buttonPlus0 = document.getElementsByTagName('button')[0];
let buttonPlus1 = document.getElementsByTagName('button')[1];
let checkBox = document.querySelector('#deposit-check');

let additionalIncomeInput0 = document.querySelectorAll(".additional_income-item")[0];
let additionalIncomeInput1 = document.querySelectorAll(".additional_income-item")[1];

let incomeMonth = document.getElementsByClassName('budget_month-value');
let budgetDay = document.getElementsByClassName('budget_day-value');
let expensesMonth = document.getElementsByClassName('expenses_month-value');
let possibleIncome = document.getElementsByClassName('additional_income-value');
let possibleExpense = document.getElementsByClassName('additional_expenses-value');
let accumulation = document.getElementsByClassName('income_period-value');
let targetDate = document.getElementsByClassName('target_month-value');

let incomeMonthInput = document.querySelector('.salary-amount');

let additionalIncomeTitle = document.querySelector('.income-title');
let additionalIncomeAmount = document.querySelector('.income-amount');

let mandatoryExpensesTitle = document.querySelector('.expenses-title');
let mandatoryExpensesAmount = document.querySelector('.expenses-amount');

let additionalExpensesInput = document.querySelector(".additional_expenses-item");

let target = document.querySelector('.target-amount');

let range = document.querySelector('.period-select');