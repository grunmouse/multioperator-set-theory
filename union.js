const Mop = require('@grunmouse/multioperator');

const oper = new Mop('union');

oper.def(Set, Set, (a, b)=>{
	return new Set([...a, ...b]);
});

module.exports = oper;
