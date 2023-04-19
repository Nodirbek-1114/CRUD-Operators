import React, { useState, useContext } from 'react';
import { context } from '../../context/index';
import './index.css'
import students from '../../assets/images/students.svg'
import bookmark from '../../assets/images/bookmark.svg'
import usd from '../../assets/images/usd.svg'
import user from '../../assets/images/user.svg'


const Home = () => {
    const { mode, LANG, lang } = useContext(context);

    const t = LANG[lang.toLowerCase()];

    return (
        <section>
            <div className="wrapper d-flex align-items-center justify-content-between">
                <div className="students">
                    <img src={students} alt="students icon" />
                    <span className='d-block students-title'>{t.students}</span>
                    <span className='students-count d-block'>243</span>
                </div>
                <div className="bookmark">
                    <img src={bookmark} alt="students icon" />
                    <span className='d-block students-title'>{t.course}</span>
                    <span className='students-count d-block'>13</span>
                </div>
                <div className="usd">
                    <img src={usd} alt="students icon" />
                    <span className='d-block students-title'>{t.payment}</span>
                    <span className='students-count d-block'>556,00</span>
                </div>
                <div className="user">
                    <img src={user} alt="students icon" />
                    <span className='d-block students-title'>{t.students}</span>
                    <span className='students-count d-block'>243</span>
                </div>
            </div>
        </section>
    );
};

export default Home;