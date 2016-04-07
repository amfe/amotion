require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"amotion":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Motion = function () {
    /**
     * 通过已知的运动参数，推导出其它的位置参数
     * 基于牛顿第二定律：s = vt + at^2/2
     * @class Motion
     * @param {Object} config 形如{v, a, s, t}，其中t和s最少知其一，即可推导出另一个
     * @param {Number} config.v 已知初速度
     * @param {Number} config.a 已知加速度
     * @param {Number} config.s 位移
     * @param {Number} config.t 时间
     */

    function Motion(config) {
        _classCallCheck(this, Motion);

        this.v = config.v || 0;
        this.a = config.a || 0;

        if (typeof config.t !== 'undefined') {
            this.t = config.t;
        }

        if (typeof config.s !== 'undefined') {
            this.s = config.s;
        }

        // 通过位移倒推时间
        if (typeof this.t === 'undefined') {
            if (typeof this.s === 'undefined') {
                this.t = -this.v / this.a;
            } else {
                var t1 = (Math.sqrt(this.v * this.v + 2 * this.a * this.s) - this.v) / this.a;
                var t2 = (-Math.sqrt(this.v * this.v + 2 * this.a * this.s) - this.v) / this.a;
                this.t = Math.min(t1, t2);
            }
        }

        // 通过时间推导位移
        if (typeof this.s === 'undefined') {
            this.s = this.a * this.t * this.t / 2 + this.v * this.t;
        }
    }

    /**
     * 根据运动参数推导出三维贝塞尔参数
     * @method generateCubicBezier
     * @instance
     * @memberOf Motion
     * @return {Array} 4个三次贝塞尔参数组成的数组，形如[[p1x, p1y], [p2x, p2y]]
     */


    _createClass(Motion, [{
        key: 'generateCubicBezier',
        value: function generateCubicBezier() {
            var a = this.v / this.a;
            var b = this.t + this.v / this.a;

            return [[(a / 3 + (a + b) / 3 - a) / (b - a), (a * a / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)], [(b / 3 + (a + b) / 3 - a) / (b - a), (b * b / 3 + a * b * 2 / 3 - a * a) / (b * b - a * a)]];
        }
    }]);

    return Motion;
}();

exports.default = Motion;

},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs7O0FBV2pCLGFBWGlCLE1BV2pCLENBQVksTUFBWixFQUFvQjs4QkFYSCxRQVdHOztBQUNoQixhQUFLLENBQUwsR0FBUyxPQUFPLENBQVAsSUFBWSxDQUFaLENBRE87QUFFaEIsYUFBSyxDQUFMLEdBQVMsT0FBTyxDQUFQLElBQVksQ0FBWixDQUZPOztBQUloQixZQUFJLE9BQU8sT0FBTyxDQUFQLEtBQWEsV0FBcEIsRUFBaUM7QUFDakMsaUJBQUssQ0FBTCxHQUFTLE9BQU8sQ0FBUCxDQUR3QjtTQUFyQzs7QUFJQSxZQUFJLE9BQU8sT0FBTyxDQUFQLEtBQWEsV0FBcEIsRUFBaUM7QUFDakMsaUJBQUssQ0FBTCxHQUFTLE9BQU8sQ0FBUCxDQUR3QjtTQUFyQzs7O0FBUmdCLFlBYVosT0FBTyxLQUFLLENBQUwsS0FBVyxXQUFsQixFQUErQjtBQUMvQixnQkFBSSxPQUFPLEtBQUssQ0FBTCxLQUFXLFdBQWxCLEVBQStCO0FBQy9CLHFCQUFLLENBQUwsR0FBUyxDQUFFLEtBQUssQ0FBTCxHQUFTLEtBQUssQ0FBTCxDQURXO2FBQW5DLE1BRU87QUFDSCxvQkFBSSxLQUFLLENBQUMsS0FBSyxJQUFMLENBQVUsS0FBSyxDQUFMLEdBQVMsS0FBSyxDQUFMLEdBQVMsSUFBSSxLQUFLLENBQUwsR0FBUyxLQUFLLENBQUwsQ0FBekMsR0FBbUQsS0FBSyxDQUFMLENBQXBELEdBQThELEtBQUssQ0FBTCxDQURwRTtBQUVILG9CQUFJLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBTCxDQUFVLEtBQUssQ0FBTCxHQUFTLEtBQUssQ0FBTCxHQUFTLElBQUksS0FBSyxDQUFMLEdBQVMsS0FBSyxDQUFMLENBQTFDLEdBQW9ELEtBQUssQ0FBTCxDQUFyRCxHQUErRCxLQUFLLENBQUwsQ0FGckU7QUFHSCxxQkFBSyxDQUFMLEdBQVMsS0FBSyxHQUFMLENBQVMsRUFBVCxFQUFhLEVBQWIsQ0FBVCxDQUhHO2FBRlA7U0FESjs7O0FBYmdCLFlBd0JaLE9BQU8sS0FBSyxDQUFMLEtBQVcsV0FBbEIsRUFBK0I7QUFDL0IsaUJBQUssQ0FBTCxHQUFTLEtBQUssQ0FBTCxHQUFTLEtBQUssQ0FBTCxHQUFTLEtBQUssQ0FBTCxHQUFTLENBQTNCLEdBQStCLEtBQUssQ0FBTCxHQUFTLEtBQUssQ0FBTCxDQURsQjtTQUFuQztLQXhCSjs7Ozs7Ozs7Ozs7aUJBWGlCOzs4Q0ErQ0s7QUFDbEIsZ0JBQUksSUFBSSxLQUFLLENBQUwsR0FBUyxLQUFLLENBQUwsQ0FEQztBQUVsQixnQkFBSSxJQUFJLEtBQUssQ0FBTCxHQUFTLEtBQUssQ0FBTCxHQUFTLEtBQUssQ0FBTCxDQUZSOztBQUlsQixtQkFBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUosR0FBUSxDQUFDLElBQUksQ0FBSixDQUFELEdBQVUsQ0FBVixHQUFjLENBQXRCLENBQUQsSUFBNkIsSUFBSSxDQUFKLENBQTdCLEVBQXFDLENBQUMsSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLElBQUksQ0FBSixHQUFRLENBQVIsR0FBWSxDQUFaLEdBQWdCLElBQUksQ0FBSixDQUE3QixJQUF1QyxJQUFJLENBQUosR0FBUSxJQUFJLENBQUosQ0FBL0MsQ0FBdkMsRUFDSCxDQUFDLENBQUMsSUFBSSxDQUFKLEdBQVEsQ0FBQyxJQUFJLENBQUosQ0FBRCxHQUFVLENBQVYsR0FBYyxDQUF0QixDQUFELElBQTZCLElBQUksQ0FBSixDQUE3QixFQUFxQyxDQUFDLElBQUksQ0FBSixHQUFRLENBQVIsR0FBWSxJQUFJLENBQUosR0FBUSxDQUFSLEdBQVksQ0FBWixHQUFnQixJQUFJLENBQUosQ0FBN0IsSUFBdUMsSUFBSSxDQUFKLEdBQVEsSUFBSSxDQUFKLENBQS9DLENBRG5DLENBQVAsQ0FKa0I7Ozs7V0EvQ0wiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3Rpb24ge1xuICAgIC8qKlxuICAgICAqIOmAmui/h+W3suefpeeahOi/kOWKqOWPguaVsO+8jOaOqOWvvOWHuuWFtuWug+eahOS9jee9ruWPguaVsFxuICAgICAqIOWfuuS6jueJm+mhv+esrOS6jOWumuW+i++8mnMgPSB2dCArIGF0XjIvMlxuICAgICAqIEBjbGFzcyBNb3Rpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOW9ouWmgnt2LCBhLCBzLCB0fe+8jOWFtuS4rXTlkoxz5pyA5bCR55+l5YW25LiA77yM5Y2z5Y+v5o6o5a+85Ye65Y+m5LiA5LiqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy52IOW3suefpeWInemAn+W6plxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcuYSDlt7Lnn6XliqDpgJ/luqZcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnMg5L2N56e7XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy50IOaXtumXtFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLnYgPSBjb25maWcudiB8fCAwO1xuICAgICAgICB0aGlzLmEgPSBjb25maWcuYSB8fCAwO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnQgPSBjb25maWcudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnMgPSBjb25maWcucztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmAmui/h+S9jeenu+WAkuaOqOaXtumXtFxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMudCA9IC0gdGhpcy52IC8gdGhpcy5hO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdDEgPSAoTWF0aC5zcXJ0KHRoaXMudiAqIHRoaXMudiArIDIgKiB0aGlzLmEgKiB0aGlzLnMpIC0gdGhpcy52KSAvIHRoaXMuYTtcbiAgICAgICAgICAgICAgICB2YXIgdDIgPSAoLU1hdGguc3FydCh0aGlzLnYgKiB0aGlzLnYgKyAyICogdGhpcy5hICogdGhpcy5zKSAtIHRoaXMudikgLyB0aGlzLmE7XG4gICAgICAgICAgICAgICAgdGhpcy50ID0gTWF0aC5taW4odDEsIHQyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmAmui/h+aXtumXtOaOqOWvvOS9jeenu1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucyA9IHRoaXMuYSAqIHRoaXMudCAqIHRoaXMudCAvIDIgKyB0aGlzLnYgKiB0aGlzLnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7ov5Dliqjlj4LmlbDmjqjlr7zlh7rkuInnu7TotJ3loZ7lsJTlj4LmlbBcbiAgICAgKiBAbWV0aG9kIGdlbmVyYXRlQ3ViaWNCZXppZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyT2YgTW90aW9uXG4gICAgICogQHJldHVybiB7QXJyYXl9IDTkuKrkuInmrKHotJ3loZ7lsJTlj4LmlbDnu4TmiJDnmoTmlbDnu4TvvIzlvaLlpoJbW3AxeCwgcDF5XSwgW3AyeCwgcDJ5XV1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUN1YmljQmV6aWVyICgpe1xuICAgICAgICB2YXIgYSA9IHRoaXMudiAvIHRoaXMuYTtcbiAgICAgICAgdmFyIGIgPSB0aGlzLnQgKyB0aGlzLnYgLyB0aGlzLmE7XG5cbiAgICAgICAgcmV0dXJuIFtbKGEgLyAzICsgKGEgKyBiKSAvIDMgLSBhKSAvIChiIC0gYSksIChhICogYSAvIDMgKyBhICogYiAqIDIgLyAzIC0gYSAqIGEpIC8gKGIgKiBiIC0gYSAqIGEpXSxcbiAgICAgICAgICAgIFsoYiAvIDMgKyAoYSArIGIpIC8gMyAtIGEpIC8gKGIgLSBhKSwgKGIgKiBiIC8gMyArIGEgKiBiICogMiAvIDMgLSBhICogYSkgLyAoYiAqIGIgLSBhICogYSldXTtcbiAgICB9XG59XG5cbiJdfQ==
