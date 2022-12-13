const Room = function(squareArea, painted){
    this.squareArea = squareArea
    this.painted = painted
};

Room.prototype.paintRoom = function(){
    if (this.painted === false ) {
        this.painted = true
    }
}

module.exports = Room