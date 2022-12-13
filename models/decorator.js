const Decorator = function(){
    this.stock = []
}


Decorator.prototype.addPaintToStock = function(paint){
    this.stock.push(paint)
}

Decorator.prototype.totalLiters = function(){
    let total = 0
    for (const paint of this.stock) {
        total += paint.liters
    }
    return total
}

Decorator.prototype.checkEnoughPaint = function(room){
    if (this.totalLiters() >= room.squareArea ) {
        return true
    } else {
        return false
    }
}




module.exports = Decorator
