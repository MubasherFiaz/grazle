import React from 'react'
import UserDetail from '../components/user/UserDetail'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const User = () => {
  return (
    <div>
    <Navbar/>
      <UserDetail/>
      <Footer/>
    </div>
  )
}

export default User
