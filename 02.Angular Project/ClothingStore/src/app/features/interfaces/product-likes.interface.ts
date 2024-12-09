export interface ProductLike {
    length: number;
    [x: number]: number;
    some(arg0: (likes: ProductLike) => boolean): any;
    _ownerId: string,
    productId: string,
    _createdOn: number,
    _id: string
}