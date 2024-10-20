import React from 'react';
import { deals } from '../data/deals.js';

function LastMinuteDeals () {
    // map through deals array
    return(
        <div className="col-sm-12">
                <h2 className="section-title">Last minute deals</h2>
                <ul className="latest-news">
                    {
                        deals.map(
                            (item) => (
                                <li className="col-md-12" key={item.id}>
                                <div className="image">
                                  <a href="blog-detail.html"></a>
                                  <img alt="" src="http://placehold.it/100x100" />
                                </div>
            
                                <ul className="top-info">
                                  <li><i className="fa fa-calendar"></i>{item.date}</li>
                                </ul>
            
                                <h4>
                                  <a href="blog-detail.html">{item.detail}</a>
                                  <p>{item.location}</p>
                                </h4>
                              </li>
                            )
                        )
                    }
                </ul>
                <p className="center">
                  <a className="btn btn-fullcolor" href="#">More deals</a>
                </p>
        </div>
    );
};

export default LastMinuteDeals;