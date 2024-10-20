import React from 'react';
import { regions } from '../data/regions.js';

function PopularRegions () {
    // map through regions item
    return(
            <div className="row">
                <div className="col-sm-12">
                  <h1 className="section-title">Popular Regions</h1>

                  <div id="regions">
                    { 
                        regions.map(
                            (item) => (
                                <div className="item" key={item.id}>
                                <a href="#">
                                  <img src="http://placehold.it/194x194" alt="" />
                                  <h3>{item.name}</h3>
                                </a>
                              </div>
                            )
                        )
                    }
                    
                  </div>
                </div>
              </div>
    );
};

export default PopularRegions;