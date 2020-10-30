import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { Amplify, Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import Container from './Container'
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

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
    Auth.signOut()
      .catch(err => console.log('error signing out: ', err))
  }
  return (
    <Container>
      <h1>Profile</h1>
      <h2>Username: {user.username}</h2>
      <h3>Email: {user.email}</h3>
      <h4>Phone: {user.phone_number}</h4>
      <Button onClick={signOut}>Sign Out</Button>
    </Container>
  );
}

export default withAuthenticator(Profile)


