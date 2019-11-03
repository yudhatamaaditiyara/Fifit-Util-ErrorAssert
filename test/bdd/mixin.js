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
const mixin = require('../../lib/mixin');

/**
 */
const args = [1, "message", {foo: true}];
const json = JSON.stringify(args);
const createRaise = () =>  (status, message, headers) => {
	throw new Error(JSON.stringify([status, message, headers]))
};
const createProto = () => ({
	foo(){
		this.ok(false, ...args);
	},
	bar(){
		this.notOk(true, ...args);
	},
	baz(){
		this.ok(true);
	},
	buz(){
		this.notOk(false);
	}
});

/**
 */
describe('mixin', () => {
	/**
	 */
	it('typeof(mixin) === "function"', () => {
		assert.strictEqual(typeof mixin, 'function');
	});

	/**
	 */
	it('mixin()', () => {
		let raise = createRaise();
		let proto = createProto();
		let fn = mixin(raise, proto);
		
		assert.ok(typeof fn.ok === 'function');
		assert.ok(typeof fn.notOk === 'function');
		assert.ok(typeof fn.throw === 'function');

		assert.strictEqual(fn.ok, fn);
		assert.strictEqual(fn.throw, raise);
		assert.strictEqual(fn.foo, proto.foo);
		assert.strictEqual(fn.bar, proto.bar);
		
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

		try{
			fn.foo();
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		try{
			fn.bar();
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, json);
		}

		fn.baz();
		fn.buz();
	});

	/**
	 */
	it('mixin()...catch(e)', () => {
		try{
			mixin();
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof IllegalArgumentError);
		}

		try{
			mixin(()=>{});
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof IllegalArgumentError);
		}
		
		try{
			mixin(()=>{}, null);
			assert.ok(false);
		} catch (e) {
			assert.ok(e instanceof IllegalArgumentError);
		}
	});
});