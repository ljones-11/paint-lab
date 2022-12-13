const assert = require('assert');
const Room = require('../room.js')

describe('Room', function(){
    let room;
    this.beforeEach(function(){
        room = new Room(30, false);
    })

    it('should have an area', function(){
        const actual = room.squareArea;
        assert.strictEqual(actual, 30);
    })
    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    })
    it('can be painted', function(){
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
})