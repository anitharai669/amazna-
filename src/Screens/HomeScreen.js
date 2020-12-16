import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            setProduct(data);
        }
        return () => {
            //
        };
    }, [])


    return <ul className="products">

{
  products.map(product=>
    
    <li>
    <div className="Product">
        

        <div className="product-name"> 
            <Link to = {'/product/' + product._id}>

            <img className="product-image" src="https://i1.wp.com/www.winkaryo.com/wp-content/uploads/2020/01/Men-Shirt-2019-Casual-Slim-Fit-White-Shirts-Mens-Korean-Style-Long-Sleeve-Social-Camisa-Business.jpg?fit=800%2C800&ssl=1"/>
            
            </Link> 
            </div>
  <div className="product-brand">{product.brand}</div>
        <div className="product-price">{product.price}</div>
  <div className="product-rating">{product.rating} Stars {product.numReviews}</div>

    </div>
</li>

    )
}
 



</ul>

 
}

export default HomeScreen;
