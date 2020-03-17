let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};


function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
			b = prompt('Во сколько это обойдется?', '');
		
		if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
			console.log('done');
			appData.expenses[a] = b;
		} else {
			i--;
		}
	}
}
chooseExpenses();


function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();



function detectLevel() {
	switch(true)  {
		case (appData.moneyPerDay < 200):
			console.log('Минимальный уровень достатка');
			break;
		case (appData.moneyPerDay <= 2000 && appData.moneyPerDay > 201):
			console.log('Средний уровень достатка');
			break;
		case (appData.moneyPerDay > 2000):
			console.log('Высокий уровень достатка');
			break;
		default:
			console.log('Что-то пошло не так');
			break;
	}
}
detectLevel();



function checkSavings() {
	if (appData.savings === true) {
		let save = +prompt('Введите сумму ваших накоплений'),
			percent = +prompt('Под какой процент?');

		appData.monthIncome = (save / 100 / 12 * percent).toFixed();
		alert('Ваша прибыль составит: ' + appData.monthIncome);
	} 
}
checkSavings();


function detectLevel() {
	for (let i = 0; i < 3; i++) {
		let a = prompt('Статья необязательных расходов?', '');
		
		if (typeof(a) != null && a != '') {
			console.log('done2');
			appData.optionalExpenses[i] = a;
		} else {
			i--;
		}
	}
}


