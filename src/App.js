import React from 'react';
import './App.css';
import {Header} from "./component/header/Header";
import {Route} from "react-router-dom";
import Footer from "./component/footer/Footer";
import Complex from "./component/complex/complex";
import Plug from "./component/plug/Plug";

function App() {
    return (
        <div className="App">
            <Header/>
            <Route path='/' render={() => <Complex/>}/>
            <Route path='/features' render={() => <Plug/>}/>
            <Route path='/penthouses' render={() => <Plug/>}/>
            <Route path='/apartments' render={() => <Plug/>}/>
            <Footer/>
        </div>
    );
}

export default App;