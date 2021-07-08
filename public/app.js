function getNumber(num){
	var result = document.getElementById("result");
	result.value += num;

	}

	function clearResult(){
		var result = document.getElementById("result");
        result.value = "";
	}

	function backSpace(){
		var result = document.getElementById("result");
		result.value = document.getElementById("result").value.substring(0, document.getElementById("result").value.length - 1);
		
	}
	function getResult(){
		var result = document.getElementById("result");
	    result.value = eval(result.value);
		
	}