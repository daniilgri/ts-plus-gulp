(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGreetingText = void 0;
var getGreetingText = function (name) {
    return "Hello from ".concat(name);
};
exports.getGreetingText = getGreetingText;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var DIV_ID = "greeting";
var GREETING_BY = "Jordan";
var renderGreeting = function (elementId, textContent) {
    var textBox = document.getElementById(elementId);
    textBox.innerText = (0, helpers_1.getGreetingText)(textContent);
};
renderGreeting(DIV_ID, GREETING_BY);
},{"./helpers":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVscGVycy50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQU8sSUFBTSxlQUFlLEdBQUcsVUFBQyxJQUFZO0lBQzFDLE9BQU8scUJBQWMsSUFBSSxDQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFBO0FBRlksUUFBQSxlQUFlLG1CQUUzQjs7OztBQ0ZELHFDQUE0QztBQUU1QyxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUM7QUFDMUIsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBRTdCLElBQU0sY0FBYyxHQUFHLFVBQUMsU0FBaUIsRUFBRSxXQUFtQjtJQUM1RCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBQSx5QkFBZSxFQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQTtBQUVELGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY29uc3QgZ2V0R3JlZXRpbmdUZXh0ID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBgSGVsbG8gZnJvbSAke25hbWV9YDtcclxufSIsImltcG9ydCB7IGdldEdyZWV0aW5nVGV4dCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcclxuXHJcbmNvbnN0IERJVl9JRCA9IFwiZ3JlZXRpbmdcIjtcclxuY29uc3QgR1JFRVRJTkdfQlkgPSBcIkpvcmRhblwiO1xyXG5cclxuY29uc3QgcmVuZGVyR3JlZXRpbmcgPSAoZWxlbWVudElkOiBzdHJpbmcsIHRleHRDb250ZW50OiBzdHJpbmcpID0+IHtcclxuICBjb25zdCB0ZXh0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICB0ZXh0Qm94LmlubmVyVGV4dCA9IGdldEdyZWV0aW5nVGV4dCh0ZXh0Q29udGVudCk7XHJcbn1cclxuXHJcbnJlbmRlckdyZWV0aW5nKERJVl9JRCwgR1JFRVRJTkdfQlkpOyJdfQ==
