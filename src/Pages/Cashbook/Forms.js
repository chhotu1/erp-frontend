import React from 'react'
import { Input, Select } from '../../Components';
import { cashbookTypes } from '../../utils/Constant';
import { Form } from 'react-bootstrap';

const Forms = (props) => {
    const {handleChange, errors, handleBlur,values,users} = props;
    return (
        <div className='row'>
            <div className='col-md-6'>

                <label className="form-label">
                    Select user
                </label>
                <Form.Select aria-label="Default select example" value={values?.user?values?.user:''} name="user" onBlur={handleBlur('user')} onChange={handleChange('user')}>
                    <option>Select user</option>
                    {users && users.data && users.data.map((item, index) => {
                        return (
                            <option value={item._id} key={index}>{item.name}</option>
                        )
                    })}
                </Form.Select>
                <div className="error">{errors.user}</div>
                <Input name="title" label="Title" placeholder="Title" value={values?.title?values?.title:''} onChange={handleChange('title')} error={errors.title} />
                <Input type="date" name="date" label="Payment Date" value={values?.date?values?.date:''} placeholder="Date" onChange={handleChange('date')} error={errors.date} />

            </div>
            <div className='col-md-6'>
                <Select label="Select Type" placeholder="Select Type" value={values?.type?values?.type:''} name="type" onBlur={handleBlur('type')} onChange={handleChange('type')} data={cashbookTypes} error={errors.type} />
                <Input name="amount" label="Amount" type="text" value={values?.amount?values?.amount:0} placeholder="Amount" onBlur={handleBlur('amount')} onChange={handleChange('amount')} error={errors.amount} />
            </div>
        </div>
    )
}

export default Forms
