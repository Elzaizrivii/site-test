import React from "react";
import {NavLink} from "react-router-dom";
import './leftMenu.css';

export const LeftMenu = () => {
    return (
        <div className="leftMenu">
            <div className="scrolls">
                <NavLink exact to='/' activeClassName='scrolls_active1' className="scrolls_item1">Архитектура
                </NavLink>
                <NavLink to='/Landscaping' className="scrolls_item ">Благоустройство
                </NavLink>
                <NavLink to='/safety' activeClassName='scrolls_active3' className="scrolls_item3 ">Безопасность
                </NavLink>
                <NavLink to='/Engineering' className="scrolls_item ">Инженерия
                </NavLink>
                <NavLink to='/Infrastructure' className="scrolls_item ">Инфраструктура
                </NavLink>
                <NavLink to='/Transport' className="scrolls_item ">Транспортная
                    доступность
                </NavLink>

            </div>
        </div>
    )
};