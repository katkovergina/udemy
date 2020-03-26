// let money, time;

// function start() {
// 	money = +prompt("Ваш бюджет на месяц?", '');
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');

// 	while (isNaN(money) || money == "" || money == null) {
// 		money = +prompt("Ваш бюджет на месяц?", '');
// 	}
// }
// start();


// let appData = {
// 	budget: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData: time,
// 	savings: true,
// 	chooseExpenses: function() {
// 		for (let i = 0; i < 2; i++) {
// 			let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
// 				b = prompt('Во сколько это обойдется?', '');
			
// 			if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
// 				console.log('done');
// 				appData.expenses[a] = b;
// 			} else {
// 				i--;
// 			}
// 		}
// 	},
// 	detectDayBudget: function() {
// 		appData.moneyPerDay = (appData.budget / 30).toFixed();
// 		alert('Ежедневный бюджет: ' + appData.moneyPerDay);
// 	},
// 	detectLevelBudget: function() {
// 		switch(true)  {
// 			case (appData.moneyPerDay < 200):
// 				console.log('Минимальный уровень достатка');
// 				break;
// 			case (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 201):
// 				console.log('Средний уровень достатка');
// 				break;
// 			case (appData.moneyPerDay > 2000):
// 				console.log('Высокий уровень достатка');
// 				break;
// 			default:
// 				console.log('Что-то пошло не так');
// 				break;
// 		}
// 	},
// 	checkSavings: function() {
// 		if (appData.savings === true) {
// 			let save = +prompt('Введите сумму ваших накоплений'),
// 				percent = +prompt('Под какой процент?');
	
// 			appData.monthIncome = (save / 100 / 12 * percent).toFixed();
// 			alert('Ваша прибыль составит: ' + appData.monthIncome);
// 		} 
// 	},
// 	detectLevel: function() {
// 		for (let i = 0; i < 3; i++) {
// 			let a = prompt('Статья необязательных расходов?', '');
			
// 			if (typeof(a) != null && a != '') {
// 				console.log('done2');
// 				appData.optionalExpenses[i] = a;
// 			} else {
// 				i--;
// 			}
// 		}
// 	},
// 	chooseIncome: function() {
// 		let item = prompt('Перечислите через запятую источники дополнительного дохода', '');
// 		if (typeof(item) != 'string' || item == '' || typeof(item) == null) {
// 			item = prompt('Перечислите через пробел источники дополнительного дохода', '');
// 		} else {
// 			appData.income = item.split(' ');
// 			// appData.income.push(prompt('Может что-то еще?'), '');
// 			appData.income.sort();
// 		}

// 		appData.income.forEach(function(itemMassive, i, mass) {
// 			alert((i+1) + ' способ заработка: ' + itemMassive);
// 		});
// 	}
// };


// appData.chooseIncome();


// for (let key in appData){	
// 	console.log('Наша программа включает в себя данные: Свойство ' + key + ' имеет значение - ' + appData[key]);
// }




let startCalc = document.querySelector('#start'),
	budgetValue = document.querySelector('.budget-value'),
	daybudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthsavingsValue = document.querySelector('.monthsavings-value'),
	yearsavingsValue = document.querySelector('.yearsavings-value'),
	expensesItem = document.querySelectorAll('.expenses-item'),
	buttons = document.querySelectorAll('button'),
	approveExpenses = buttons[0],
	approveOptionalExpenses = buttons[1],
	calcCount = buttons[2],
	inputExpenses = document.querySelectorAll('.expenses-item'),
	inputOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
	inputIncome = document.querySelector('choose-income'),
	inputSavings = document.querySelector('#savings'),
	inputSum = document.querySelector('.choose-sum'),
	inputPercent = document.querySelector('.choose-percent'),
	inputYear = document.querySelector('.year-value'),
	inputMonth = document.querySelector('.month-value'),
	inputDay = document.querySelector('.day-value');


	
