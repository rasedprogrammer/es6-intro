// Function Declaration
function add(first, second) {
	const sum = first + second;
	return sum;
}
// Function Expression
const add1 = function (first, second) {
	const sum = first + second;
	return sum;
};
// Function Expression with anonymous  function
const add2 = function (first, second) {
	const sum = first + second;
	return sum;
};

// Function Expression short version
const add3 = function (first, second) {
	return first + second;
};
// Arrow Function
const add4 = (first, second) => first + second;

const sumTotal = add(20, 30);
console.log(sumTotal);
