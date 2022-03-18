
import React from "react";
import { useState } from "react/cjs/react.production.min";
import useForm from "../hooks/useForm";
import MainButton from "../MainButton";
import Message from "../Message";
import MainFormStyles from "./MainFormStyles.module.css"

const initialForm = {
    name: "",
    lastName: "",
    email:"",
    password: ""
};

const validationsForm = (form) => {
    let errors = [];
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if(!form.name.trim()){
        errors.name = 'First name is requiered'
    }else if(!regexName.test(form.name.trim())){
        errors.name = "Invalid first name"
    }else if( !form.lastName.trim()) {
        errors.lastName = "Last name is required"
    }else if(!regexName.test(form.lastName.trim())){
        errors.lastName = "Invalid last name"
    }else if (!form.email.trim()) {
        errors.email = "Email is required"
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "Invalid email"
    }

    return errors


}

const MainForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useForm(initialForm, validationsForm)
    return (
        <div
        className={MainFormStyles.main_form_container}>
             <form
             className={MainFormStyles.main_form}
             onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.name}
                required></input>
                {errors.name  && <p>{errors.name}!</p>}
                <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.lastName}
                ></input>
                {errors.lastName && <p>{errors.lastName}!</p>}
                <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.email}></input>
                {errors.email && <p>{errors.email}!</p>}
                <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.password}></input>

            <MainButton function={handleSubmit}></MainButton>
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </form>
        {response && <Message  content="Your information was sent successfully!"/>}
        </div>
       
    )
}

export default MainForm