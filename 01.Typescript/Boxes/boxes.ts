class Box <T>{

    private _boxes: T[];

    constructor() {
        this._boxes = [];
    }

    public add(el: T){
        this._boxes.push(el)
    }

    public remove(){
        this._boxes.shift();
    }

    get count(): number {
        return this._boxes.length;
    }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);


let box1 = new Box<String>();
box1.add("Pesho");
box1.add("Gosho");
console.log(box1.count);
box1.remove();
console.log(box1.count);
