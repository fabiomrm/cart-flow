import { Product } from "../types/Product";
import faker from '@faker-js/faker';

export const products: Product[] = [...Array(33)].map(() => ({
        id: faker.datatype.uuid(),
        productName: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        image: faker.image.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
}));

