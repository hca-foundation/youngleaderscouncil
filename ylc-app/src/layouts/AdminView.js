import '../App.css';
import React, { useState, useEffect } from 'react'
import { Button, Layout } from 'antd'
import { Amplify, Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import AppHeader from '../components/AppHeader'
import Container from '../components/Container'
import aws_exports from '../aws-exports';

Amplify.configure(aws_exports);

const { Content } = Layout

const user = {
    username: 'demo',
    email: 'demo@demo.com',
    phone_number: '555-1234',
}

function Profile() {
  useEffect(() => {
    checkUser()
  }, [])
  const [user, setUser] = useState({}) 
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser()
      const userInfo = { username: data.username, ...data.attributes, }
      setUser(userInfo)
    } catch (err) { console.log('error: ', err) }
  }
  function signOut() {
      console.log('signOut fired')
    Auth.signOut()
      .catch(err => console.log('error signing out: ', err))
  }
  return (
    <div>
        <AppHeader />
        <Content
            className='site-layout'
            style={{ padding: '0 4rem', marginTop: '4rem' }}>
            <div className='site-layout-background' style={{ padding: '2rem', minHeight: '100vh' }}>
                <div className='basic-card'>
                    <h1>Profile</h1>
                    <h3>Username: {user.username}</h3>
                    <h3>Email: {user.email}</h3>
                    <h3>Phone: {user.phone_number}</h3>
                    <Button onClick={signOut}>Sign Out</Button>
                </div>
                <div className='basic-card'>
                    <h1>Testing - Admin View</h1>
                </div>
            </div>
        </Content>
    </div>
  );
}

export default withAuthenticator(Profile)