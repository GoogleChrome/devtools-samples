/* Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */

function wait(ms) {
  return new Promise(r => setTimeout(r, ms)).then(() => "Yay");
}

// do some work in background.
setInterval(() => 42, 200);

async function test() {
  const hello = "world";
  const tmp = await wait(1000);
  console.log(tmp);
  return hello;
}

async function runTest() {
  debugger;
  let result = await test();
  console.log(result);
}

runTest();
