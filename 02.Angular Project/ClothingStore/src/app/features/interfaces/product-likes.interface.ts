export interface ProductLike {
    some(arg0: (likes: ProductLike) => boolean): any;
    filter(arg0: (likes: any) => void): any;
    map(arg0: (likes: any) => void): any;
    _ownerId: string,
    productId: string,
    _createdOn: number,
    _id: string
}