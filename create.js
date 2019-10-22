/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * @var {Object}
 */
const method = {};

/**
 * @inheritdoc
 */
method.equal = function(aValue, bValue, status, message, headers){
	this.assert(aValue == bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.strictEqual = function(aValue, bValue, status, message, headers){
	this.assert(aValue === bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notEqual = function(aValue, bValue, status, message, headers){
	this.assert(aValue != bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notStrictEqual = function(aValue, bValue, status, message, headers){
	this.assert(aValue !== bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.lessThan = function(aValue, bValue, status, message, headers){
	this.assert(aValue < bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notLessThan = function(aValue, bValue, status, message, headers){
	this.assert(!(aValue < bValue), status, message, headers);
};

/**
 * @inheritdoc
 */
method.lessThanEqual = function(aValue, bValue, status, message, headers){
	this.assert(aValue <= bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notLessThanEqual = function(aValue, bValue, status, message, headers){
	this.assert(!(aValue <= bValue), status, message, headers);
};

/**
 * @inheritdoc
 */
method.greaterThan = function(aValue, bValue, status, message, headers){
	this.assert(aValue > bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notGreaterThan = function(aValue, bValue, status, message, headers){
	this.assert(!(aValue > bValue), status, message, headers);
};

/**
 * @inheritdoc
 */
method.greaterThanEqual = function(aValue, bValue, status, message, headers){
	this.assert(aValue >= bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notGreaterThanEqual = function(aValue, bValue, status, message, headers){
	this.assert(!(aValue >= bValue), status, message, headers);
};

/**
 * @inheritdoc
 */
method.in = function(aValue, bValue, status, message, headers){
	this.assert(bValue in aValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notIn = function(aValue, bValue, status, message, headers){
	this.assert(!(bValue in aValue), status, message, headers);
};

/**
 * @inheritdoc
 */
method.typeOf = function(aValue, bValue, status, message, headers){
	this.assert(typeof aValue === bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notTypeOf = function(aValue, bValue, status, message, headers){
	this.assert(typeof aValue !== bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.instanceOf = function(aValue, bValue, status, message, headers){
	this.assert(aValue instanceof bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notInstanceOf = function(aValue, bValue, status, message, headers){
	this.assert(!(aValue instanceof bValue), status, message, headers);
};

/**
 * @inheritdoc
 */
method.objectTypeOf = function(aValue, bValue, status, message, headers){
	this.assert(Object.prototype.toString.call(aValue) === bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notObjectTypeOf = function(aValue, bValue, status, message, headers){
	this.assert(Object.prototype.toString.call(aValue) !== bValue, status, message, headers);
};

/**
 * @inheritdoc
 */
method.hasOwnProperty = function(aValue, bValue, status, message, headers){
	this.assert(Object.prototype.hashOwnProperty.call(aValue, bValue), status, message, headers);
};

/**
 * @inheritdoc
 */
method.notHasOwnProperty = function(aValue, bValue, status, message, headers){
	this.assert(!Object.prototype.hashOwnProperty.call(aValue, bValue), status, message, headers);
};

/**
 * @inheritdoc
 */
method.null = function(value, status, message, headers){
	this.assert(value == null, status, message, headers);
};

/**
 * @inheritdoc
 */
method.strictNull = function(value, status, message, headers){
	this.assert(value === null, status, message, headers);
};

/**
 * @inheritdoc
 */
method.undefined = function(value, status, message, headers){
	this.assert(value == void 0, status, message, headers);
};

/**
 * @inheritdoc
 */
method.strictUndefined = function(value, status, message, headers){
	this.assert(value === void 0, status, message, headers);
};

/**
 * @inheritdoc
 */
method.true = function(value, status, message, headers){
	this.assert(value == !0, status, message, headers);
};

/**
 * @inheritdoc
 */
method.strictTrue = function(value, status, message, headers){
	this.assert(value === !0, status, message, headers);
};

/**
 * @inheritdoc
 */
method.false = function(value, status, message, headers){
	this.assert(value == !1, status, message, headers);
};

/**
 * @inheritdoc
 */
method.strictFalse = function(value, status, message, headers){
	this.assert(value === !1, status, message, headers);
};

/**
 * @inheritdoc
 */
method.ok = function(value, status, message, headers){
	this.assert(value, status, message, headers);
};

/**
 * @inheritdoc
 */
method.notOk = function(value, status, message, headers){
	this.assert(!value, status, message, headers);
};

/**
 * @param {function} throws
 * @throws {Error}
 * @returns {function}
 */
function create(raise){
	if (typeof raise !== "function") {
		throw new Error("The raise must be type of function");
	}
	const assert = (value, status, message, headers) => {
		if (!value) raise(status, message, headers);
	};
	const strict = (value, status, message, headers) => {
		if (value === false) raise(status, message, headers);
	};
	extend(assert, {throw: raise, assert: assert, strict: strict});
	extend(assert, method);
	return assert;
}

/**
 * @param {function} assert
 * @param {Object} props
 * @returns {function}
 */
function extend(assert, props){
	Object.keys(props).forEach(name => Object.defineProperty(assert, name, {
		value: props[name], configurable: true, enumerable: true, writable: true
	}));
}

/**
 * @+
 */
module.exports = create;