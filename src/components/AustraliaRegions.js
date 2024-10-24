import React from "react";
import { australiaRegions } from "../data/australiaRegions.js";

function AustraliaRegions (){
    // map through Australia regions lists
    return(
        <>
        <h1 className="section-title">Regions in Australia</h1>
              <div className="grid-style1 clearfix">
                {
                    australiaRegions.map(
                        (item) => (
                            <div className="item col-md-4" key={item.id}>
                            <div className="image">
                              <a href="#">
                                <h3>{item.city}</h3>
                                <span className="location">{item.state}</span>
                              </a>
                              <img src="https://placehold.it/760x670" alt="" />
                            </div>
                          </div>
                        )
                    )
                }
              </div>
        </>
    );
};

export default AustraliaRegions;