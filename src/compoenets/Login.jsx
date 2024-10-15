import { useRef, useState } from 'react'
import { LuLogIn } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { useFormik } from 'formik';
import { loginSchema } from '../validationSchemas/loginSchema';

import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

const Login = () => {
    const { setIsLoggedIn, setUser } = useUser()
    const navigate = useNavigate()


    const [passShow, setPassShow] = useState(false)
    const [loginMsg, setLoginMsg] = useState("")



    const initialValues = {
        username: "",
        password: ""
    }
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        validateOnChange: true,
        validateOnBlur: true,

        onSubmit: (values, action) => {
            setUser(values.username)
            setIsLoggedIn(true)

            setLoginMsg("Login Successfull Redirecting to Home")
            setTimeout(() => {

                navigate("/body/home");
            }, 3000);


            action.resetForm()
        }
    })

    return (
        <div className='w-[100%] my-[5%]'>
            <form onSubmit={handleSubmit} className='bg-gray-300 w-[95%] sm:w-[40%]  mx-auto my-6 p-3 rounded-md max-sm:my-[30%] sm:my-[8%]  '>
                <h1 className='text-center text-xl font-bold my-3 bg-purple-400 p-2 rounded-sm italic'>Login to Your Account</h1>
                {loginMsg && <p className='text-green-700 text-lg text-center font-semibold'>{loginMsg}</p>}
                {/* Username or Email Field */}
                <div className='flex flex-col my-2'>

                    <label className='font-semibold my-2' id='username'>Enter Username 👇</label>

                    <input
                        autoComplete='off'
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}

                        className='w-[90%] p-2 border-2 rounded-md border-pink-500' id='username' type="text" name="username" placeholder='username' />
                    {touched.username && errors.username ? (
                        <p className="my-2 text-sm text-yellow-800 italic font-semibold">{errors.username}</p>
                    ) : null}
                </div>

                {/* Password field */}
                <div className='flex flex-col my-2 '>

                    <label className=' my-2 font-semibold' id='password'>Enter Password 👇</label>

                    <div className='flex p-2  border-pink-500 border-2 rounded-md items-center w-[90%] justify-between bg-white'>
                        <input
                            autoComplete='off'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-[100%] border-none focus:outline-none' id='password' type={passShow == true ? "text" : "password"} name="password" placeholder='Your Password' />
                        {passShow ? <FaEye className='cursor-pointer' onClick={() => setPassShow(false)} /> : <FaRegEyeSlash className='cursor-pointer' onClick={() => setPassShow(true)} />
                        }
                    </div>
                    {touched.password && errors.password ? (
                        <p className="my-2 text-sm text-yellow-800 italic font-semibold">{errors.password}</p>
                    ) : null}
                </div>


                <button className='hover:bg-green-600 hover:text-white w-[90%] sm:w-[50%] p-1 bg-green-400 rounded-md  font-bold text-lg border-2 border-green-900 mx-auto block my-3 ' type='submit'>Login <LuLogIn className='inline-block text-xl text-pink-600 ' /></button>

                <div className='my-2  flex justify-between items-center flex-wrap-reverse font-semibold'>
                    <p>Do not Have An Account ? <Link
                        to={"/signup"} className='text-indigo-800'>SignUp</Link></p>
                    <a href="" className='text-violet-900 underline my-2'>Forgot Password ?</a>
                </div>

            </form>
        </div>
    )
}

export default Login
