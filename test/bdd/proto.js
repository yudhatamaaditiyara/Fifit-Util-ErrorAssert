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
const assert = require('assert');
const proto = require('../../lib/proto');
const mixin = require('../../lib/mixin');

/**
 */
const args = [1, "message", {foo: true}];
const json = JSON.stringify(args);
const raise = (status, message, headers) => {
	throw new Error(JSON.stringify([status, message, headers]))
};

/**
 */
describe('proto', () => {
	/**
	 */
	it('typeof(proto) === "object"', () => {
		assert.ok(proto !== null && typeof proto === 'object');
	});

	/**
	 */
	it('proto.#equal', () => {
		let fn = mixin(raise, proto);
		assert.ok(typeof fn.equal === 'function');
		assert.ok(typeof fn.notEqual === 'function');
		assert.ok(typeof fn.strictEqual === 'function');
		assert.ok(typeof fn.notStrictEqual === 'function');

		fn.equal(0, 0);
		fn.equal(null, null);
		fn.equal(null, undefined);
		fn.notEqual(0, 1);
		fn.strictEqual(0, 0);
		fn.strictEqual(null, null);
		fn.notStrictEqual(null, undefined);
		
		try {
			fn.equal(0, 1, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.notEqual(null, undefined, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.strictEqual(null, undefined, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
		
		try {
			fn.notStrictEqual(null, null, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
	});

	/**
	 */
	it('proto.#lessThan', () => {
		let fn = mixin(raise, proto);
		assert.ok(typeof fn.lessThan === 'function');
		assert.ok(typeof fn.notLessThan === 'function');
		assert.ok(typeof fn.lessThanEqual === 'function');
		assert.ok(typeof fn.notLessThanEqual === 'function');

		fn.lessThan(0, 1);
		fn.notLessThan(1, 0);
		fn.notLessThan(0, 0);
		fn.lessThanEqual(0, 0);
		fn.lessThanEqual(0, 1);
		fn.notLessThanEqual(1, 0);

		try {
			fn.lessThan(1, 0, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.lessThan(0, 0, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.notLessThan(0, 1, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.lessThanEqual(1, 0, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.notLessThanEqual(0, 0, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
		
		try {
			fn.notLessThanEqual(0, 1, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
	});

	/**
	 */
	it('proto.#greaterThan', () => {
		let fn = mixin(raise, proto);
		assert.ok(typeof fn.greaterThan === 'function');
		assert.ok(typeof fn.notGreaterThan === 'function');
		assert.ok(typeof fn.greaterThanEqual === 'function');
		assert.ok(typeof fn.notGreaterThanEqual === 'function');

		fn.greaterThan(1, 0);
		fn.notGreaterThan(0, 1);
		fn.notGreaterThan(0, 0);
		fn.greaterThanEqual(0, 0);
		fn.greaterThanEqual(1, 0);
		fn.notGreaterThanEqual(0, 1);

		try {
			fn.greaterThan(0, 1, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.greaterThan(0, 0, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.notGreaterThan(1, 0, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.greaterThanEqual(0, 1, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.notGreaterThanEqual(0, 0, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try {
			fn.notGreaterThanEqual(1, 0, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
	});

	/**
	 */
	it('proto.#in', () => {
		let fn = mixin(raise, proto);
		assert.ok(typeof fn.in === 'function');
		assert.ok(typeof fn.notIn === 'function');

		fn.in({foo: 1}, 'foo');
		fn.notIn({foo: 1}, 'bar');
		
		try{
			fn.in({foo: 1}, 'bar', ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try{
			fn.notIn({foo: 1}, 'foo', ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
	});

	/**
	 */
	it('proto.#typeOf', () => {
		let fn = mixin(raise, proto);
		assert.ok(typeof fn.typeOf === 'function');
		assert.ok(typeof fn.notTypeOf === 'function');

		fn.typeOf(void 0, 'undefined');
		fn.notTypeOf(void 0, 'object');
		
		try{
			fn.typeOf(0, 'undefined', ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
		
		try{
			fn.notTypeOf(0, 'number', ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
	});

	/**
	 */
	it('proto.#instanceOf', () => {
		let fn = mixin(raise, proto);
		let error = new Error();

		assert.ok(typeof fn.instanceOf === 'function');
		assert.ok(typeof fn.notInstanceOf === 'function');

		fn.instanceOf(error, Error);
		fn.notInstanceOf(error, TypeError);
		
		try{
			fn.instanceOf(error, TypeError, ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
		
		try{
			fn.notInstanceOf(error, Error, ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
	});

	/**
	 */
	it('proto.#objectTypeOf', () => {
		let fn = mixin(raise, proto);
		assert.ok(typeof fn.objectTypeOf === 'function');
		assert.ok(typeof fn.notObjectTypeOf === 'function');

		fn.objectTypeOf([], 'Array');
		fn.objectTypeOf(new RegExp('foo'), 'RegExp');
	
		fn.notObjectTypeOf([], 'Object');
		fn.notObjectTypeOf(new RegExp('foo'), 'Array');
		
		try{
			fn.objectTypeOf([], 'Object', ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
		
		try{
			fn.notObjectTypeOf([], 'Array', ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
	});

	/**
	 */
	it('proto.#hasOwnProperty', () => {
		let fn = mixin(raise, proto);
		assert.ok(typeof fn.hasOwnProperty === 'function');
		assert.ok(typeof fn.notHasOwnProperty === 'function');

		fn.hasOwnProperty({foo: 1}, 'foo');
		fn.notHasOwnProperty({foo: 1}, 'toString');
		
		try{
			fn.hasOwnProperty({foo: 1}, 'toString', ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
		
		try{
			fn.notHasOwnProperty({foo: 1}, 'foo', ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
	});

	/**
	 */
	it('proto.#primitive', () => {
		let fn = mixin(raise, proto);
		assert.ok(typeof fn.null === 'function');
		assert.ok(typeof fn.strictNull === 'function');
		assert.ok(typeof fn.undefined === 'function');
		assert.ok(typeof fn.strictUndefined === 'function');
		assert.ok(typeof fn.true === 'function');
		assert.ok(typeof fn.strictTrue === 'function');
		assert.ok(typeof fn.false === 'function');
		assert.ok(typeof fn.strictFalse === 'function');

		fn.null(null);
		fn.null(undefined);
		fn.strictNull(null);
		fn.undefined(undefined);
		fn.undefined(null);
		fn.strictUndefined(undefined);
		fn.true(true);
		fn.true(1);
		fn.true('1');
		fn.strictTrue(true);
		fn.false(false);
		fn.false(0);
		fn.false('0');
		fn.strictFalse(false);

		try{
			fn.null(0, ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try{
			fn.strictNull(undefined, ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try{
			fn.undefined(0, ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try{
			fn.strictUndefined(null, ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try{
			fn.true({}, ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try{
			fn.strictTrue(1, ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try{
			fn.false({}, ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try{
			fn.strictFalse('0', ...args);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
	});
});