# Getting Started

## Install

```shell
tnpm install amotion --save
```

## Usage

```javascript
import AMotion from 'amotion'
```

## Samples

Initializing:

```javascript
var motion = new AMotion({
        v: 100, //初速度
        a: 5,	//加速度
        t: 10,	//时间，和距离参数二选一
        s: 1000, //举例，和时间参数二选一
});
motion.generateCubicBezier() //生成贝塞尔曲线
```