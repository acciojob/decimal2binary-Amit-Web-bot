function decimalToBinary(num) {
  //Write you code here
	let ans = []
	while(num>0){
		ans.push(num%2)
		num = num/2
	}
	ans.reverse();
	let fin = ans.join("")
  return fin
}

window.decimalToBinary = decimalToBinary;
