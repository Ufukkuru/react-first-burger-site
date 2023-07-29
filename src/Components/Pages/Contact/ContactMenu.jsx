import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer , toast } from 'react-toastify';
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


function ContactMenu() {

  const form = useRef();

  const [country, setCountry] = useState('+90')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [textArea, setTextArea] = useState('')

  const toastrNofity = ()=>{
    toast.success('Succesful!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }



  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zpzrepw', 'template_lxv5naf', form.current, 'kZ5QksfTh786n8Ke4')
      .then((result) => {
          console.log(result.text);
          setFirstName('')
          setLastName('')
          setEmail('')
          setNumber('')
          setTextArea('')
          setCountry('+90')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className='container w-full xl:h-full h-auto items-center lg:top-20 lg:mb-32 top-14 mx-auto justify-center relative'>
      <div>
        </div>
        <div className='w-full lg:flex'>
        <div className="w-full xl:w-1/2 p-8 lg:top-4 relative mb-1">
          <div className="md:max-w-md">
            <div className=" flex items-start mb-8 mx-auto justify-start rounded-xl">
                <span className=" text-4xl relative border-b-4 w-full border-black font-semibold whitespace-nowrap text-teal-950">Contact</span>
            </div>
            <h3 className="mb-1 text-2xl sm:text-3xl">Adress</h3>
            <h3 className="mb-6 text-xl sm:text-2xl"  style={{ letterSpacing: '-0.5px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptates.</h3>
            <h3 className="mb-1 text-2xl sm:text-3xl">Number</h3>
            <h3 className="mb-6 text-xl sm:text-2xl border-b-4 w-full border-black"  style={{ letterSpacing: '-0.5px' }}>+1 999 999 99 99</h3>
            <h4 className="font-semibold text-xl sm:text-2xl tracking-tight mb-2">Social Media</h4>
            <span className="mx-auto space-x-4"><a href="https://www.facebook.com"><i className='text-blue-800'><FacebookIcon fontSize='large'/></i></a><a href="https://www.instagram.com"><i className='text-pink-600'><InstagramIcon fontSize='large'/></i></a><a href="https://youtube.com"><i className='text-red-600'><YouTubeIcon fontSize='large'/></i></a><a href="https://twitter.com"><i className='text-blue-500'><TwitterIcon fontSize='large'/></i></a></span>
          </div>
        </div>

          <div className='w-full h-auto'>
          <form className="sm:flex sm:flex-wrap relative mb-20" ref={form} onSubmit={sendEmail}>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700  rounded-lg transition duration-200" id="contactInput1-1" value={firstName} onChange={(e) => setFirstName(e.target.value)} required type="text" name="firstName" placeholder="First Name"/>
              </label>
            </div>
            <div className="w-full sm:w-1/2 p-3">
              <label className="block">
                <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700 rounded-lg transition duration-200" id="contactInput1-2" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" required placeholder="Last Name"/>
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input className="px-4 py-4 w-full mx-auto relative text-gray-700 tracking-tight placeholder-gray-800 outline-none border border-gray-700  rounded-lg transition duration-200" id="contactInput1-3" type="email" value={email} name="email" onChange={(e)=> setEmail(e.target.value)} required placeholder="Email Address"/>
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                  <div className="relative flex">
                    <select id='country' name='country' value={country} required onChange={(e)=>setCountry(e.target.value)} className='w-14 text-black border-gray-700 border-t border-l border-b  rounded-l-lg items-center justify-center border-0'>
                      <option value="+90">+90 (Turkey)</option>
                      <option value="+44">+44 (United Kingdom)</option>
                      <option value="+49">+49 (Germany)</option>
                    </select>
                    <input className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-800 outline-none border-r border-t border-b border-gray-700 rounded-r-lg transition duration-200" id="contactInput1-4" type="number" name="number" value={number} onChange={(e)=>setNumber(e.target.value)} required placeholder="Phone Number"/>
                  </div>
                </label>
              </div>
            <div className="w-full p-3">
              <label className="block">
                <textarea className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 h-52 rounded-lg transition duration-200" id="contactInput1-5" type="text" name="textarea" value={textArea} onChange={(e)=> setTextArea(e.target.value)} required placeholder="Please Enter Message"></textarea>
              </label>
            </div>
            <div className="w-full p-3">
              <button className="transition delay-150 duration-300 ease-in-out text-center justify-center bottom-0 lg:mt-1 xl:mt-1 mt-0 sm:text-lg lg:text-lg text-sm mx-auto w-full lg:h-16 xl:h-12 rounded-lg h-10 bg-teal-950 items-center text-white hover:scale-105 hover:bg-teal-800" type="submit" onClick={toastrNofity}>Send</button>
            </div>
          </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default ContactMenu