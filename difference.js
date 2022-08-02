const Mop = require('@grunmouse/multioperator');

const oper = new Mop('difference');

oper.def(Set, Set, (a, b)=>{
	return new Set([...a].filter(x => !b.has(x)));
});

module.exports = oper;
