import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import RouteName from '../../CustomRoutes/RouteName';
import MainSection from '../../Components/MainSection';
import { getAllUsers } from '../../store/Slices/userSlice';
const User = () => {
    let breadcrumb = [
        { title: "Home", link: RouteName.HOME },
    ]
    const dispatch = useDispatch();
    const user = useSelector((state) => ({
        ...state.user,
    }));

    //   console.log(user.users,'users')
    useEffect(() => {
        dispatch(getAllUsers({}));
    }, []);


    return (
        <MainSection linkTitle="Add new user" link={RouteName.USER_CREATE}
            breadcrumb={breadcrumb} breadcrumbTitle="Users" cardTitle="Users">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.users &&user.users.data && user.users.data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">
                                    <a href="#">{index+1}</a>
                                </th>
                                <td>{item.name}</td>
                                <td>
                                    <a href="#" className="text-primary">
                                    {item.email}
                                    </a>
                                </td>
                                <td>{item?.phone}</td>
                                <td>
                                    <span className="badge bg-success">Approved</span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </MainSection>
    )
}

export default User
