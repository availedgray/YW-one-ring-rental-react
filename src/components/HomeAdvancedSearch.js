import React from 'react';

function HomeAdvancedSearch(){
    return(
        <div id="home-advanced-search" className="open">
        <div id="opensearch"></div>
        <div className="container">
        <div className="row">
            <div className="col-sm-12">
            <form>
                <div className="form-group">
                <div className="form-control-small">
                    <div  className="input-group date chzn-container" data-datepicker>
                    <input
                        placeholder="Arrive on..."
                        type="text"
                        className="form-control"
                        data-date-format="DD/MM/YYYY"
                    />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                    </div>
                </div>

                <div className="form-control-small">
                    <select
                    id="search_status"
                    name="search_status"
                    data-placeholder="Stay...">
                    <option value=""></option>
                    <option value="1">1 Night</option>
                    <option value="2">2 Nights</option>
                    <option value="3">3 Nights</option>
                    <option value="4">4 Nights</option>
                    <option value="5">5 Nights</option>
                    <option value="6">6 Nights</option>
                    <option value="7">7 Nights</option>
                    <option value="8">8 Nights</option>
                    <option value="9">9 Nights</option>
                    <option value="10">10 Nights</option>
                    <option value="11">11 Nights</option>
                    <option value="12">12 Nights</option>
                    <option value="13">13 Nights</option>
                    <option value="14">14 Nights</option>
                    </select>
                </div>

                <div className="form-control-small">
                    <select
                    id="search_bedrooms"
                    name="search_bedrooms"
                    data-placeholder="Bedrooms"
                    >
                    <option value=""></option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5plus">5+</option>
                    </select>
                </div>
                <div className="form-control-large">
                    <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="City, State, Country, etc..."
                    />
                </div>
                <button type="submit" className="btn btn-fullcolor">
                    Search
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
    );
};

export default HomeAdvancedSearch;