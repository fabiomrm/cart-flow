import { useEffect, useState } from "react";
import { ListGroup, Button, Row, Col, Form, Image } from "react-bootstrap";
import { CartActions, useCart } from "../../context/CartContext";
import { Rating } from "../../components/Rating";
import { AiFillDelete } from 'react-icons/ai';
import { Product } from "../../types/Product";

export const Cart = () => {

    const { state: { cart }, dispatch } = useCart();

    const [total, setTotal] = useState<number>();

    useEffect(() => {
        let currTotal = 0;
        cart.map((product, index) => {
            
            currTotal += product.price * (product.qtd as number)
            
        })
        setTotal(currTotal);
        
    }, [cart]);

    const handleRemoveFromCart = (product: Product) => {
        dispatch({
            type: CartActions.REMOVE_FROM_CART,
            payload: product,
        })
    }

    const handleAddQtdToCart = (e: any, product: Product ) => {
        dispatch({
            type: CartActions.CHANGE_CART_QTD,
            payload: {
                product: product,
                qtd: (e.currentTarget as any).value,
            },
        })
    }

    return (
        <div className="home">
            <div className="product-container">
                <ListGroup>
                    {
                        cart.map((product) => (
                            <ListGroup.Item key={product.id}>
                                <Row>
                                    <Col md={2}>
                                        <Image 
                                            src={product.image}
                                            alt={product.productName}
                                            fluid
                                            rounded
                                        />
                                    </Col>
                                    <Col md={2}>
                                        <span>{product.productName}</span>
                                    </Col>
                                    <Col md={2}>
                                        <span>{product.price}</span>
                                    </Col>
                                    <Col md={2}>
                                        <Rating rating={product.ratings}/>
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control 
                                            as="select" 
                                            value={product.qtd}
                                            onChange={(e) => handleAddQtdToCart(e, product)}
                                        >
                                            {[...Array(product.inStock).keys()].map((x:number) => (
                                                <option key={x + 1}>{x+1}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => handleRemoveFromCart(product)}
                                        >
                                            <AiFillDelete fontSize="1.25rem" />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
            <div className="filters summary">
                <span className="title">
                    Subtotal {cart.length} item(s)
                </span>
                <span style={{fontWeight: 700, fontSize: 20}}>Total: R$ {total}</span>
                <Button type="button" disabled={cart.length === 0 }>
                    Ir para pagamento
                </Button>

            </div>
        </div>
    )
}