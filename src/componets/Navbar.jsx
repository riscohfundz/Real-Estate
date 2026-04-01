import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [showmobileMenu, setShowMobileMenu] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    // Handle body scroll when mobile menu opens
    useEffect(() => {
        if (showmobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showmobileMenu])

    // Check login status
    useEffect(() => {
        const status = localStorage.getItem("isLoggedIn")
        setIsLoggedIn(status === "true")
    }, [location])

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn")
        setIsLoggedIn(false)
        navigate("/") // redirect to login/signup
    }

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                
                <img src={assets.logo} alt="" />

                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>

                {/* ✅ Desktop Auth Button */}
                {
                    !isLoggedIn ? (
                        <Link
                            to="/"
                            className='hidden md:block bg-white px-8 py-2 rounded-full'
                        >
                            Sign up
                        </Link>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className='hidden md:block bg-red-500 text-white px-8 py-2 rounded-full'
                        >
                            Logout
                        </button>
                    )
                }

                <img 
                    onClick={() => setShowMobileMenu(true)} 
                    src={assets.menu_icon} 
                    className='md:hidden w-7 cursor-pointer' 
                    alt="" 
                />
            </div>

            {/* .....Mobile Menu..... */}
            <div className={`md:hidden ${showmobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img 
                        onClick={() => setShowMobileMenu(false)} 
                        src={assets.cross_icon} 
                        className='w-6' 
                        alt="" 
                    />
                </div>

                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full'>Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full'>About</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full'>Projects</a>
                    <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full'>Testimonials</a>

                    {/* ✅ Mobile Auth Button */}
                    {
                        !isLoggedIn ? (
                            <Link 
                                to="/" 
                                onClick={() => setShowMobileMenu(false)} 
                                className='px-4 py-2 rounded-full bg-black text-white mt-3'
                            >
                                Sign up
                            </Link>
                        ) : (
                            <button
                                onClick={() => {
                                    handleLogout()
                                    setShowMobileMenu(false)
                                }}
                                className='px-4 py-2 rounded-full bg-red-500 text-white mt-3'
                            >
                                Logout
                            </button>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar