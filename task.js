let input = [{from:"спб", to:"минск"},{from:"киев", to:"новосиб"},{from:"череповец", to:"москва"},{from:"минск", to:"киев"},{from:"москва", to:"спб"}];
let output = [];
let buf = [];

function main(input, output, buf) {
  let	 lastElement = findLastElement(input,input[0].to, 0);
	//console.log("Last Element: " + lastElement.from + " " + lastElement.to);
  
  let	 prevElements = findPreviousElements(input, buf, lastElement.from).reverse();

  output = output.concat(prevElements);
  output.push(lastElement);
  return output;
}

function findLastElement(input, last, pos) {
	for (let i=0; i < input.length; i++) {
  	if (last == input[i].from) {
      pos++;
      //console.log("rec" + input[i]);
    	findLastElement(input,input[pos].to, pos);
    }
    else {
    	if (i==input.length-1) {
      	//console.log("res" + input[pos].from + "  " + input[pos].to);
      	return input[pos];
      }
      else {
      	//console.log("cont" + input[i]);
      	continue;
      }
    }
  }
}



function findPreviousElements(input, buf, prev) {
  for (let i=0; i < input.length; i++) {
  	if (prev == input[i].to) {
    	buf.push(input[i]);
    	//console.log("add " + input[i].from + " " + input[i].to);
    	if (buf.length>=input.length-1) {
    		return buf;
    	}
    	else {
     		findPreviousElements(input, buf, input[i].from);
    	}
    }
  }
  return buf;
}

console.log(main(input, output, buf));
