import React, { useCallback, useEffect } from 'react';
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import RouteName from '../../CustomRoutes/RouteName';
import { MainSection} from '../../Components';
import { cashbookSchema} from '../../utils/FormValidation';
import { create } from '../../store/Slices/cashbookSlice';
import { CustomLoader } from '../../Components/Shared';
import { getAllUsers } from '../../store/Slices/userSlice';
import Forms from './Forms';
const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let breadcrumb = [
        { title: "Home", link: RouteName.HOME },
        { title: "Cashbook", link: RouteName.CASHBOOK },
    ]
    const { loading } = useSelector((state) => ({
        ...state.auth,
    }));

    const { create_update_loading } = useSelector((state) => ({
        ...state.cashbook,
    }));

    const { users } = useSelector((state) => ({
        ...state.user,
    }));

    const getUsers = useCallback(() => {
        dispatch(getAllUsers({}));
    }, [dispatch])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    const handleCashbook = (payload) => {
        dispatch(create({ payload, navigate, toast }));
    }

    return (
        <MainSection breadcrumb={breadcrumb} backLink={RouteName.CASHBOOK} breadcrumbTitle="Create" cardTitle="Back">
            {create_update_loading ? <CustomLoader /> : ''}
            <Formik initialValues={{ user: "", type: "", title: '',amount:"" }}
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

export default Add
