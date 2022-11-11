import React, { useCallback, useEffect } from 'react';
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import RouteName from '../../CustomRoutes/RouteName';
import { MainSection, Input, Select } from '../../Components';
import { cashbookTypes } from '../../utils/Constant';
import { cashbookSchema, UserSchema } from '../../utils/FormValidation';
import { create } from '../../store/Slices/cashbookSlice';
import { CustomLoader } from '../../Components/Shared';
import { getAllUsers } from '../../store/Slices/userSlice';
import { Form } from 'react-bootstrap';
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
                        <div className='row'>
                            <div className='col-md-6'>

                                <label className="form-label">
                                    Select user
                                </label>
                                <Form.Select aria-label="Default select example" name="user" onBlur={handleBlur('user')} onChange={handleChange('user')}>
                                    <option>Select user</option>
                                    {users && users.data && users.data.map((item, index) => {
                                        return (
                                            <option value={item._id} key={index}>{item.name}</option>
                                        )
                                    })}
                                </Form.Select>
                                <div className="error">{errors.user}</div>
                                <Input name="title" label="Title" placeholder="Title" onChange={handleChange('title')} error={errors.title} />

                            </div>
                            <div className='col-md-6'>
                                <Select label="Select Type" placeholder="Select Type" name="type" onBlur={handleBlur('type')} onChange={handleChange('type')} data={cashbookTypes} error={errors.type} />
                                <Input name="amount" label="Amount" type="text" placeholder="Amount" onBlur={handleBlur('amount')} onChange={handleChange('amount')} error={errors.amount} />
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
