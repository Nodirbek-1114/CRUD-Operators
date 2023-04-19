import React, { useState, useContext } from 'react';
import { context } from '../../context/index';
import './index.css'

const Header = ({ setMode, setLang }) => {

    const { mode, LANG, lang } = useContext(context);

    const t = LANG[lang.toLowerCase()];

    const headerStyle = {
        backgroundColor: mode === 'LIGHT' ? "#3083A7" : '#222',
        color: mode === 'LIGHT' ? "black" : "white",
    }

    return (
        <header style={headerStyle}>
            <nav className="d-flex justify-content-between">
                <a className="navbar-brand"><i className="fa-solid fa-circle-left"></i></a>
                <form className="d-flex align-items-center" role="search">
                    <input className="form-control me-2" type="search" placeholder={t.search} aria-label="Search" />
                    <div className="d-flex gap-1 mx-3 w-75">
                        <select className='form-control w-50' onChange={(e) => {
                            setMode(e.target.value)
                            localStorage.setItem('them', e.target.value)
                        }}>
                            <option disabled selected>{t.theme}</option>
                            <option>LIGHT</option>
                            <option>DARK</option>
                        </select>
                        <select className='form-control w-50' onChange={(e) => {
                            setLang(e.target.value)
                            localStorage.setItem('language', setLang(e.target.value))
                        }}>
                            <option disabled selected>{t.selectlanguage}</option>
                            <option>UZB</option>
                            <option>ENG</option>
                        </select>
                    </div>
                </form>
            </nav>
        </header>
    );
};

export default Header;
