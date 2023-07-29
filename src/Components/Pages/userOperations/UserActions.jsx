import { Facebook, Google, Microsoft } from '@mui/icons-material';
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from './Firebase';
import { addDoc, collection, doc } from "firebase/firestore"; 
import { ToastContainer, toast } from 'react-toastify';

const UserActions =({isVisible, onClose})=>{
    if (!isVisible) return null

    const [showModal, setShowModal] = useState(true)
    const [showSingUpModal, setShowSingUpModal] = useState(false)

    const handleShowSignUpModal = ()=>{
        setShowModal(false)
        setShowSingUpModal(true)
    }

    const handleShowLoginModal = ()=>{
        setShowSingUpModal(false)
        setShowModal(true)
    }

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    
    const handleLoginSubmit= (e) => {
        e.preventDefault()
    signInWithEmailAndPassword(auth, loginEmail , loginPassword).then((userCredential)=>{
        const user = userCredential
        toast.success('Login Succesful!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        onClose()
    }).catch((error)=>{
        console.log(error)
        toast.error(error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    })
}


    const [registerUserName, setRegisterUserName] = useState('')
    const [registerNameAndSurname, setRegisterNameAndSurname] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerNumber, setRegisterNumber] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerPasswordVerify, setRegisterPasswordVerify] = useState('')
    const [registerCountry, setRegisterCountry] = useState('')


    const handleRegisterSubmit =(e)=>{
    e.preventDefault()
    if(registerPassword === registerPasswordVerify){
    createUserWithEmailAndPassword(auth , registerEmail , registerPassword).then(async (userCredential)=>{
        const user = userCredential
        onClose()
        setRegisterUserName('')
        setRegisterNameAndSurname('')
        setRegisterEmail('')
        setRegisterCountry('')
        setRegisterNumber('')
        setRegisterPassword('')
        setRegisterPasswordVerify('')

             addDoc(collection(db, "users"),{
                userName: registerUserName,
                nameAndSurname:registerNameAndSurname,
                email: registerEmail,
                country:registerCountry,
                number: registerNumber,
                password: registerPassword
             })

        toast.success('Register Succesful!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
    }).catch((err)=>{
        console.log(err)
        toast.error(err,{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    })
}else{
    toast.error("password not verify",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
}
    

    return(
        <>
             <div className='fixed inset-0 z-50 bg-black opacity-25 backdrop-blur-sm'></div>
            <div className='fixed inset-0 z-50 k  flex justify-center items-center backdrop-blur-sm'>
                <div className='w-full md:w-[600px] lg:w-[700px]' >

                    <div className={`${showModal ? "block" : "hidden"} bg-slate-300 p-2 md:rounded-lg`}>
                        <header className='flex justify-between mb-5 text-black mt-5'>
                            <h1 className='text-1xl sm:text-2xl md:ml-16 ml-2'>Log In</h1>
                            <button onClick={onClose} className='text-xl md:mr-16 mr-2'>X</button>
                        </header>
                        <loginbody>
                            <form onSubmit={handleLoginSubmit}>
                                <div className='justify-center  items-center text-center block'>
                                <div className='mb-4 w-full'>
                                <div className='md:ml-20 mb-2 text-start'>
                                    <label className='text-lg lg:text-xl block'>Email</label>
                                </div>
                                    <input type="email" className='px-2 py-2 w-full  md:w-4/5 text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700 rounded-lg transition duration-200' id='loginemail' value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}  required placeholder='Email' />
                                </div>
                                <div className='mb-4 w-full'>
                                <div className='md:ml-20 mb-2 text-start'>
                                    <label className='text-lg lg:text-xl block'>Password</label>
                                </div>
                                    <input type="password" className='px-2 py-2 w-full md:w-4/5 text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700 rounded-lg transition duration-200' id='loginpassword' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}  required placeholder='Password' />
                                </div>
                                </div>
                                <div className='lg:mt-5 justify-center text-center mt-3'> 
                                    <button className='w-full md:w-4/5 mb-6 rounded-lg bg-teal-950 p-3 text-white'>Log In</button>
                                </div>
                                <div className='flex lg:mb-10 mb-5'>
                                <div className='w-full justify-start text-start ml-14 border-t-3 border-black'>
                                    <button className='mx-3 text-teal-950'><Google/></button>
                                    <button className='mx-3 text-teal-950'><Microsoft/></button>
                                    <button className='mx-3 text-teal-950'><Facebook/></button>
                                </div>
                                <div className='text-right'>
                                    <button className='w-16 md:mr-16 mr-2' onClick={handleShowSignUpModal}>Sing Up</button>
                                </div>
                                </div>
                            </form>
                            <hr />
                        </loginbody>
                    </div>

                    <div className={`${showSingUpModal ? "block" : "hidden"} bg-slate-300 p-2 md:rounded-lg`}>
                        <header className='flex justify-between mb-5 text-black mt-5'>
                            <h1 className='text-1xl sm:text-2xl md:ml-16 ml-2'>Sing up</h1>
                            <button onClick={onClose} className='text-xl md:mr-16 mr-2'>X</button>
                        </header>
                        <registerbody>
                            <form onSubmit={handleRegisterSubmit} >
                            <div className='md:flex justify-center text-center block '>
                            <div className='mb-4 w-full'>
                            <div className='md:ml-10 mb-2 text-start'>
                                <label className='text-lg lg:text-xl block'>User Name</label>
                            </div>
                                <input type="text" className='px-2 py-2 w-full  md:w-4/5 text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700 rounded-lg transition duration-200' id='registerusername' value={registerUserName} onChange={(e)=>setRegisterUserName(e.target.value)}  required placeholder='UserName' />
                            </div>
                            <div className='mb-4 w-full'>
                            <div className='md:ml-10 mb-2 text-start'>
                                <label className='text-lg lg:text-xl block'>Name And Surname</label>
                            </div>
                                <input type="text" className='px-2 py-2 w-full  md:w-4/5 text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700 rounded-lg transition duration-200' id='registernameandsurname' value={registerNameAndSurname} onChange={(e)=>setRegisterNameAndSurname(e.target.value)}  required placeholder='Name And Surname' />
                            </div>
                            </div>
                            <div className='md:flex justify-center text-center mb-2 block'>
                            <div className='mb-4 w-full'>
                            <div className='md:ml-10 mb-2 text-start'>
                                <label className='text-lg lg:text-xl block'>Email</label>
                            </div>
                                <input type="email" className='px-2 py-2 w-full  md:w-4/5 text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700 rounded-lg transition duration-200' value={registerEmail} onChange={(e)=>setRegisterEmail(e.target.value)} required id='registeremail' placeholder='Email' />
                            </div>
                            <div className='mb-4 w-full'>
                            <div className='md:ml-10 mb-2 text-start'>
                                <label className='text-lg lg:text-xl block'>Number</label>
                            </div>
                            <div className='md:ml-8 w-full flex md:w-4/5'>
                            <div className="relative w-full flex">
                                <select id='registercountry' value={registerCountry} required onChange={(e)=>setRegisterCountry(e.target.value)} className='w-14 text-black border-gray-700 border-t border-l border-b  rounded-l-lg items-center justify-center border-0'>
                                <option value="+90">+90 (Turkey)</option>
                                <option value="+44">+44 (United Kingdom)</option>
                                <option value="+49">+49 (Germany)</option>
                                </select>
                                <input className="px-2 py-2 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border-r border-t border-b border-gray-700 rounded-r-lg transition duration-200" id="registernumber" type="number"  value={registerNumber} onChange={(e)=>setRegisterNumber(e.target.value)} required placeholder="Phone Number"/>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div className='md:flex justify-center text-center block '>
                            <div className='mb-4 w-full'>
                            <div className='md:ml-10 mb-2 text-start'>
                                <label className='text-lg lg:text-xl block'>Password</label>
                            </div>
                                <input type="password" className='px-2 py-2 w-full  md:w-4/5 text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700 rounded-lg transition duration-200' id='registerpassword' value={registerPassword} onChange={(e)=>setRegisterPassword(e.target.value)} required placeholder='password' />
                            </div>
                            <div className='mb-4 w-full'>
                            <div className='md:ml-10 mb-2 text-start'>
                                <label className='text-lg lg:text-xl block'>Password Verify</label>
                            </div>
                                <input  type="password" className='px-2 py-2 w-full  md:w-4/5 text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700 rounded-lg transition duration-200' id='registerpasswordverify' value={registerPasswordVerify} onChange={(e)=>setRegisterPasswordVerify(e.target.value)} required placeholder='Password Verify' />
                            </div>
                            </div>
                            <input type="checkbox" name="verify" className='ml-10' required id="verify"/> Lorem ipsum dolor sit amet.
                            <div className='lg:mt-5 justify-center text-center mt-3'> 
                                    <button type='submit' className='w-full md:w-4/5 mb-6 rounded-lg bg-teal-950 p-3 text-white'>Sing Up</button>
                                </div>
                                <div className='flex justify-end lg:mb-10 mb-5'>
                                <div className='text-right'>
                                    <button className='w-16 md:mr-16 mr-2' onClick={handleShowLoginModal}>Sing Up</button>
                                </div>
                                </div>
                            </form>
                            <hr />
                        </registerbody>
                    </div>

                </div>
                <ToastContainer/>
        </div>
        </>
    )
};

export default UserActions
