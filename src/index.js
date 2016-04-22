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