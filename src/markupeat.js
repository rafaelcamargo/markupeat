var markupeat = function(){

	var input, output, repetition;

	function init(params){
		storeParams(params);
		buildOutput();
		printOutput();
	}

	function storeParams(params){
		input = document.getElementById(params.input);
		output = document.getElementById(params.output);
	}

	function buildOutput(){
		repetition = [];
		for (var i = 0; i < 30; i++)
			repetition.push(getRepeatedItem(i));
		repetition = repetition.join('\n\n');
	}

	function getRepeatedItem(i){
		var start = getMarkupBeforeTestName();
		var testName = getTestName(start);
		var end = input.value.replace(start+testName, '');
		return start+testName+i+end;
	}

	function getMarkupBeforeTestName(){
		return input.value.substring(0, input.value.indexOf('name="')+6);
	}

	function getTestName(start){
		var testName = input.value.replace(start, '');
		var testNameEnd = testName.indexOf('"');
		return testName.substring(0, testNameEnd);
	}

	function printOutput(){
		output.value = repetition;
		output.focus();
		output.select();
	}

	function setCleaner(id){
		var el = document.getElementById(id);
		el.addEventListener('click', clean);
		el.addEventListener('blur', clean);
	}

	function clean(evt){
		var el = evt.target;
		if(isShowingPlaceholder(el))
			setElementValue(el, '');
		else if(hasNoValue(el))
			setElementValue(el, el.innerHTML);
	}

	function isShowingPlaceholder(el){
		return el.value.trim() === el.innerHTML.trim();
	}

	function hasNoValue(el){
		return el.value === '';
	}

	function setElementValue(el, val){
		el.value = val;
	}
	
	return {
		init : init,
		setCleaner : setCleaner,
		clean : clean
	};
}();