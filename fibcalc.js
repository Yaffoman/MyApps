
function fibcalc(var number){

	var j=0;
	var n=0;
	var n1=1;
	var fib=1;
	var bigStr=0 + ", ";




	while (j<number){	
		fib=n+n1;
		n=n1;
		n1=fib;
		bigStr=bigStr + fib + ", ";
		j++;

	}

	return bigStr;
}






}