import React from 'react';
import { articles } from '../data/articles.js';

function RecentArticle () {
    // map through articles
    return(
        <>
         <h1 className="section-title">Recent Articles</h1>
              <div className="grid-style1">
                {
                    articles.map(
                        (item) => (
                            <div className="item col-md-4" key={item.id}>
                                <div className="image">
                                    <a href="#">
                                        <span className="btn btn-default">
                                            <i className="fa fa-file-o"></i> Read More
                                        </span>
                                    </a>
                                    <img src="http://placehold.it/766x515" alt="" />
                                </div>

                                <div className="tag"><i className="fa fa-file-text"></i></div>
                                <div className="info-blog">
                                    <ul className="top-info">
                                        <li><i className="fa fa-calendar"></i> {item.date}</li>
                                        <li><i className="fa fa-comments-o"></i> {item.comment}</li>
                                        <li>
                                            <i className="fa fa-tags"></i> {item.tags}</li>
                                    </ul>
                                    <h3>
                                      <a href="#">{item.title}</a>
                                    </h3>
                                    <p>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
            <div className="center">
                <a href="#" className="btn btn-default-color">View All News</a>
            </div>                
        </>
    );
};

export default RecentArticle;