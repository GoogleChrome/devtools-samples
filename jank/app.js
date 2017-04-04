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

 function update(timestamp) {
   for (var i = 0; i < count; i++) {
     balls[i].style.left = ((Math.sin(balls[i].offsetTop + timestamp / 1000) + 1) * 500) + 'px';
     //balls[i].style.left = ((Math.sin(i + timestamp / 1000) + 1) * 500) + 'px';
   }
   window.requestAnimationFrame(update);
}

var count = 100;
var proto = document.querySelector('.proto');
var balls = [proto];
var bodySize = document.body.getBoundingClientRect();
var ballSize = proto.getBoundingClientRect();
var raf;

for (var i = 0; i < count; i++) {
  var b = proto.cloneNode();
  b.style.top = i + 'vh';
  b.style.left = Math.floor(Math.random() * bodySize.width - ballSize.width) + 'px';
  document.body.appendChild(b);
  balls.push(b);
}

window.requestAnimationFrame(update);
