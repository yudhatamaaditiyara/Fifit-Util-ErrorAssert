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
 * @param {Object} proto
 * @throws {IllegalArgumentError}
 * @returns {function}
 */
module.exports = (raise, proto) => {
	if (typeof raise !== 'function') {
		throw new IllegalArgumentError('The raise must be type of function');
	}
	if (Object.prototype.toString.call(proto) !== '[object Object]') {
		throw new IllegalArgumentError('The proto must be type of object');
	}
	/**
	 * @param {any} value
	 * @param {(number|string)} status
	 * @param {string} [message]
	 * @param {Object} [headers]
	 * @returns {void}
	 */
	const ok = (value, status, message, headers) => {
		if (!value) raise(status, message, headers);
	};
	/**
	 * @param {any} value
	 * @param {(number|string)} status
	 * @param {string} [message]
	 * @param {Object} [headers]
	 * @returns {void}
	 */
	const notOk = (value, status, message, headers) => {
		if (!!value) raise(status, message, headers);
	};
	Object.assign(ok, proto, {ok, notOk, throw: raise});
	return ok;
};