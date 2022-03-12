import { Card, Button } from 'react-bootstrap';
import { Product } from "../../types/Product"
import { Rating } from '../Rating';
import { CartActions, useCart } from '../../context/CartContext';


type Props = {
    product: Product;
}

export const ProductItem = ({ product }: Props) => {

    const { state, dispatch } = useCart();


    const handleAddToCart = (product: Product) => {
        dispatch({
            type: CartActions.ADD_TO_CART,
            payload: product,
        })
    }

    const handleRemoveFromCart = (product: Product) => {
        dispatch({
            type: CartActions.REMOVE_FROM_CART,
            payload: product,
        })
    }

    return(
        <div className="product">
            <Card>
                <Card.Img variant="top" src={product.image} alt={product.productName}/>
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span> {product.price}</span>
                        {
                            product.fastDelivery ? (
                                <div>ENTREGA RÁPIDA</div>
                            ) : (
                                <div>Entrega em 01 semana</div>
                            )
                        }
                        <Rating rating={product.ratings} />
                    </Card.Subtitle>
                    {
                        state.cart.some((p) => p.id === product.id) ?         
                        (
                            <Button onClick={() => handleRemoveFromCart(product)} variant="danger">
                                Remover do carrinho        
                            </Button>
                        )
                        :
                        (
                            <Button onClick={() =>handleAddToCart(product)} disabled={!product.inStock}>
                                {!product.inStock ? "Sem estoque" : "Adicionar ao carrinho"}
                            </Button>
                        )
                    }
                </Card.Body>
            </Card>
            
        </div>
    )
}