import React,{ memo } from "react";

const Input = (props) => {
    const { error, label, name, ...otherProps } = props;
    let classname = `form-control ${error ? 'invalid-form' : ''}`;
    console.log("jjj")
    return (
        <div className="col-12">
            <label htmlFor={"inputNanme4" + name} className="form-label">
                {label}
            </label>
            <input className={classname} id={"inputNanme4" + name} {...otherProps} />
            <div className="error">{error}</div>
        </div>
    )
}

export default memo(Input)
