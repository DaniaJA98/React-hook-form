import { useState } from "react";
//Hook personalizado
export const useFormulario = (initialState = {}) => {

    const [inputs, setInputs] = useState(initialState)

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        // El old tomara la info que transmitimos en e.target
        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

const reset = () => {
    setInputs(initialState);
}

return [inputs,handleChange,reset];
};


