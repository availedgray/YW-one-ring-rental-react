import React from "react";

function Carousel(){
    return(
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">

            <div className="item active" 
                id="slide1" 
                style={{
                background: 'url(http://placehold.it/1920x605) no-repeat left center',
                backgroundSize: 'cover'
            }}>
                <div className="carousel-caption">
                    <div className="caption sfr slider-title">Breathtaking views</div>
                    <div className="caption sfl slider-subtitle">
                        Relaxation in the Bay of Belfalas
                    </div>
                    <a href="#" className="caption sfb btn btn-default btn-lg">
                        Learn More</a>
                </div>
            </div>

            <div className="item" 
                id="slide2"
                style={{
                background: 'url(http://placehold.it/1920x605) no-repeat left center',
                backgroundSize: 'cover'
            }}>
                <div className="carousel-caption">
                    <div className="caption sfr slider-title">The simple life</div>
                    <div className="caption sfl slider-subtitle">
                        Lush gardens in Mordor
                    </div>
                    <a href="#" className="caption sfb btn btn-default btn-lg">
                        Learn More</a>
                </div>
            </div>
        </div>
        <div id="home-search-section"></div>

        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    );
};

export default Carousel;