import React from "react";

const InputText = React.forwardRef(({ onChange, className, placeholder, value }, ref) => {
    return (
        <input 
            type="text" 
            onChange={onChange} 
            className={className} 
            placeholder={placeholder} 
            defaultValue={value} 
            ref={ref}
        />
    );
});

export default InputText;
