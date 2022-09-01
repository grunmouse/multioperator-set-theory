
const opers = [
	require('./union.js'),
	require('./intersection.js'),
	require('./difference.js'),
	require('./complement.js')
	
];

const operators = {};
const symbols = {};

opers.forEach((oper)=>{
	let name = oper.name;
	let NAME = name.toUpperCase();
	let key = oper.key;
	operators[name] = oper;
	symbols[NAME] = key;
});




module.exports = {
	operators,
	symbols
};