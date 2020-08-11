import React from "react";
import {Route} from "react-router-dom";
import Architecture from "../container/architecture/Architecture";
import Safety from "../container/safety/Safety";
import Plug from "../plug/Plug";
import './complex.css'

const Complex = () => {
    return (
        <div className='body'>
            <Route exact path='/' render={() => <Architecture/>}/>
            <Route path='/Landscaping' render={() => <Plug/>}/>
            <Route path='/safety' render={() => <Safety/>}/>
            <Route path='/Engineering' render={() => <Plug/>}/>
            <Route path='/Infrastructure' render={() => <Plug/>}/>
            <Route path='/Transport' render={() => <Plug/>}/>
        </div>

    )
};

export default Complex