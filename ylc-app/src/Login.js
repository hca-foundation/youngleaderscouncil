import React, { setState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Input } from 'antd'
import { Button } from 'antd';


const Login = () => {
    const history = useHistory()
    const [email, setemail] = setState([])
    const [password, setpassword] = setState([])

    const handleChange = (e) => {
        e.target.id === 'email' && setemail(e.target.value)
        e.target.id === 'password' && setpassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/')
    }

 
    return (
        <>
        <h1>Please log into your account to manage applications</h1>
        <label>Email</label>
        <Input id={'email'} onChange={handleChange}></Input>
        <label>Password</label>
        <Input id={'password'} onChange={handleChange}></Input>
        <Button onClick={handleSubmit}></Button>
        </>
    )
}

export default Login