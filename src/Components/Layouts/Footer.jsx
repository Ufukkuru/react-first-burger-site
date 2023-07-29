import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="relative bg-teal-950 text-white pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Lorem ipsum dolor sit.</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestias aut reiciendis. Accusantium, deserunt delectus.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-slate-200 text-sky-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i></button><button className="bg-slate-200 text-sky-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button><button className="bg-slate-200 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-instagram"></i></button><button className="bg-slate-200 text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="">Details</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="">Menu</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="">Kid Menu</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="">MIT License</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="">Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><Link to="https://github.com/Ufukkuru?tab=repositories" className="text-white hover:text-black" target="_blank"> Ufuk kuru</Link>
          <Link to="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800"></Link>.
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer