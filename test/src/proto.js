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
const create = require('../../lib/create');
const helper = require('../helper');

describe('proto', () => {
  it('must be work proto.equal()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.equal === 'function');

    fn.equal(0, 0);
    fn.equal(null, null);
    fn.equal(null, undefined);

    try {
      fn.equal(0, 1, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.strictEqual()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.strictEqual === 'function');
    
    fn.strictEqual(0, 0);
    fn.strictEqual(null, null);

    try {
      fn.strictEqual(null, undefined, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notEqual()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notEqual === 'function');

    fn.notEqual(0, 1);

    try {
      fn.notEqual(null, undefined, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notStrictEqual()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notStrictEqual === 'function');

    fn.notStrictEqual(0, 1);
    fn.notStrictEqual(null, undefined);

    try {
      fn.notStrictEqual(null, null, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.lessThan()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.lessThan === 'function');

    fn.lessThan(0, 1);

    try {
      fn.lessThan(1, 0, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notLessThan()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notLessThan === 'function');

    fn.notLessThan(0, 0);
    fn.notLessThan(1, 0);

    try {
      fn.notLessThan(0, 1, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.lessThanEqual()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.lessThanEqual === 'function');

    fn.lessThanEqual(0, 0);
    fn.lessThanEqual(0, 1);

    try {
      fn.lessThanEqual(1, 0, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notLessThanEqual()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notLessThanEqual === 'function');

    fn.notLessThanEqual(1, 0);

    try {
      fn.notLessThanEqual(0, 0, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.greaterThan()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.greaterThan === 'function');

    fn.greaterThan(1, 0);

    try {
      fn.greaterThan(0, 1, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notGreaterThan()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notGreaterThan === 'function');

    fn.notGreaterThan(0, 0);
    fn.notGreaterThan(0, 1);

    try {
      fn.notGreaterThan(1, 0, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.greaterThanEqual()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.greaterThanEqual === 'function');

    fn.greaterThanEqual(1, 0);
    fn.greaterThanEqual(1, 1);

    try {
      fn.greaterThanEqual(0, 1, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notGreaterThanEqual()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notGreaterThanEqual === 'function');

    fn.notGreaterThanEqual(0, 1);

    try {
      fn.notGreaterThanEqual(1, 0, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.in()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.in === 'function');

    fn.in({'foo': true}, 'foo');

    try {
      fn.greaterThan({}, 'foo', ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notIn()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notIn === 'function');

    fn.notIn({}, 'foo');

    try {
      fn.notIn({'foo': true}, 'foo', ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.typeOf()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.typeOf === 'function');

    fn.typeOf(1, 'number');
    fn.typeOf('foo', 'string');

    try {
      fn.typeOf(null, '', ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notTypeOf()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notTypeOf === 'function');

    fn.notTypeOf(null, '');

    try {
      fn.notTypeOf(1, 'number', ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.instanceOf()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.instanceOf === 'function');

    fn.instanceOf(new Error(), Error);

    try {
      fn.instanceOf(new Object(), Error, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notInstanceOf()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notInstanceOf === 'function');

    fn.notInstanceOf(new Object(), Error);

    try {
      fn.notInstanceOf(new Error(), Error, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.objectTypeOf()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.objectTypeOf === 'function');

    fn.objectTypeOf([], 'Array');
    fn.objectTypeOf({}, 'Object');

    try {
      fn.objectTypeOf('', '', ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notObjectTypeOf()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notObjectTypeOf === 'function');

    fn.notObjectTypeOf('', '');

    try {
      fn.notObjectTypeOf('', 'String', ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.hasOwnProperty()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.hasOwnProperty === 'function');

    fn.hasOwnProperty({'foo': true}, 'foo');

    try {
      fn.hasOwnProperty({}, 'toString', ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.notHasOwnProperty()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.notHasOwnProperty === 'function');

    fn.notHasOwnProperty({}, 'toString');

    try {
      fn.notHasOwnProperty({foo: true}, 'foo', ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.null()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.null === 'function');

    fn.null(null);
    fn.null(undefined);

    try {
      fn.null(true, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.strictNull()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.strictNull === 'function');

    fn.strictNull(null);

    try {
      fn.strictNull(undefined, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.undefined()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.undefined === 'function');

    fn.undefined(undefined);
    fn.undefined(null);

    try {
      fn.undefined(true, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.strictUndefined()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.strictUndefined === 'function');

    fn.strictUndefined(undefined);

    try {
      fn.strictUndefined(null, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.true()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.true === 'function');

    fn.true(true);
    fn.true(1);
    fn.true('1');

    try {
      fn.true(false, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.strictTrue()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.strictTrue === 'function');

    fn.strictTrue(true);

    try {
      fn.strictTrue(1, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.false()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.false === 'function');

    fn.false(false);
    fn.false(0);
    fn.false('');
    fn.false('0');

    try {
      fn.false(true, ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });

  it('must be work proto.strictFalse()', () => {
    let fn = create(helper.createRaise());
    let args = helper.createArgs();
    let argsJson = helper.createArgsJson();

    assert.ok(typeof fn.strictFalse === 'function');

    fn.strictFalse(false);

    try {
      fn.strictFalse('', ...args);
      assert.ok(false);
    } catch (e) {
      assert.strictEqual(e.message, argsJson);
    }
  });
});