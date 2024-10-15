
import { Link } from 'react-router-dom'
import { useUser } from '../context/userContext'

const Header = () => {
  const { isLoggedIn,setIsLoggedIn } = useUser()

  return (
    <header className='fixed top-0 w-[100%] mx-auto   bg-slate-700 flex justify-around p-2 items-center flex-wrap'>
      <h1 className='text-2xl font-bold text-slate-300 '>Welcome to Destion</h1>
      <nav className=' my-3'>
        {isLoggedIn ?
          <>
            {/* <Link to={'/dashboard'} className=' rounded-md p-2 font-semibold text-green-300 border-2'>DashBoard</Link> */}
            <button
            onClick={()=>setIsLoggedIn(false)}
            className=' rounded-md p-2 font-semibold text-white border-2 mx-3'>Logout</button>

          </>

          :
          <>
            <Link to={'/'} className=' rounded-md p-2 font-semibold text-green-300 border-2'>Login</Link>
            <Link to={"/signup"} className=' rounded-md p-2 font-semibold text-white border-2 mx-3'>SignUp</Link>
          </>
        }
      </nav>
    </header>
  )
}

export default Header
