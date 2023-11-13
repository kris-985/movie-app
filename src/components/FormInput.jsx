import { useState } from 'react';
import './SignUp.css';

const FormInput = (props) => {
    const{label,errorMessage,onChange,id,...inputProps}=props;
    const [focused, setFocused]=useState(false);
    const handleFocus=(e)=>{
        setFocused(true)
    
    }
    return (
    <div>
        <label>{label}
        </label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={()=>{inputProps.name==="confirmPassword" && setFocused(true)}} focused={focused.toString()}/>
        <span className='error-message'>{errorMessage}</span>
    </div>
  )
}

export default FormInput