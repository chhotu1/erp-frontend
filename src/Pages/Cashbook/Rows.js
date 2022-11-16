import React from 'react';
import { useDispatch } from "react-redux";
import { FaTrashAlt,FaRegEdit } from "react-icons/fa";
import { remove } from '../../store/Slices/cashbookSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Rows = (props) => {
    const { data, index } = props;
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        console.log(data._id, 'props.data._id');
        let id = data._id;
        dispatch(remove({ id, toast }));
    }

    return (
        <tr key={index}>
            <th scope="row">
                <a href="#">{index + 1}</a>
            </th>
            <td>{data.title}</td>
            <td>
                <a href="#" className="text-primary">
                    {data.amount}
                </a>
            </td>
            <td>{data?.type}</td>
            <td>{data?.user?.name}</td>
            <td>{data?.date}</td>
            <td>
                <div className="btn btn-info btn-sm"><Link to={'/cashbook/' + data._id} ><FaRegEdit /></Link></div>
                <div className="btn btn-danger btn-sm m-2" onClick={handleDelete}><FaTrashAlt /></div>
            </td>
        </tr>
    )
}

export default Rows
