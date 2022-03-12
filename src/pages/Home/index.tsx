import { Filters } from "../../components/Filters";
import { ProductItem } from "../../components/Product";
import { useCart } from "../../context/CartContext";
import './styles.css';

export const Home = () => {

    const { 
        state: { products },
        filterState: {sort, byFastDelivery, byRating, byStock, searchQuery}
    } = useCart();

    const checkFilters = () => {
        let displayingProducts = products;

        if(sort) {
            displayingProducts = displayingProducts.sort((a, b) => {
                return sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            })
        }
        if(!byFastDelivery) {
            displayingProducts = displayingProducts.filter(p => p.fastDelivery)
        }

        if(!byStock) {
            displayingProducts = displayingProducts.filter(p => p.inStock)
        }

        if(byRating) {
            displayingProducts = displayingProducts.filter(p => p.ratings >= byRating)
        }

        if(searchQuery) {
            displayingProducts = displayingProducts.filter((p) => {
                return p.productName.toLowerCase().includes(searchQuery.toLowerCase())
            })
        }

        return displayingProducts;
    }


    return (
        <div className="home">
            <Filters />
            <div className="product-container">
                {
                    checkFilters().map((product, _) => (
                       <ProductItem product={product} key={product.id}/>
                    ))
                }
            </div>

        </div>
    )
}