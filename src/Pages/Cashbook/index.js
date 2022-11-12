import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import RouteName from '../../CustomRoutes/RouteName';
import MainSection from '../../Components/MainSection';
import Rows from './Rows';
import { CustomLoader } from '../../Components/Shared';
import { cashbookList } from '../../store/Slices/cashbookSlice';
const Cashbook = () => {
    let breadcrumb = [
        { title: "Home", link: RouteName.HOME },
    ]
    const dispatch = useDispatch();

    const { cashbooks, loading } = useSelector((state) => ({
        ...state.cashbook,
    }));

    const getCashbooks = useCallback(() => {
        dispatch(cashbookList({}));
      }, [dispatch])
    
      useEffect(() => {
        getCashbooks()
      }, [getCashbooks])


    return (
        <MainSection linkTitle="Add new cashbook" link={RouteName.CASHBOOK_CREATE}
            breadcrumb={breadcrumb} breadcrumbTitle="Cashbook" cardTitle="Cashbook">
                {loading?<CustomLoader/>:''}
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Type</th>
                            <th scope="col">User</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                            cashbooks && cashbooks.data ? (
                                cashbooks && cashbooks.data.map((item, index) => <Rows key={item._id} data={item} index={index} />)
                            ) : null
                        }
                       
                    </tbody>
                </table>
            </div>
        </MainSection>
    )
}

export default Cashbook
