import React, { useState, useContext } from 'react';
import { context } from '../../context/index';
import './index.css'

const Student = () => {
        const { mode, LANG, lang } = useContext(context);

        const t = LANG[lang.toLowerCase()];
        

    return (
        <section>
            <div className="student__list d-flex align-items-center justify-content-between">
                <h4 className='student__list--title'>{t.studentslist}</h4>
                <button className="btn-add btn">{t.addnewstudent}</button>
            </div>
            <div className="mt-4">
                <table className='table text-center'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>{t.name.toUpperCase()}</th>
                            <th>EMAIL</th>
                            <th>{t.number.toUpperCase()}</th>
                            <th>{t.deadline.toUpperCase()}</th>
                            <th>{t.edit.toUpperCase()}</th>
                            <th>{t.remove.toUpperCase()}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i class="fa-solid fa-address-book"></i></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td><i className="fa-solid fa-user-pen"></i></td>
                            <td> <i className="fa-solid fa-trash"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Student;
