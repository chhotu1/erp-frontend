import React from 'react';
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import RouteName from '../../CustomRoutes/RouteName';
import { MainSection, Input, Select } from '../../Components';
import { roleTypes } from '../../utils/Constant';
import { UserSchema } from '../../utils/FormValidation';
import { register } from '../../store/Slices/authSlice';
import { CustomLoader } from '../../Components/Shared';
const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let breadcrumb = [
        { title: "Home", link: RouteName.HOME },
        { title: "Cashbook", link: RouteName.CASHBOOK },
    ]
    const {  loading } = useSelector((state) => ({
        ...state.auth,
    }));    
    const handleRegister=(payload)=>{
        dispatch(register({ payload, navigate, toast }));
    }

    return (
        <MainSection breadcrumb={breadcrumb} backLink={RouteName.CASHBOOK} breadcrumbTitle="Create" cardTitle="Back">
            {loading?<CustomLoader/>:''}
            <Formik initialValues={{ email: "", password: "", name: '' }}
                validationSchema={UserSchema}
                enableReinitialize
                onSubmit={handleRegister}>
                {({ handleChange, handleSubmit, errors, values, handleBlur }) => (
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <Input name="name" label="Your Name" placeholder="Name" onChange={handleChange('name')} error={errors.name} />
                                <Input name="email" label="Email" type="email" placeholder="Email" onBlur={handleBlur('email')} onChange={handleChange('email')} error={errors.email} />
                                <Input name="password" label="Password" type="password" placeholder="Password" onBlur={handleBlur('password')} onChange={handleChange('password')} error={errors.password} />
                            </div>
                            <div className='col-md-6'>
                                <Select label="Select Role" placeholder="Select Role" name="role" onBlur={handleBlur('role')} onChange={handleChange('role')} data={roleTypes} error={errors.role} />
                                <Input name="photo" label="Photo" type="file" accept="image/*" />
                                <Input name="phone" label="Phone" type="text" placeholder="Phone" onBlur={handleBlur('phone')} onChange={handleChange('phone')} error={errors.phone} />
                            </div>
                        </div>
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
