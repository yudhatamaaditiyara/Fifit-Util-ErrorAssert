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

const {IllegalArgumentError} = require('ganiyem-error');

/**
 * @param {function} raise
 * @throws {IllegalArgumentError}
 * @returns {function}
 */
function create(raise){
	if (typeof raise !== "function") {
		throw new IllegalArgumentError("The raise must be type of function");
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