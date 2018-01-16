function factorial(number) {



	var f=1;
	var number;
	var n;
	var bigStr=1+", ";




	for (n=1; n<=number;n++){

		f = f * n;
		bigStr+=f+", "
	}

	return bigStr;

}	

