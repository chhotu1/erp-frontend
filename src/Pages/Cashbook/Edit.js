import React, { useCallback, useEffect } from 'react';
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import RouteName from '../../CustomRoutes/RouteName';
import { MainSection } from '../../Components';
import { cashbookSchema } from '../../utils/FormValidation';
import { cashbookUpdate, create, getCashbookById } from '../../store/Slices/cashbookSlice';
import { CustomLoader } from '../../Components/Shared';
import { getAllUsers } from '../../store/Slices/userSlice';
import Forms from './Forms';
const Edit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    let breadcrumb = [
        { title: "Home", link: RouteName.HOME },
        { title: "Cashbook", link: RouteName.CASHBOOK },
    ]

    const { create_update_loading,cashbook,loading } = useSelector((state) => ({
        ...state.cashbook,
    }));

    const { users } = useSelector((state) => ({
        ...state.user,
    }));

    const getUsers = useCallback(() => {
        dispatch(getAllUsers({}));
    }, [dispatch])

    useEffect(()=>{
        getCashbookbyId();
    },[id]) 

    const getCashbookbyId=()=>{
        dispatch(getCashbookById({ id }));
    }

    useEffect(() => {
        getUsers()
    }, [getUsers])

    const handleCashbook = (payload) => {
        dispatch(cashbookUpdate({ payload,id, navigate, toast }));
    }

    return (
        <MainSection breadcrumb={breadcrumb} backLink={RouteName.CASHBOOK} breadcrumbTitle="Update" cardTitle="Back">
            {create_update_loading || loading ? <CustomLoader /> : ''}
            <Formik initialValues={{ user: cashbook?.user?._id, type: cashbook?.type, title:cashbook?.title,amount:cashbook?.amount,date:cashbook?.date }}
                validationSchema={cashbookSchema}
                enableReinitialize
                onSubmit={handleCashbook}>
                {({ handleChange, handleSubmit, errors, values, handleBlur }) => (
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <Forms errors={errors} handleChange={handleChange} handleBlur={handleBlur} values={values} users={users}/>
                        <div className="text-right">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </MainSection>
    )
}

export default Edit
