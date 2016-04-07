import {expect} from 'chai';
import MotionClass from '../src/index';

describe('index.js', () => {
    it('export Motion', () => {
        expect(MotionClass).to.be.a('function');
    });

    it('export generateCubicBezier Array', () => {
        const motion = new MotionClass({
            v : 1.5,
            a : -0.0015,
            t : 900
        });
        const bezier = motion.generateCubicBezier();
        expect(bezier).to.be.a('array');
    });

    it('export generateCubicBezier', () => {
        const motion = new MotionClass({
            v : 1.5,
            a : -0.0015,
            t : 900
        });
        const bezier = motion.generateCubicBezier();
        expect(bezier[0][0]).to.be.equal(0.3333333333333333);
        expect(bezier[0][1]).to.be.equal(0.6060606060606061);
        expect(bezier[1][0]).to.be.equal(0.6666666666666666);
        expect(bezier[1][1]).to.be.equal(0.9393939393939394);
    });
    it('export no config value', () => {
        const motion = new MotionClass({});
        expect(motion).to.be.a('object');
    });
    it('export t undefined', () => {
        const motion = new MotionClass({
            v : 1.5,
            a : -0.0015
        });
        expect(motion).to.be.a('object');
    });
    it('export s only', () => {
        const motion = new MotionClass({
            s : 100
        });
        expect(motion).to.be.a('object');
    });

    it('export s !undefined', () => {
        const motion = new MotionClass({
            v : 1.5,
            a : -0.0015,
            t : 900,
            s : 1000
        });
        expect(motion).to.be.a('object');
    });
});