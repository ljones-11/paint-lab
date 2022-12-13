const Room = function(squareArea){
    this.squareArea = squareArea
    this.painted = false
};

Room.prototype.paintRoom = function(){
    if (this.painted === false ) {
        this.painted = true
    }
}

module.exports = Room