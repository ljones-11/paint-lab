const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js')

describe('Decorator', function(){
    let decorator;
    this.beforeEach(function(){
        decorator = new Decorator();
        paint1 = new Paint(12)
        paint2 = new Paint(10)
        paint3 = new Paint(10)

        room = new Room(30)
    })

    it('should start with empty stock', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    })
    it('can add a can pf paint to stock', function(){
        decorator.addPaintToStock(paint1);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1)
    })
    it('calculate total stock liters', function(){
        decorator.addPaintToStock(paint1);
        decorator.addPaintToStock(paint2);
        const actual = decorator.totalLiters()
        assert.strictEqual(actual, 22)
    })
    it('calculate whether enough paint for room', function(){
        decorator.addPaintToStock(paint1);
        decorator.addPaintToStock(paint2);
        const actual = decorator.checkEnoughPaint(room)
        assert.strictEqual(actual, false)
    })
    it('should change room to painted if enough liters', function(){
        decorator.addPaintToStock(paint1);
        decorator.addPaintToStock(paint2);
        decorator.addPaintToStock(paint3);
        decorator.checkEnoughPaint(room)
        const actual = room.painted
        assert.strictEqual(actual, true)
    })
})