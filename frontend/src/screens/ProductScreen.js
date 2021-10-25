import React, { useState } from 'react';
import Product from '../components/Product';
import Rating from '../components/Rating';
import data from '../data';
import { Link } from 'react-router-dom';

export default function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    const [qty, setQty] = useState(1);
    if (!product) {
        return <div>Error: Product Not Found!</div>
    }
    const addToCartHandler = () =>{
        props.history.push(`/cart/${product._id}?qty=${qty}`)
    }
    return (
        <div>
            <Link to="/">Back to Home</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <hi>{product.name}</hi>
                        </li>
                        <li>
                            <Rating>
                                rating={product.rating}
                                numReviews={product.numReviews}
                            </Rating>
                        </li>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Description: <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price"> ${product.price} </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                            <span className="success">In Stock</span>
                                        ) : (
                                            <span className="error">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                                {
                                    product.countInStock > 0 && (
                                        <> 
                                            <li>
                                                <div className="row">
                                                    <div>Qty</div>
                                                </div>
                                                <div>
                                                <select value={qty} onChange={e => setQty(e.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map(
                                                            (x) => (
                                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                            )
                                                        )
                                                    }
                                                </select>
                                                </div>
                                            </li>
                                            <li>
                                                <button onClick={addToCartHandler}
                                                 className="primary block">Add to Cart</button>
                                            </li>
                                        </>
                                    )
                                }
                            
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}