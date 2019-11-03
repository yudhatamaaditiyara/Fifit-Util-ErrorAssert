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
const {IllegalArgumentError} = require('ganiyem-error');
const proto = require('../../lib/proto');
const create = require('../../lib/create');

/**
 */
const args = [1, "message", {foo: true}];
const json = JSON.stringify(args);
const raise = (status, message, headers) => {
	throw new Error(JSON.stringify([status, message, headers]))
};

/**
 */
describe('create', () => {
	/**
	 */
	it('typeof(create) === "function"', () => {
		assert.strictEqual(typeof create, 'function');
	});

	/**
	 */
	it('create()', () => {
		let fn = create(raise);
		assert.ok(typeof fn.ok === 'function');
		assert.ok(typeof fn.notOk === 'function');
		assert.ok(typeof fn.throw === 'function');

		Object.keys(proto).forEach(name => {
			assert.ok(typeof fn[name] === 'function');
			assert.strictEqual(fn[name], proto[name]);
		});

		try{
			fn.ok(0, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
		
		try{
			fn.notOk(1, ...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try{
			fn.throw(...args);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}
	});

	/**
	 */
	it('create()...catch(e)', () => {
		try{
			create();
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof IllegalArgumentError);
		}
		try{
			create(null);
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof IllegalArgumentError);
		}
	});
});