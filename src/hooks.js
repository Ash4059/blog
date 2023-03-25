import { useState } from "react";

export function useFormInput(initVal){
    const [value,setVal] = useState(initVal);

    function handleChange(e){
        setVal(e.target.value);
    }

    return {
        value : value,
        onChange:handleChange
    };
}