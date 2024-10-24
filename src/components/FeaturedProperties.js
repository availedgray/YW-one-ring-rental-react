import React from 'react';
import { properties } from '../data/properties.js';

function FeaturedProperties(){

    // map through properties item
    return(
        <>
        <h1 className="section-title">Featured Properties</h1>

        <div className="grid-style1 clearfix">
            { properties.map(
                (item) => (
                    <div className="item col-md-4" key={item.id}>
                        <div className="image">
                            <a href="/">
                                <h3>{item.title}</h3>
                                <span className="location">{item.location}</span>
                            </a>
                            <img src="https://placehold.it/760x670" alt="" />
                        </div>
                        <div className="price">
                            <span>${item.price}</span>
                            <p>per night</p>
                        </div>
                        <ul className="amenities">
                            <li><i className="icon-bedrooms"></i> {item.bedroomQty}</li>
                            <li><i className="icon-bathrooms"></i> {item.bathroomQty}</li>
                        </ul>
                    </div>
                )
            )}
        </div>    

        </>
    );
}

export default FeaturedProperties;