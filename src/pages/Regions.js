import React from "react";
import AustraliaRegions from "../components/AustraliaRegions.js"

function Regions() {
    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="row">

                        {/* Australia regions */}
                        <div className="main col-sm-12">
                            <AustraliaRegions />
                        </div>          
                    </div>
                </div>
            </div>            
        </>
    );

}

export default Regions;