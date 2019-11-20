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
const nativeAssert = require('assert');
const error = require("fifit-error");
const {create, mixin, assert, errorAssert, clientErrorAssert, serverErrorAssert} = require('../../');

describe('index', () => {
  it('must be typeof create === "function"', () => {
    nativeAssert.ok(typeof create === 'function');
  });

  it('must be typeof mixin === "function"', () => {
    nativeAssert.ok(typeof mixin === 'function');
  });

  it('must be typeof assert === "function"', () => {
    nativeAssert.ok(typeof assert === 'function');
  });

  it('must be typeof errorAssert === "function"', () => {
    nativeAssert.ok(typeof errorAssert === 'function');
  });

  it('must be typeof clientErrorAssert === "function"', () => {
    nativeAssert.ok(typeof clientErrorAssert === 'function');
  });

  it('must be typeof serverErrorAssert === "function"', () => {
    nativeAssert.ok(typeof serverErrorAssert === 'function');
  });

  it('must be work assert()', () => {
    try {
      assert(false);
      nativeAssert.ok(false);
    } catch (e) {
      nativeAssert.ok(e instanceof error.Error);
      nativeAssert.strictEqual(e.status, 500);
    }
  });

  it('must be work errorAssert()', () => {
    try {
      errorAssert(false);
      nativeAssert.ok(false);
    } catch (e) {
      nativeAssert.ok(e instanceof error.Error);
      nativeAssert.strictEqual(e.status, 500);
    }
  });

  it('must be work clientErrorAssert()', () => {
    try {
      clientErrorAssert(false);
      nativeAssert.ok(false);
    } catch (e) {
      nativeAssert.ok(e instanceof error.Error);
      nativeAssert.ok(e instanceof error.ClientError);
      nativeAssert.strictEqual(e.status, 400);
    }
  });

  it('must be work serverErrorAssert()', () => {
    try {
      serverErrorAssert(false);
      nativeAssert.ok(false);
    } catch (e) {
      nativeAssert.ok(e instanceof error.Error);
      nativeAssert.ok(e instanceof error.ServerError);
      nativeAssert.strictEqual(e.status, 500);
    }
  });
});