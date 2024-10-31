var Box = /** @class */ (function () {
    function Box() {
        this._boxes = [];
    }
    Box.prototype.add = function (el) {
        this._boxes.push(el);
    };
    Box.prototype.remove = function () {
        this._boxes.shift();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this._boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
var box1 = new Box();
box1.add("Pesho");
box1.add("Gosho");
console.log(box1.count);
box1.remove();
console.log(box1.count);
