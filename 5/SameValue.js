'use strict';

var GetIntrinsic = require('../GetIntrinsic');
var $isNaN = require('../helpers/isNaN');

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = GetIntrinsic('%Object.is%', true) || function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};
