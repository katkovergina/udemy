let startCalc = document.querySelector('#start'),
	budgetValue = document.querySelector('.budget-value'),
	dayBudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalExpensesValue = document.querySelectorAll('.optionalexpenses-item'),
	incomeValue = document.querySelector('.income-value'),
	monthSavingsValue = document.querySelector('.monthsavings-value'),
	yearSavingsValue = document.querySelector('.yearsavings-value'),
	expensesItem = document.querySelectorAll('.expenses-item'),
	buttons = document.querySelectorAll('button'),
	approveExpenses = document.querySelector('.expenses-item-btn'),
	approveOptionalExpenses = document.querySelector('.optionalexpenses-btn'),
	calcCount = document.querySelector('.count-budget-btn'),
	inputExpenses = document.querySelector('.expenses-value'),
	inputOptionalExpenses = document.querySelector('.optionalexpenses-value'),
	inputIncome = document.querySelector('.choose-income'),
	inputSavings = document.querySelector('#savings'),
	inputSum = document.querySelector('.choose-sum'),
	inputPercent = document.querySelector('.choose-percent'),
	inputYear = document.querySelector('.year-value'),
	inputMonth = document.querySelector('.month-value'),
	inputDay = document.querySelector('.day-value');

let money, time;

approveExpenses.disabled = true;
approveOptionalExpenses.disabled = true;
calcCount.disabled = true;


startCalc.addEventListener('click', function() {
	
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt("Ваш бюджет на месяц?", '');
	
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
	
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();

	inputYear.value = new Date(Date.parse(time)).getFullYear();
	inputMonth.value = new Date(Date.parse(time)).getMonth() + 1;
	inputDay.value = new Date(Date.parse(time)).getDate();

	approveExpenses.disabled = false;
	approveOptionalExpenses.disabled = false;
	calcCount.disabled = false;

});

let sumExpenses = 0;

approveExpenses.addEventListener('click', function() {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
		
		if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
			sum += +b;
			appData[a] = b;
		} else {
			i--;
		}
		sumExpenses = +sum;
		inputExpenses.textContent = sum;
	}

});

approveOptionalExpenses.addEventListener('click', function() {
	let optional;
	for (let i = 0; i < optionalExpensesValue.length; i++) {
		optional = optionalExpensesValue[i].value;

		appData.optionalExpenses[i] = optional;
		inputOptionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
		
	}
});

calcCount.addEventListener('click', function() {
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - sumExpenses)/30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = 'Низкий уровень дохода';
		} else  if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
				levelValue.textContent = 'Средний уровень дохода';
			} else if (appData.moneyPerDay > 2000) {
					levelValue.textContent = 'Высокий уровень дохода';
				} else {
					levelValue.textContent = 'Error';
				}
		}
	else {
		dayBudgetValue.textContent = 'Error';
	}
});

inputIncome.addEventListener('input', function() {
	let itemsIncome = inputIncome.value;
	appData.income = itemsIncome.split(' ');
	incomeValue.textContent = appData.income;
});

inputSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}

});

inputSum.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +inputSum.value,
			percent = +inputPercent.value;
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

inputPercent.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +inputSum.value,
			percent = +inputPercent.value;
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};
	


