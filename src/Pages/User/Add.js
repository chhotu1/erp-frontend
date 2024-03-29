import React from 'react';
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import RouteName from '../../CustomRoutes/RouteName';
import { MainSection } from '../../Components';
import { UserSchema } from '../../utils/FormValidation';
import { register } from '../../store/Slices/authSlice';
import { CustomLoader } from '../../Components/Shared';
import Forms from './Forms';
const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let breadcrumb = [
        { title: "Home", link: RouteName.HOME },
        { title: "Users", link: RouteName.USER },
    ]
    const { loading } = useSelector((state) => ({
        ...state.auth,
    }));
    const handleRegister = (payload) => {
        dispatch(register({ payload, navigate, toast }));
    }

    return (
        <MainSection breadcrumb={breadcrumb} backLink={RouteName.USER} breadcrumbTitle="Create User" cardTitle="User">
            {loading ? <CustomLoader /> : ''}
            <Formik initialValues={{ email: "", password: "", name: '' }}
                validationSchema={UserSchema}
                enableReinitialize
                onSubmit={handleRegister}>
                {({ handleChange, handleSubmit, errors, values, handleBlur }) => (
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <Forms errors={errors} handleChange={handleChange} handleBlur={handleBlur} values={values} />
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
