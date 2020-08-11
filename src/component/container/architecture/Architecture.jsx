import React from "react";
import './architecture.css';
import {LeftMenu} from "../../leftMenu/LeftMenu";

const Architecture = () => {
    return (
        <div className="container">
            <LeftMenu/>
            <div className="container_info">
                <div className="content">
                    <div className='content_header'>Архитектура</div>
                    <div className="content_text">
                        Оригинальная архитектура жилого комплекса
                        <br/>бизнес-класса «Первомайская» формирует
                            <br/>современный стиль жизни&nbsp;
                                <button className='content_text__button' onChange>
                                    ...
                                </button>
                    </div>
                    <div className="navigation">1/6</div>
                </div>
            </div>
            <div className="container_image">
            </div>
        </div>
    )
};

export default Architecture;