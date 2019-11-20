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
const helper = require('../helper');

describe('create', () => {
  it('must be work create()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    Object.keys(proto).forEach(name => {
      assert.ok(typeof fn[name] === 'function');
      assert.strictEqual(fn[name], proto[name]);
    });

    try{
      fn(false, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work create().ok()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.ok === 'function');

    try{
      fn.ok(false, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work create().notOk()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notOk === 'function');
    
    try{
      fn.notOk(true, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work create().throw()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.throw === 'function');
    
    try{
      fn.throw(...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be throw IllegalArgumentError() -> create()', () => {
    try{
      create();
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });

  it('must be throw IllegalArgumentError() -> create(null)', () => {
    try{
      create(null);
      assert.ok(false);
    } catch (e) {
      assert.ok(e instanceof IllegalArgumentError);
    }
  });
});