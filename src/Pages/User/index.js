import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import RouteName from '../../CustomRoutes/RouteName';
import MainSection from '../../Components/MainSection';
import { getAllUsers } from '../../store/Slices/userSlice';
import Rows from './Rows';
const User = () => {
    let breadcrumb = [
        { title: "Home", link: RouteName.HOME },
    ]
    const dispatch = useDispatch();
    const user = useSelector((state) => ({
        ...state.user,
    }));
    
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
                    {
                        user.users && user.users.data ? (
                            user.users && user.users.data.map((item, index) => <Rows key={item._id} data={item} index={index} />)
                        ) : null
                    }
                </tbody>
            </table>
        </MainSection>
    )
}

export default User
