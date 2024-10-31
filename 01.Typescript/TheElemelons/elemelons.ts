class Melon {
    public weight: number;
    public melonSort: string;
    public elementIndex: number;
    public element: string;



    constructor(weight: number, melonSort: string){
        this.weight = weight;
        this.melonSort = melonSort;
        this.elementIndex = 0;
    }

    toString(): void {
        console.log(`Element: ${this.element}`);
        console.log(`Sort: ${this.melonSort}`);
        console.log(`Element Index: ${this.elementIndex}`);
    }
}


class Watermelon extends Melon{
    constructor(weight:number, melonSort:string){
        super(weight, melonSort,);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Water';
    }
}
class  Firemelon extends Melon{
    constructor(weight:number, melonSort:string){
        super(weight, melonSort,);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Fire';

    }
}
class  Earthmelon extends Melon{
    constructor(weight:number, melonSort:string){
        super(weight, melonSort,);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Earth';

    }
}
class  Airmelon extends Melon{
    constructor(weight:number, melonSort:string){
        super(weight, melonSort,);
        this.elementIndex = weight * melonSort.length;
        this.element = 'Air';

    }
}


class Melolemonmelon extends Firemelon{
    public morphIndex: number;
    public morphElements: string[] = ['Water', 'Fire', 'Earth', 'Air'];

    constructor(weight:number, melonSort:string){
        super(weight, melonSort,);
        this.morphIndex = 1;
        this.element = 'Water';
    }

    morph(): void {
        this.morphIndex++
        this.morphIndex > 3 ? this.morphIndex = 0 : this.elementIndex++;

        this.element = this.morphElements[this.morphIndex];
    } 
}



//Throws error
let morphMelon : Melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
morphMelon.toString();

morphMelon.morph();
morphMelon.toString();

morphMelon.morph();
morphMelon.toString();

morphMelon.morph();
morphMelon.toString();

morphMelon.morph();
morphMelon.toString();


