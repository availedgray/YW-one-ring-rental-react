import React from "react";
import LatestNews from "../components/LatestNews.js"

function News() {
    return (
        <div className="content">
                <div className="container">
                    <div className="row">

                        {/* Latest News */}
                        <div className="main col-sm-12">
                            <LatestNews />
                        </div>
                                       
                    </div>
                </div>
        </div>  
    );

}

export default News;