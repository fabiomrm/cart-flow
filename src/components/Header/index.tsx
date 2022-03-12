import { Navbar, Container, FormControl, Nav, Dropdown, Badge, Button } from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { CartActions, FilterActions, useCart } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import { Product } from "../../types/Product";

export const Header = () => {


    const { state: { cart }, dispatch, filterDispatch } = useCart();

    const handleRemoveFromCart = (product: Product) => {
        dispatch({
            type: CartActions.REMOVE_FROM_CART,
            payload: product,
        })
    }

    const handleQuery = (e:any) => {
        filterDispatch({
            type: FilterActions.FILTER_QUERY,
            payload: e.target.value,
        })
    }

    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    FMRM
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl 
                        style={{ width: 500 }}
                        placeholder="Busque um produto"
                        className="m-auto"
                        onChange={(e) => handleQuery(e)}
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown align={"end"}>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" style={{marginRight: "1rem"}}/>
                            <Badge bg="light" text="dark">{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                        {cart.length > 0 ? (
                                <>
                                {cart.map((product) => (
                                    <span className="cart-item" key={product.id}>
                                    <img
                                        src={product.image}
                                        className="cart-item-img"
                                        alt={product.productName}
                                    />
                                    <div className="car-item-detail">
                                        <span>{product.productName}</span>
                                        <span>R$ {product.price}</span>
                                    </div>
                                    <AiFillDelete
                                        fontSize="20px"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleRemoveFromCart(product)}
                                    />
                                    </span>
                                ))}
                                <Link to="/cart">
                                    <Button style={{ width: "95%", margin: "0 0.6rem" }}>
                                        Ir para carrinho
                                    </Button>
                                </Link>
                                </>
                            ) : (
                                <span style={{ padding: 10 }}>Carrinho vazio!</span>
                            )}

                        </Dropdown.Menu>
                    </Dropdown>   
                </Nav>
            </Container>
        </Navbar>

    )
} 