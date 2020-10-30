import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Input } from 'antd'
import { Button } from 'antd';
import './Login.css'


const Login = () => {
    const history = useHistory()
    const [email, setemail] = useState([])
    const [password, setpassword] = useState([])

    const styles = {
        container: {
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center'
        }
    }

    const handleChange = (e) => {
        e.target.id === 'email' && setemail(e.target.value)
        e.target.id === 'password' && setpassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && password) {
            history.push('/admin')
        }
    }

 
    return (
        <main style={styles.container}>
        <h1>Are you an Admin?</h1>
        <h3>Log In Here</h3>
        <label>Email</label>
        <Input id={'email'} onChange={handleChange}></Input>
        <label>Password</label>
        <Input id={'password'} onChange={handleChange}></Input>
        <Button type='primary' onClick={handleSubmit}>Login</Button>
        </main>
    )
}

export default Login