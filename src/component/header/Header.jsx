import React from "react";
import './header.css'
import {NavLink} from "react-router-dom";

export const Header = () => {

    return (
        <div className="header">
            <div className="header_left">
                <div className="header_left__icon">
                </div>
                <div className="header_left__name">
                    ПЕРВОМАЙСКАЯ
                </div>
            </div>
            <div className="header_menu" dir="rtl">
                <NavLink to='/apartments' activeClassName='header_active' className="anim header_menu__item4">выбрать
                    квартиру</NavLink>
                <NavLink to='/penthouses' activeClassName='header_active'
                         className="anim header_menu__item3">пентхаусы</NavLink>
                <NavLink to='/features' activeClassName='header_active'
                         className='anim header_menu__item2'>особенности</NavLink>
                <NavLink exact to='/' activeClassName='header_active' className="anim header_menu__item1">о
                    комплексе</NavLink>
            </div>
            <div className="phone">
                8 888 888 88 88
            </div>
            <div className="header_icon">
                <div className="header_icon__lines">

                </div>
            </div>
        </div>
    )

};