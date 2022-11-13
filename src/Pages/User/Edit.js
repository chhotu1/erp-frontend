import React, { useEffect } from 'react';
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import RouteName from '../../CustomRoutes/RouteName';
import { MainSection } from '../../Components';
import { UserSchema } from '../../utils/FormValidation';
import { register } from '../../store/Slices/authSlice';
import { CustomLoader } from '../../Components/Shared';
import Forms from './Forms';
import { getUserById, userUpdate } from '../../store/Slices/userSlice';
const Edit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    
    let breadcrumb = [
        { title: "Home", link: RouteName.HOME },
        { title: "Users", link: RouteName.USER },
    ]
    const {  loading,user } = useSelector((state) => ({
        ...state.user,
    }));   
    useEffect(()=>{
        getUserbyId();
    },[params]) 

    const getUserbyId=()=>{
        let id = params.id
        dispatch(getUserById({ id }));
    }
    const handleRegister=(payload)=>{
        let id = params.id
        dispatch(userUpdate({ payload,id, navigate, toast }));
    }
    return (
        <MainSection breadcrumb={breadcrumb} backLink={RouteName.USER} breadcrumbTitle="Update User" cardTitle="User">
            {loading?<CustomLoader/>:''}
            <Formik initialValues={{ email: user?.email, password: user.password, name: user?.name,phone:user?.phone,role:user?.role }}
                validationSchema={UserSchema}
                enableReinitialize
                onSubmit={handleRegister}>
                {({ handleChange, handleSubmit, errors, values, handleBlur }) => (
                    <form className="row g-3" onSubmit={handleSubmit}>
                       <Forms errors={errors} handleChange={handleChange} handleBlur={handleBlur} values={values}/>
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
