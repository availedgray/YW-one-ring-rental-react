import React from 'react';
import { activities } from '../data/activities.js';

function Activity () {
    // mar through activities data
    return(
        <div className="col-sm-12">
        <h2 className="section-title">Activity</h2>
        <ul className="activity">
            {
                activities.map(
                    (item) => (
                        <li className="col-lg-12" key={item.id}>
                        <a href="#"><img src="http://placehold.it/70x70" alt=""/></a>
                        <div className="info">
                          <h5>{item.head}
                            <a href="#">{item.link}</a>
                          </h5>
                          <p>
                            {item.body}
                          </p>
                          <h6>{item.time}</h6>
                        </div>
                      </li>
                    )
                )
            }
        </ul>
      </div>
    );
};

export default Activity;
