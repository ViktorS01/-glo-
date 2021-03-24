let money = 2600;
let income = "% от банка";
let addExpenses = "проезд, подарки, интернет, лекарства";
let deposit = false;
let mission = 500000;
let period = 12;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log('Период равен ' + period + ' месяцев');
console.log("Цель заработать " +  mission +  " рублей/долларов/гривен/юани");

console.log(addExpenses.toLowerCase().split(', '));
console.log(money / 12);

//second the task

let num = 266219;
let res = 1;
let numStr = num.toString();

for (let i = 0; i < numStr.length; i++){
    res *= Number(numStr[i]);
}

console.log(res);
console.log(res ** 3);
let str = String(res**3);
console.log(str.substr(0, 2));