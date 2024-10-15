import React, { useEffect } from 'react'
import { useUser } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import SalesOverView from './SalesOverView'
import SalesPerCategory from './SalesPerCategory'
import TopSellingGrocery from './TopSellingGrocery'

const DashBoard = () => {
    const { isLoggedIn } = useUser()

    const navigate = useNavigate()


    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn, navigate])



    return (

        <main className='p-2 w-[75%] max-md:w-[95%] max-md:mx-auto my-[40%] md:ml-[25%]  md:my-[10%] text-center '>
         <SalesOverView/>
         <SalesPerCategory/>
         <TopSellingGrocery/>
        </main>

    )
}

export default DashBoard
