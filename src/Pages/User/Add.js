import React from 'react';
import { Formik } from "formik";

import RouteName from '../../CustomRoutes/RouteName';
import { MainSection, Input, Select } from '../../Components';
import { roleTypes } from '../../utils/Constant';
import { UserSchema } from '../../utils/FormValidation';
const Add = () => {
    let breadcrumb = [
        { title: "Home", link: RouteName.HOME },
        { title: "Users", link: RouteName.USER },
    ]
    return (
        <MainSection breadcrumb={breadcrumb} backLink={RouteName.USER} breadcrumbTitle="Create User" cardTitle="User">
            <Formik initialValues={{ email: "", password: "", name: '' }}
                validationSchema={UserSchema}
                enableReinitialize
                onSubmit={(values) => console.log(values)}>
                {({ handleChange, handleSubmit, errors, values, handleBlur }) => (

                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <Input name="name" label="Your Name" placeholder="Name" onChange={handleChange('name')} error={errors.name} />
                                <Input name="email" label="Email" type="email" placeholder="Email" onBlur={handleBlur('email')} onChange={handleChange('email')} error={errors.email} />
                                <Input name="password" label="Password" type="password" placeholder="Password" onBlur={handleBlur('password')} onChange={handleChange('password')} error={errors.password} />
                            </div>
                            <div className='col-md-6'>
                                <Select label="Select Role" placeholder="Select Role" name="role" onBlur={handleBlur('role')} onChange={handleChange('role')} data={roleTypes} error={errors.role}/>
                                <Input name="photo" label="Photo" type="file" />
                                <Input name="phone" label="Phone" type="text" placeholder="Phone" />
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
