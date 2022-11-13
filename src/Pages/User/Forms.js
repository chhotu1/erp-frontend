import React from 'react'
import { Input, Select } from '../../Components';
import { roleTypes } from '../../utils/Constant';

const Forms = (props) => {
    const {handleChange, errors, handleBlur,values} = props;
    return (
        <div className='row'>
            <div className='col-md-6'>
                <Input name="name" label="Your Name" placeholder="Name" value={values?.name?values?.name:''} onChange={handleChange('name')} error={errors.name} />
                <Input name="email" label="Email" type="email" placeholder="Email" value={values?.email?values?.email:''} onBlur={handleBlur('email')} onChange={handleChange('email')} error={errors.email} />
                <Input name="password" label="Password" type="password" value={values?.password?values?.password:''} placeholder="Password" onBlur={handleBlur('password')} onChange={handleChange('password')} error={errors.password} />
            </div>
            <div className='col-md-6'>
                <Select label="Select Role" placeholder="Select Role" value={values?.role?values?.role:''} name="role" onBlur={handleBlur('role')} onChange={handleChange('role')} data={roleTypes} error={errors.role} />
                <Input name="photo" label="Photo" type="file" accept="image/*" />
                <Input name="phone" label="Phone" type="text" placeholder="Phone" value={values?.phone?values?.phone:''} onBlur={handleBlur('phone')} onChange={handleChange('phone')} error={errors.phone} />
            </div>
        </div>
    )
}

export default Forms
