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
const methods = module.exports = {};

/**
 * @param {any} aValue
 * @param {any} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
methods.equal = function(aValue, bValue, status, message, headers){
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
methods.strictEqual = function(aValue, bValue, status, message, headers){
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
methods.notEqual = function(aValue, bValue, status, message, headers){
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
methods.notStrictEqual = function(aValue, bValue, status, message, headers){
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
methods.lessThan = function(aValue, bValue, status, message, headers){
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
methods.notLessThan = function(aValue, bValue, status, message, headers){
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
methods.lessThanEqual = function(aValue, bValue, status, message, headers){
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
methods.notLessThanEqual = function(aValue, bValue, status, message, headers){
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
methods.greaterThan = function(aValue, bValue, status, message, headers){
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
methods.notGreaterThan = function(aValue, bValue, status, message, headers){
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
methods.greaterThanEqual = function(aValue, bValue, status, message, headers){
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
methods.notGreaterThanEqual = function(aValue, bValue, status, message, headers){
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
methods.in = function(aValue, bValue, status, message, headers){
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
methods.notIn = function(aValue, bValue, status, message, headers){
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
methods.typeOf = function(aValue, bValue, status, message, headers){
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
methods.notTypeOf = function(aValue, bValue, status, message, headers){
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
methods.instanceOf = function(aValue, bValue, status, message, headers){
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
methods.notInstanceOf = function(aValue, bValue, status, message, headers){
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
methods.objectTypeOf = function(aValue, bValue, status, message, headers){
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
methods.notObjectTypeOf = function(aValue, bValue, status, message, headers){
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
methods.hasOwnProperty = function(aValue, bValue, status, message, headers){
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
methods.notHasOwnProperty = function(aValue, bValue, status, message, headers){
	this.assert(!hasOwnProperty.call(aValue, bValue), status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
methods.null = function(value, status, message, headers){
	this.assert(value == null, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
methods.strictNull = function(value, status, message, headers){
	this.assert(value === null, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
methods.undefined = function(value, status, message, headers){
	this.assert(value == void 0, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
methods.strictUndefined = function(value, status, message, headers){
	this.assert(value === void 0, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
methods.true = function(value, status, message, headers){
	this.assert(value == true, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
methods.strictTrue = function(value, status, message, headers){
	this.assert(value === true, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
methods.false = function(value, status, message, headers){
	this.assert(value == false, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
methods.strictFalse = function(value, status, message, headers){
	this.assert(value === false, status, message, headers);
};