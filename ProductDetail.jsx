import React from "react";
import "./ProductDetail.css";
import Cushion from "../Image/Cushion.jpg";
import { Link } from "react-router-dom";

function ProductDetail() {

    return (

        <div className="Container">
            <div>
                <img src={Cushion} alt="Cushion" className="Cushion" />
            </div>
            <div className="CushionDescription">
                <p><b>Cushion</b></p>
                <h2>A little cushion for your day.</h2>
                <h4>Rs.499</h4>
                <b>Description</b>
                <p>The right cushion covers can really step up your living room game! They're not just stylish and cozy, they're an affordable way to freshen up your space too.</p>

                <b>Product Info</b>
                <ul>
                    <li>Shape: Square</li>
                    <li>Height: 30cm</li>
                    <li>Width: 30cm</li>
                </ul>
                <br />
                <Link to="custom"> <button>Customize here</button> </Link> <br /><br />
                <button className="btn">Add to Cart</button>


            </div>
        </div>





    );
}

export default ProductDetail;