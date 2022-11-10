import React from 'react';
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { deleteUser } from '../../store/Slices/userSlice';
import { toast } from 'react-toastify';

const Rows = (props) => {
    const { data, index } = props;
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        console.log(data._id,'props.data._id');
        let id =data._id;
        dispatch(deleteUser({ id, toast }));
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
                <div className="btn btn-danger btn-sm m-2" onClick={handleDelete}><FaTrashAlt /></div>
            </td>
        </tr>
    )
}

export default Rows
