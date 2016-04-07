# The API

```javascript
import Module from 'amotion';
```

## Constrcutor

### new Class(v)

create a object

```jsdoc
通过已知的运动参数，推导出其它的位置参数
基于牛顿第二定律：s = vt + at^2/2
@class lib.motion~Motion
@param {Object} config 形如{v, a, s, t}，其中t和s最少知其一，即可推导出另一个
@param {Number} config.v 已知初速度
@param {Number} config.a 已知加速度
@param {Number} config.s 位移
@param {Number} config.t 时间
```

## Methods

## generateCubicBezier()

return a CubicBezier

```jsdoc
根据运动参数推导出三维贝塞尔参数
@method generateCubicBezier
@instance
@memberOf lib.motion~Motion
@return {Array} 4个三次贝塞尔参数组成的数组，形如[[p1x, p1y], [p2x, p2y]]
```

