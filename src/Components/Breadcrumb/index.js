import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, data }) => {
    return (
        <div className="pagetitle">
            <h1>{title?title:''}</h1>
            <nav>
                <ol className="breadcrumb">
                    {data && data.map((item, index) => {
                        return (
                            <li className="breadcrumb-item" key={index}>
                                <Link to={item.link}>{item.title}</Link>
                            </li>
                        )
                    })}
                    <li className="breadcrumb-item active">{title}</li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb
