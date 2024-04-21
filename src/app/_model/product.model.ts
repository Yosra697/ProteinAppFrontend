import {FileHandel} from "./file-handel.model";


export interface Product {
    productId: number,
    productName: String,
    productDescription: String,
    productActualPrice: number,
    productImages: FileHandel[]
}
