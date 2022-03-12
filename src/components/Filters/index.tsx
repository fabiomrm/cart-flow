import { Form, Button } from 'react-bootstrap';
import { Rating } from '../Rating';
import { FilterActions, useCart } from '../../context/CartContext';

export const Filters = () => {


    const { filterState: { byStock, byRating, byFastDelivery, sort, searchQuery}, filterDispatch } = useCart();
    
    const handleFilterByRating = (value: number) => {
        filterDispatch({
            type: FilterActions.FILTER_BY_RATING,
            payload: value
        })
    };

    const handleChangeOrder = (value: string) => {
        filterDispatch({
            type: FilterActions.FILTER_BY_PRICE,
            payload : value === "lowToHigh" ? "lowToHigh" : "highToLow",
        })
    };

    const handleFilterByStock = () => {
        filterDispatch({
            type: FilterActions.FILTER_BY_STOCK,
        })
    }

    const handleFIlterByFastDelivery = () => {
        filterDispatch({
            type: FilterActions.FILTER_BY_FAST_DELIVERY,
        })
    }

    const handleClearFilters = () => {
        filterDispatch({
            type: FilterActions.CLEAR_FILTERS,
        })
    }

    console.log(byStock, byRating, byFastDelivery, searchQuery, sort)

    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Crescente"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() => handleChangeOrder("lowToHigh")}
                    checked={sort === "lowToHigh"}
                >
                    
                </Form.Check>
            </span>
            <span>
                <Form.Check
                    inline
                    label="Decrescente"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() => handleChangeOrder("highToLow")}
                    checked={sort === "highToLow"}
                >        
                </Form.Check>
            </span>
            <span>
                <Form.Check
                    inline
                    label="Incluir itens sem estoque"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={handleFilterByStock}
                >        
                </Form.Check>
            </span>
            <span>
                <Form.Check
                    inline
                    label="Entrega rápida"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={handleFIlterByFastDelivery}
                >        
                </Form.Check>
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Classificação: </label>
                <Rating 
                    rating={byRating}
                    onClick={(index) => handleFilterByRating(index + 1)}
                    style={{cursor: "pointer"}}
                />
            </span>
            <Button 
                variant="light"
                onClick={handleClearFilters}
            >
               Limpar Filtros
            </Button>
        </div>
    )
}