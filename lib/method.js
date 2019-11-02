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

const toString = {}.toString;
const hasOwnProperty = {}.hasOwnProperty;

/**
 * @+
 */
const method = module.exports = {};

/**
 * @param {any} aValue
 * @param {any} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.equal = function(aValue, bValue, status, message, headers){
	this.assert(aValue == bValue, status, message, headers);
};

/**
 * @param {any} aValue
 * @param {any} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.strictEqual = function(aValue, bValue, status, message, headers){
	this.assert(aValue === bValue, status, message, headers);
};

/**
 * @param {any} aValue
 * @param {any} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notEqual = function(aValue, bValue, status, message, headers){
	this.assert(aValue != bValue, status, message, headers);
};

/**
 * @param {any} aValue
 * @param {any} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notStrictEqual = function(aValue, bValue, status, message, headers){
	this.assert(aValue !== bValue, status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.lessThan = function(aValue, bValue, status, message, headers){
	this.assert(aValue < bValue, status, message, headers);
};
/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notLessThan = function(aValue, bValue, status, message, headers){
	this.assert(!(aValue < bValue), status, message, headers);
};
/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.lessThanEqual = function(aValue, bValue, status, message, headers){
	this.assert(aValue <= bValue, status, message, headers);
};
/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notLessThanEqual = function(aValue, bValue, status, message, headers){
	this.assert(!(aValue <= bValue), status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.greaterThan = function(aValue, bValue, status, message, headers){
	this.assert(aValue > bValue, status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notGreaterThan = function(aValue, bValue, status, message, headers){
	this.assert(!(aValue > bValue), status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.greaterThanEqual = function(aValue, bValue, status, message, headers){
	this.assert(aValue >= bValue, status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notGreaterThanEqual = function(aValue, bValue, status, message, headers){
	this.assert(!(aValue >= bValue), status, message, headers);
};

/**
 * @param {(Object)} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.in = function(aValue, bValue, status, message, headers){
	this.assert(bValue in aValue, status, message, headers);
};

/**
 * @param {Object} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notIn = function(aValue, bValue, status, message, headers){
	this.assert(!(bValue in aValue), status, message, headers);
};

/**
 * @param {any} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.typeOf = function(aValue, bValue, status, message, headers){
	this.assert(typeof aValue === bValue, status, message, headers);
};

/**
 * @param {any} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notTypeOf = function(aValue, bValue, status, message, headers){
	this.assert(typeof aValue !== bValue, status, message, headers);
};

/**
 * @param {Object} aValue
 * @param {function} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.instanceOf = function(aValue, bValue, status, message, headers){
	this.assert(aValue instanceof bValue, status, message, headers);
};

/**
 * @param {Object} aValue
 * @param {function} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notInstanceOf = function(aValue, bValue, status, message, headers){
	this.assert(!(aValue instanceof bValue), status, message, headers);
};

/**
 * @param {any} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.objectTypeOf = function(aValue, bValue, status, message, headers){
	this.assert(toString.call(aValue) === `[object ${bValue}]`, status, message, headers);
};

/**
 * @param {any} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notObjectTypeOf = function(aValue, bValue, status, message, headers){
	this.assert(toString.call(aValue) !== `[object ${bValue}]`, status, message, headers);
};

/**
 * @param {Object} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.hasOwnProperty = function(aValue, bValue, status, message, headers){
	this.assert(hasOwnProperty.call(aValue, bValue), status, message, headers);
};

/**
 * @param {Object} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.notHasOwnProperty = function(aValue, bValue, status, message, headers){
	this.assert(!hasOwnProperty.call(aValue, bValue), status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.null = function(value, status, message, headers){
	this.assert(value == null, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.strictNull = function(value, status, message, headers){
	this.assert(value === null, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.undefined = function(value, status, message, headers){
	this.assert(value == void 0, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.strictUndefined = function(value, status, message, headers){
	this.assert(value === void 0, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.true = function(value, status, message, headers){
	this.assert(value == true, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.strictTrue = function(value, status, message, headers){
	this.assert(value === true, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.false = function(value, status, message, headers){
	this.assert(value == false, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
method.strictFalse = function(value, status, message, headers){
	this.assert(value === false, status, message, headers);
};