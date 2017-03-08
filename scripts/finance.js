//Simple interest calculator
function simpleCalc() {
	var sCalc = document.getElementById('princ').value * document.getElementById('percent').value * document.getElementById('time').value; 
	document.getElementById('answer').innerHTML = '$' + ' ' + sCalc;
}

//Profit Calculator
function profitCalc() {
	var pCalc = document.getElementById('moneymade').value - document.getElementById('moneyspent').value;
	document.getElementById('profitAnswer').innerHTML = '$' + ' ' + pCalc;
}

//Budget Calculator
function budgetCalc() {
	var bCalc= document.getElementsByClassName('budgetInput').value + 0;
	document.getElementById('bAnswer').innerHTML = '$' + ' ' + bCalc;
}

//Event listener for the Add button on the budget page

var addBtn = document.getElementById('addButton');
	addBtn.addEventListener('click', function() {
		var vnode = document.createElement('input');
		vnode.className = "budgetInput";
		vnode.placeholder = "$ Amount";
		var list = document.getElementById('list');
		list.appendChild(vnode);
	});

