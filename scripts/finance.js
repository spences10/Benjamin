//Simple interest calculator
function simpleCalc() {
	var sCalc = document.getElementById('princ').value * document.getElementById('percent').value * document.getElementById('time').value; 
	document.getElementById('answer').innerHTML = '$' + ' ' + sCalc;
}	

function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}
