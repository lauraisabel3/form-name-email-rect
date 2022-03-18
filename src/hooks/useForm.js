import { useState } from "react";
import { helpHttp } from "../helpers/helpHttps";


const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };
    
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form))
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors.lenght === 0)){
            setLoading(true)
            helpHttp()
            .post("https://formsubmit.co/ajax/lauraisabel543@gmail.com", {
                body: form,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }})
            .then((res) => {
                setLoading(false);
                setResponse(true);
                setTimeout(() => {
                    setResponse(false)
                }, 5000) 
            })
        }else{
            return
        }
        
    };

    return {
        form,
        errors,
        loading,
        response,
        handleBlur,
        handleChange,
        handleSubmit,
    }
}


export default useForm