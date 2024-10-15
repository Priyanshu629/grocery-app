

import React, { useEffect, useRef, useState } from 'react'
import { useUser } from '../context/userContext'
import { Link, Outlet, useNavigate, } from 'react-router-dom'

const Body = () => {
    const { isLoggedIn } = useUser()
    const navigate = useNavigate()
    const menuRef = useRef()
    const [isOpen, setIsOpen] = useState(false)


    const handleToggel = () => {
        setIsOpen(pre => !pre)
    }


    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn, navigate])

    const isActive = (path) => location.pathname === path

    return (
        <div className='w-[100%] p-2 h-[100vh]'>

            <aside ref={menuRef} className={`fixed    top-[80px] md:w-[25%] max-sm:w-[70%] max-md:w-[50%] mr-[5%] h-[100%] bg-slate-500 p-2 transition-all duration-300 ease-in-out ${isOpen ? "left-0" : "left-[-100%]"} md:left-0 `}>
                <div className=' p-2  w-[50px] h-[50px] hidden max-md:block'>
                    <span
                        onClick={handleToggel}
                        className='font-bold  text-2xl text-black cursor-pointer'>x</span>


                </div>
                <nav className='flex flex-col text-xl text-white  items-center'>
                    <Link
                        onClick={() => setIsOpen(false)}
                        className={`my-3 border-2  p-1 rounded border-orange-400 font-semibold w-full ${isActive("/body/home") ? "active" : ""}`} to={"/body/home"}> {isActive("/body/home") ? "➡️" : ""} Home</Link>

                    <Link
                        onClick={() => setIsOpen(false)}
                        className={`my-2 border-2 p-1 rounded border-orange-400 font-semibold w-full ${isActive("/body/dashboard") ? "active" : ""}`} to={"/body/dashboard"}>{isActive("/body/dashboard") ? "➡️" : ""} DashBoard</Link>

                    <Link
                        to={"/body/profile"}
                        onClick={() => setIsOpen(false)}
                        className={`my-2 border-2 p-1 rounded border-orange-400 font-semibold w-full ${isActive("/body/profile") ? "active" : ""}`}>
                        {isActive("/body/profile") ? "➡️" : ""} Profile</Link>

                    <Link
                        to={"/body/settings"}
                        onClick={() => setIsOpen(false)}
                        className={`my-2 border-2 p-1 rounded border-orange-400 font-semibold w-full ${isActive("/body/settings") ? "active" : ""}`}>
                        {isActive("/body/settings") ? "➡️" : ""} Settings</Link>
                </nav>

            </aside>

            <Outlet />
            {
                isOpen ? "" : <div className='fixed p-2 top-[110px] w-[50px] h-[50px] hidden max-md:block'>

                    <span
                        onClick={handleToggel}
                        className='font-bold  text-2xl text-black cursor-pointer'>☰</span>

                </div>
            }
        </div>
    )
}

export default Body

