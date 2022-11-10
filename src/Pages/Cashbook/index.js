import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import RouteName from '../../CustomRoutes/RouteName';
import MainSection from '../../Components/MainSection';
import { getAllUsers } from '../../store/Slices/userSlice';
import Rows from './Rows';
import { CustomLoader } from '../../Components/Shared';
const Cashbook = () => {
    let breadcrumb = [
        { title: "Home", link: RouteName.HOME },
    ]
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => ({
        ...state.user,
    }));

    const getUsers = useCallback(() => {
        dispatch(getAllUsers({}));
      }, [dispatch])
    
      useEffect(() => {
        getUsers()
      }, [getUsers])


    return (
        <MainSection linkTitle="Add new cashbook" link={RouteName.CASHBOOK_CREATE}
            breadcrumb={breadcrumb} breadcrumbTitle="Cashbook" cardTitle="Cashbook">
                {loading?<CustomLoader/>:''}
            <div className="table-responsive">
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
                       
                    </tbody>
                </table>
            </div>
        </MainSection>
    )
}

export default Cashbook
