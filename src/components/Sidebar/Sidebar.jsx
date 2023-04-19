import React, { useState, useContext } from 'react';
import { context } from '../../context/index';
import admin from '../../assets/images/sidebar-img.png'
import home from '../../assets/images/home.svg'
import course from '../../assets/images/course.svg'
import Student from '../../assets/images/Student.svg'
import payment from '../../assets/images/paymet.svg'
import report from '../../assets/images/report.svg'
import settings from '../../assets/images/settings.svg'
import './index.css'
import { NavLink, Link } from 'react-router-dom';
const Sidebar = () => {
    
    const { mode, LANG, lang } = useContext(context);

    const t = LANG[lang.toLowerCase()];

    const headerStyle = {
        backgroundColor: mode === 'LIGHT' ? "#136DAE" : '#333333',
        color: mode === 'LIGHT' ? "#E0EEF9" : "white",
    }

    return (
        <div className='sidebar' style={headerStyle}>
            <div className="top">
                <h2 className="top__title" style={headerStyle}>CRUD OPERATIONS</h2>
                <img src={admin} alt="admin image" className='admin__img' />
                <h3 className="admin__name text-center mt-4" style={headerStyle}>Karthi Madesh</h3>
                <span className='admin__text d-block text-center'>Admin</span>
            </div>

            <div className="sidber__menu">
                <ul className='sidebar__ul flex-column align-items-start'>
                    <li className='sidebar__ul--list d-flex align-items-start btn'><Link to='/Home' className='d-flex align-items-center'><img src={home} alt="home" /> <span  style={headerStyle}>{t.home}</span></Link></li>
                    <li className='sidebar__ul--list d-flex align-items-start btn'> <Link to='/Course'><img src={course} alt="course" /><span style={headerStyle}>{t.course}</span></Link></li>
                    <li className='sidebar__ul--list d-flex align-items-start btn'><Link to='/Student'><img src={Student} alt="student" /><span  style={headerStyle}>{t.students}</span></Link></li>
                    <li className='sidebar__ul--list d-flex align-items-start btn'> <Link to='/Payment'><img src={payment} alt="payment" /><span  style={headerStyle}>{t.payment}</span></Link></li>
                    <li className='sidebar__ul--list d-flex align-items-start btn'> <Link to='/Report'><img src={report} alt="report" /><span  style={headerStyle}>{t.report}</span></Link></li>
                    <li className='sidebar__ul--list d-flex align-items-start btn'> <Link to='/Settings'><img src={settings} alt="settings" /><span  style={headerStyle}>{t.settings}</span></Link></li>
                </ul>
            </div>
            <div className="bottom d-flex align-items-center mx-auto btn "><span className='d-block mx-3 logout' style={headerStyle}>{t.logout}</span> <i class="fa-solid fa-right-from-bracket"></i></div>
        </div>
    );
};

export default Sidebar;