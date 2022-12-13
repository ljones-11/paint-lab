const Paint = function(liters){
    this.liters = liters
    this.empty = false
}
Paint.prototype.checkCan = function(liters){
    if (this.liters > 0){
    this.empty = false
    }
    else {
    this.empty = true
    }
}
Paint.prototype.emptyCan = function(liters){
    return this.liters = 0
}

module.exports = Paint