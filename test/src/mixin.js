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
const helper = require('../helper');

describe('mixin', () => {
  it('must be work mixin()', () => {
    let raise = helper.createRaise();
    let proto = helper.createProto();
    let fn = mixin(raise, proto);
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.ok === 'function');
    assert.ok(typeof fn.notOk === 'function');
    assert.ok(typeof fn.throw === 'function');

    assert.strictEqual(fn.ok, fn);
    assert.strictEqual(fn.throw, raise);
    assert.strictEqual(fn.okTrue, proto.okTrue);
    assert.strictEqual(fn.okFalse, proto.okFalse);
    assert.strictEqual(fn.notOkTrue, proto.notOkTrue);
    assert.strictEqual(fn.notOkFalse, proto.notOkFalse);

    try{
      fn.okFalse();
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }

    try{
      fn.notOkTrue();
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }

    fn.okTrue();
    fn.notOkFalse();
  });

  it('must be work mixin().ok()', () => {
    let raise = helper.createRaise();
    let proto = helper.createProto();
    let fn = mixin(raise, proto);
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    try{
      fn.ok(false, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work mixin().notOk()', () => {
    let raise = helper.createRaise();
    let proto = helper.createProto();
    let fn = mixin(raise, proto);
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    try{
      fn.notOk(true, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work mixin().throw()', () => {
    let raise = helper.createRaise();
    let proto = helper.createProto();
    let fn = mixin(raise, proto);
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    try{
      fn.throw(...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be throw IllegalArgumentError() -> mixin()', () => {
    try{
      mixin();
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });

  it('must be throw IllegalArgumentError() -> mixin(#raise)', () => {
    try{
      mixin(helper.createRaise());
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });

  it('must be throw IllegalArgumentError() -> mixin(#raise, null)', () => {
    try{
      mixin(helper.createRaise(), null);
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });
});