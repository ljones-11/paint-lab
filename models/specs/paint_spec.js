const assert = require('assert');
const Paint = require('../paint.js')


describe('paint', function(){
    let paint;
    this.beforeEach(function(){
        paint = new Paint (10)
    })

    it('should have liters', function(){
        const actual = paint.liters
        assert.strictEqual(actual, 10)
    })
    it('it should be able to check if empty', function(){
        paint.checkCan(paint.liters)
        const actual = paint.empty
        assert.strictEqual(actual, false)
    })
    it('should empty can',function(){
        paint.emptyCan(paint.liters)
        const actual = paint.liters
        assert.strictEqual(actual, 0)
    })
})