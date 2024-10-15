import React, { useEffect } from 'react'
import { useUser } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const { isLoggedIn} = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn, navigate])

    return (
        <main className='w-[75%] max-md:w-[95%] max-md:mx-auto  md:ml-[25%] my-[40%] md:my-[10%] text-center'>
            <h1 className='font-bold text-4xl '>Your Profile</h1>
            
        </main>

    )
}

export default Profile
