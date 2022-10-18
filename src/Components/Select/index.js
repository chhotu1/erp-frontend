import Form from 'react-bootstrap/Form';
const Select = (props) => {
    const { error, label, name,placeholder,data, ...otherProps } = props;
    let classname = `${error ? 'invalid-form' : ''}`;

    return (
        <div className="col-md-12">
            <label htmlFor={"inputNanme4"} className="form-label">
                {label}
            </label>
            <Form.Select className={classname} aria-label="Default select example" {...otherProps}>
                <option>{placeholder}</option>
                {data && data.map((item,index)=>{
                    return(
                        <option value={item.value} key={index}>{item.label}</option>
                    )
                })}
            </Form.Select>
            <div className="error">{error}</div>
        </div>
    )
}

export default Select
