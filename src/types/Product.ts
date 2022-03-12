export type Product = {
    id: string;
    productName: string;
    image: string;
    price: number;
    inStock: number;
    fastDelivery: boolean;
    ratings: number;
    qtd?: number;
}