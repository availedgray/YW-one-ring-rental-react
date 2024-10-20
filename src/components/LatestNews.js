import React from "react";
import { news } from "../data/news.js"

function LatestNews(){
    // map through news array

    return(
        <>
        <h1 className="section-title">Latest News</h1>
        <div className="grid-style1 clearfix">
            {
                news.map(
                    (item) => (
                        <div className="item col-md-4" key={item.id}>
                            <div className="image">
                                <a href="#">
                                    <span className="btn btn-default" ><i className="fa fa-file-o"></i> Read More</span>
                                </a>
                                <img src="http://placehold.it/766x515" alt="" />
                            </div>
                            <div className="tag"><i className="fa fa-file-text"></i></div>
                            <div className="info-blog">
                                <span className="title">{item.title}</span>
                                <span className="text" >{item.text}</span>
                                <span className="meta">
                                    <span className="author"
                                        ><i className="fa fa-user"></i> {item.user}</span>
                                    <span className="date" ><i className="fa fa-clock-o"></i> {item.date}</span>
                                </span>
                            </div>
                        </div>
                    )
                )
            }
        </div>
        </>
    );
};

export default LatestNews;