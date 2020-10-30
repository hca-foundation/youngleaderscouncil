import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Input, Form, Button } from 'antd';
import './Login.css'


const Login = () => {
    const history = useHistory()
    const [email, setemail] = useState([])
    const [password, setpassword] = useState([])

    const styles = {
        container: {
            width: '325px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
            margin: 'auto'
        },
        button: {
            marginTop: '1.7em',
            width: '20em',
            backgroundColor: '#454B60'
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
        <>
        <Form>
        <main className='login-container' style={styles.container}>
        <h1 className='login-header'>Sign in to your account</h1>
        <label>Email</label>
        <Input id={'email'} onChange={handleChange}></Input>
        <label>Password</label>
        <Input id={'password'} onChange={handleChange}></Input>
        <Button style={styles.button} size='large' shape='round' type='primary' onClick={handleSubmit}>Login</Button>
        </main>
            
        </Form>
        </>
    )
}

export default Login