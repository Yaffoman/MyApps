function multiply(number) {


	var x;
	var y;

	var bigStr="";


	for (y = 1; y <= number; y++) {
		for (x = 1; x <= number; x++) {

			var str = x*y;			
			bigStr = bigStr + str + " ";
			
			
			
		

			
		}

		
		bigStr = bigStr + "\n";
	}
	
	return bigStr;
}	

