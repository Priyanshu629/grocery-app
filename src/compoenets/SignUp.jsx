import { useState } from 'react'
import { LuLogIn } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { useFormik } from 'formik';
import { signUpSchema } from '../validationSchemas/signUpSchema';


const SignUp = () => {

    const [passShow, setPassShow] = useState(false)
    const [confirPassShow, setConfirmPassShow] = useState(false)



    const initialValues = {
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    }
    const { values, handleBlur, handleSubmit, handleChange, touched, errors } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
        }
    })

    return (
        <div className='w-[100%] my-[5%]'>
            <form onSubmit={handleSubmit} className='bg-amber-300 max-sm:w-[90%] lg:w-[40%] md:w-[50%]  mx-auto my-4 p-3 rounded-md  max-sm:my-[30%]  max-md:my-[20%] md:my-[7%]'>
                <h1 className='text-center text-xl font-bold my-2 bg-purple-300 p-2 rounded-sm '>Register YourSelf</h1>

                {/* Email Field*/}

                <div className='flex flex-col my-2'>

                    <label className='font-semibold my-2' id='email'>Enter  Email 👇</label>

                    <input
                        autoComplete='off'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className='w-[90%] p-2 border-2 rounded-md border-pink-500' id='email' type="text" name="email" placeholder='Your Email' />
                    {touched.email && errors.email ? (
                        <p className="my-1 text-sm text-red-800 italic font-semibold">{errors.email}</p>
                    ) : null}
                </div>

                {/* Username */}
                <div className='flex flex-col my-2'>

                    <label className='font-semibold my-2' id='username'>Enter Username  👇</label>

                    <input
                        autoComplete='off'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        className='w-[90%] p-2 border-2 rounded-md border-pink-500' id='username' type="text" name="username" placeholder='Your Username' />
                    {touched.username && errors.username ? (
                        <p className="my-1 text-sm text-red-800 italic font-semibold">{errors.username}</p>
                    ) : null}
                </div>

                {/* Password field */}
                <div className='flex flex-col my-2'>

                    <label className=' my-2 font-semibold' id='password'>Enter Password 👇</label>

                    <div className='flex p-2  border-pink-500 border-2 rounded-md items-center w-[90%] justify-between bg-white'>
                        <input
                            autoComplete='off'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className='w-[100%] border-none focus:outline-none' id='password' type={passShow == true ? "text" : "password"} name="password" placeholder='Your Password' />
                        {passShow ? <FaEye className='cursor-pointer' onClick={() => setPassShow(false)} /> : <FaRegEyeSlash className='cursor-pointer' onClick={() => setPassShow(true)} />
                        }
                    </div>
                    {touched.password && errors.password ? (
                        <p className="my-1 text-sm text-red-800 italic font-semibold">{errors.password}</p>
                    ) : null}
                </div>
                {/* Confirm Password */}

                <div className='flex flex-col my-2'>

                    <label className=' my-2 font-semibold' id='confirm-password'>Enter Confirm Password 👇</label>

                    <div className='flex p-2  border-pink-500 border-2 rounded-md items-center w-[90%] justify-between bg-white'>
                        <input
                            autoComplete='off'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            className='w-[100%] border-none focus:outline-none' id='confirm-password' type={confirPassShow == true ? "text" : "password"} name="confirmPassword" placeholder='Your Confirm Password' />
                        {confirPassShow ? <FaEye className='cursor-pointer' onClick={() => setConfirmPassShow(false)} /> : <FaRegEyeSlash className='cursor-pointer' onClick={() => setConfirmPassShow(true)} />
                        }
                    </div>
                    {touched.confirmPassword && errors.confirmPassword ? (
                        <p className="my-1 text-sm text-red-800 italic font-semibold">{errors.confirmPassword}</p>
                    ) : null}
                </div>


                <button className='hover:bg-green-600 hover:text-white w-[90%] sm:w-[50%] p-1 bg-green-400 rounded-md  font-bold text-lg border-2 border-green-900 mx-auto block my-3 ' type='submit'>Sign Up <LuLogIn className='inline-block text-xl text-pink-600 ' /></button>

                <div className='my-2  flex justify-between items-center flex-wrap-reverse font-semibold'>
                    <p>Already Have An Account ? <Link to={"/"} className='text-indigo-800'>Login</Link></p>

                </div>

            </form>
        </div>
    )
}

export default SignUp
