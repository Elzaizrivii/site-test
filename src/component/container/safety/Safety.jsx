import React from "react";
import './safety.css';
import {LeftMenu} from "../../leftMenu/LeftMenu";

const Safety = () => {
    return (
        <div className="container">
            <LeftMenu/>
            <div className="container_info">
                <div className="content">
                    <div className='content_header'>Безопастность</div>
                    <div className="content_text"> Современный двор европейского уровня —<br/>
                        территория для детей, игр на свежем воздухе <br/>
                        и вечерних&nbsp;
                        <button className='content_text__button' onChange>
                            ...
                        </button>
                    </div>
                    <div className="navigation">3/6</div>
                </div>
            </div>
            <div className="container_safety__image">
            </div>
        </div>
    )
};

export default Safety;