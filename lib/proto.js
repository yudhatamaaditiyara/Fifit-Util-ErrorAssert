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
const proto = module.exports = {};

/**
 * proto.ok()
 * proto.notOk()
 * proto.throw()
 */

/**
 * @param {any} aValue
 * @param {any} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.equal = function(aValue, bValue, status, message, headers){
  this.ok(aValue == bValue, status, message, headers);
};

/**
 * @param {any} aValue
 * @param {any} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.strictEqual = function(aValue, bValue, status, message, headers){
  this.ok(aValue === bValue, status, message, headers);
};

/**
 * @param {any} aValue
 * @param {any} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notEqual = function(aValue, bValue, status, message, headers){
  this.ok(aValue != bValue, status, message, headers);
};

/**
 * @param {any} aValue
 * @param {any} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notStrictEqual = function(aValue, bValue, status, message, headers){
  this.ok(aValue !== bValue, status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.lessThan = function(aValue, bValue, status, message, headers){
  this.ok(aValue < bValue, status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notLessThan = function(aValue, bValue, status, message, headers){
  this.ok(!(aValue < bValue), status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.lessThanEqual = function(aValue, bValue, status, message, headers){
  this.ok(aValue <= bValue, status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notLessThanEqual = function(aValue, bValue, status, message, headers){
  this.ok(!(aValue <= bValue), status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.greaterThan = function(aValue, bValue, status, message, headers){
  this.ok(aValue > bValue, status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notGreaterThan = function(aValue, bValue, status, message, headers){
  this.ok(!(aValue > bValue), status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.greaterThanEqual = function(aValue, bValue, status, message, headers){
  this.ok(aValue >= bValue, status, message, headers);
};

/**
 * @param {(number|string)} aValue
 * @param {(number|string)} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notGreaterThanEqual = function(aValue, bValue, status, message, headers){
  this.ok(!(aValue >= bValue), status, message, headers);
};

/**
 * @param {(Object)} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.in = function(aValue, bValue, status, message, headers){
  this.ok(bValue in aValue, status, message, headers);
};

/**
 * @param {Object} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notIn = function(aValue, bValue, status, message, headers){
  this.ok(!(bValue in aValue), status, message, headers);
};

/**
 * @param {any} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.typeOf = function(aValue, bValue, status, message, headers){
  this.ok(typeof aValue === bValue, status, message, headers);
};

/**
 * @param {any} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notTypeOf = function(aValue, bValue, status, message, headers){
  this.ok(typeof aValue !== bValue, status, message, headers);
};

/**
 * @param {Object} aValue
 * @param {function} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.instanceOf = function(aValue, bValue, status, message, headers){
  this.ok(aValue instanceof bValue, status, message, headers);
};

/**
 * @param {Object} aValue
 * @param {function} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notInstanceOf = function(aValue, bValue, status, message, headers){
  this.ok(!(aValue instanceof bValue), status, message, headers);
};

/**
 * @param {any} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.objectTypeOf = function(aValue, bValue, status, message, headers){
  this.ok(toString.call(aValue) === `[object ${bValue}]`, status, message, headers);
};

/**
 * @param {any} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notObjectTypeOf = function(aValue, bValue, status, message, headers){
  this.ok(toString.call(aValue) !== `[object ${bValue}]`, status, message, headers);
};

/**
 * @param {Object} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.hasOwnProperty = function(aValue, bValue, status, message, headers){
  this.ok(hasOwnProperty.call(aValue, bValue), status, message, headers);
};

/**
 * @param {Object} aValue
 * @param {string} bValue
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.notHasOwnProperty = function(aValue, bValue, status, message, headers){
  this.ok(!hasOwnProperty.call(aValue, bValue), status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.null = function(value, status, message, headers){
  this.ok(value == null, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.strictNull = function(value, status, message, headers){
  this.ok(value === null, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.undefined = function(value, status, message, headers){
  this.ok(value == void 0, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.strictUndefined = function(value, status, message, headers){
  this.ok(value === void 0, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.true = function(value, status, message, headers){
  this.ok(value == true, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.strictTrue = function(value, status, message, headers){
  this.ok(value === true, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.false = function(value, status, message, headers){
  this.ok(value == false, status, message, headers);
};

/**
 * @param {any} value
 * @param {(number|string)} status
 * @param {string} [message]
 * @param {Object} [headers]
 * @returns {void}
 */
proto.strictFalse = function(value, status, message, headers){
  this.ok(value === false, status, message, headers);
};