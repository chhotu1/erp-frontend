import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
const Rows = (props) => {
    const { data, index } = props;
    const handleDelete = (e) => {
        e.preventDefault();
        // props.data._id
    }
    return (
        <tr key={index}>
            <th scope="row">
                <a href="#">{index + 1}</a>
            </th>
            <td>{data.name}</td>
            <td>
                <a href="#" className="text-primary">
                    {data.email}
                </a>
            </td>
            <td>{data?.phone}</td>
            <td>
                <div className="btn btn-info btn-sm"><Link to={'/user/edit/' + data._id} ><FaRegEdit /></Link></div>
                <div className="btn btn-danger btn-sm m-2" onClick={handleDelete}><FaTrashAlt /></div>
            </td>
        </tr>
    )
}

export default Rows
