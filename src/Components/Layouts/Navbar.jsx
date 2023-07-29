import React, { useEffect, useState } from 'react'
import { Divide } from 'hamburger-react'
import { NavLink, Link } from 'react-router-dom'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import UserActions from '../Pages/userOperations/UserActions';
import PersonIcon from '@mui/icons-material/Person';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import useBasketStore from '../../assets/store/basket.store';

function Navbar() {
    const {basketData} = useBasketStore();

    const auth = getAuth();

    const [modal, setModal] = useState(false)

    const [showMenu, setshowMenu] = useState(false)
    const handleNavClick = ()=>{
        setshowMenu(!showMenu)
    }

    const [userClick, setUserClick] = useState(false)
    const handleUserClick =()=>{
        setUserClick(!userClick)
    }
    
    const [userControl, setUserControl] = useState(false)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
        const uid = user.uid;
        setUserControl(true)
       
      } else {
        setUserControl(false)
      }
    });
    },[])

    
    const handleSingOut = async()=>{
        await signOut(auth)
        window.location = "/"
        toast.success('Log Out Succesful!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

  
    
    
  return (
    <>
        <nav className="bg-teal-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
                <i className="h-7 mr-3 text-white"><FastfoodIcon fontSize='large'/></i>
                <span className="self-center text-2xl font-semibold whitespace-nowrap md:mt-3 mt-2 text-white">Burger</span>
            </a>
            <div  className="md:hidden justify-end text-start block -mt-[3px] ml-20">
                <div className='w-16 h-16 rounded-full relative inline-block'>
                    <button onClick={handleUserClick}><i className='w-16 md:h-12 h-16 md:py-2 py-0 md:border-b-4 border-b-0 border-white text-white rounded -mb-10 justify-center items-center relative mx-auto text-center flex'><PersonIcon fontSize='medium'/><i className="fa-solid fa-caret-down w-1 h-3 text-white"></i></i></button>
                    <div className={`${userClick ? "absolute" : "hidden"} right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                    <div className={`py-1 ${userControl ? "hidden" : "block"}`}>
                        <Link to="/" onClick={()=>setModal(true)} className="text-gray-700 block px-4 py-2 text-sm">login</Link>
                    </div>
                        <div className={`py-1 ${userControl ? "block" : "hidden"}`}>
                        <Link to="/" className="text-gray-700 block px-4 py-2 text-sm">Profile</Link>
                        <Link to="/basket" className="text-gray-700 block px-4 py-2 text-sm">my orders</Link>
                        <form >
                            <button onClick={handleSingOut} type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                        </form>
                        </div>
                    </div>    
                </div>
            </div>
            <button data-collapse-toggle="navbar-default" onClick={handleNavClick} type="button" className="top-0 right-0 p-3 text-3xl z-40 text-black rounded-lg md:hidden hover:bg-transparen hover:before:bg-transparent" aria-controls="navbar-default" aria-expanded="false">
                <Divide distance='md' color='white' size={22}/>
                </button>
                <div className='flex md:space-x-5'>
            <div className={`${showMenu?"flex": "hidden"} w-full relative md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border-2 text-center border-gray-100 rounded-lg w-[340px] sm:w-full bg-teal-950 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                <NavLink to="/" className="flex py-2 border-b-4 w-full border-white  text-white rounded md:bg-transparent ">Menu</NavLink>
                </li>
                <li>
                <NavLink to="/contact" className="flex py-2 border-b-4 w-full border-white  text-white rounded md:bg-transparent ">Contact</NavLink>
                </li>
                <li>
                <Link to='/basket' className='flex py-2 border-b-4 w-full border-white  text-white rounded md:bg-transparent '><ShoppingBasketIcon fontSize='medium'/>{basketData.map((i)=><p>{i.quantity}</p>)}</Link>
                </li>
            </ul>
            </div>

            
            <div className="md:block hidden -mt-[3px]">
                <div className='w-16 h-16 rounded-full relative inline-block'>
                    <button onClick={handleUserClick}><i className='w-16 md:h-12 h-16 md:py-2 py-0 md:border-b-4 border-b-0 border-white text-white rounded -mb-10 justify-center items-center relative mx-auto text-center flex'><PersonIcon fontSize='medium'/><i className="fa-solid fa-caret-down w-1 h-3 text-white"></i></i></button>
                    <div className={`${userClick ? "absolute" : "hidden"} right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                    <div className={`py-1 ${userControl ? "hidden" : "block"}`}>
                        <Link to="/" onClick={()=>setModal(true)} className="text-gray-700 block px-4 py-2 text-sm">login</Link>
                    </div>
                        <div className={`py-1 ${userControl ? "block" : "hidden"}`}>
                        <Link to="/" className="text-gray-700 block px-4 py-2 text-sm">Profile</Link>
                        <Link to="/basket" className="text-gray-700 block px-4 py-2 text-sm">my orders</Link>
                        <form >
                            <button onClick={handleSingOut} type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                        </form>
                        </div>
                    </div>    
                </div>
                </div>
            </div>

            </div>
            <ToastContainer/>
        </nav>
        <UserActions isVisible={modal} onClose={()=>setModal(false)}/>
    </>
  )
}

export default Navbar