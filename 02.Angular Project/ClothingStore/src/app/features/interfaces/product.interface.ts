export interface Product {
    title: string,
    price: number,
    color: string,
    size: string,
    imgURL: string,
    _ownerId: string,
    _createdOn: number,
    _id: string
}


export interface FormCreateProduct{
    title: string,
    price: number,
    color: string,
    size: string,
    imgURL: string,
    section: string
}

export interface CreatedProduct {
    title: string,
    price: number,
    color: string,
    size: string,
    section: string,
    imgURL: string,
    _ownerId: string,
    _createdOn: number,
    _id: string
}