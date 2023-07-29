import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import useDataStore from '../../../assets/store/data.store';
import { useEffect } from 'react';
import useBasketStore from '../../../assets/store/basket.store';

function HomeItemComponent({props}){
    const {addToBasket} = useBasketStore();
    return(

        <div className='container mx-auto justify-center text-black sm:mb-2 mb-4' id='menuHamburger1'>
            <div className=' sm:flex md:grid md:grid-cols-2 lg:bg-transparent bg-white rounded-lg'>
                <div className='lg:-mt-5 lg:mb-20'>
                    <img className='w-full h-full' src={props.image}  />
                    </div>
                <div className='w-full relative xl:h-80 lg:mt-6 md:h-60 sm:h-40 lg:h-64 h-52 bg-white'>
                <div className='mx-auto font-semibold justify-between text-center sm:mt-4 md:mt-4 xl:mt-10 mt-2'>
                    <div className='lg:flex grid grid-cols-2 mx-auto items-center justify-between'>
                    <h2 className='font-extrabold text-xl md:text-2xl relative xl:text-3xl lg:left-10 left-1 sm:text-text-lg'>{props.title}</h2>
                    <span className='xl:text-2xl text-lg relative lg:right-10 right-0'>${props.money}</span>
                    </div>
                    <ul  className='list-disc justify-start text-start ml-10 mt-2 md:text-lg lg:text-xl text-sm'>
                        <li >
                        {props.paragraf1}
                        </li>
                        <li >
                        {props.paragraf2}
                        </li>
                        <li className='xl:flex hidden'>
                        {props.paragraf3}
                        </li>
                    </ul>
                    <div className='justify-end mx-auto relative flex 2xl:-bottom-20 xl:bottom-2 lg:bottom-0  bottom-0 right-1 items-center'>
                        <div className=" flex items-center">
                        <span className="text-yellow-500 flex xl:text-2xl text-lg">
                            {[...Array(Math.round(props.raiting)).keys()].map((i)=>(<svg key={i} className="w-6 h-6 fill-current">
                            <path d="M12 1.8l2.82 5.48 6.36.92-4.59 4.47 1.08 6.34L12 18.15l-5.67 2.97 1.08-6.34L2.82 8.2l6.36-.92L12 1.8zm0 2.4l-1.47 2.86-3.17.46 2.3 2.25-.54 3.18L12 13.16l2.88 1.51-.54-3.18 2.3-2.25-3.17-.46L12 4.2z" />
                            </svg>))}
                        </span>
                        <span className="ml-1"> {props.raiting}</span>
                        </div>
                    </div>
                    </div>
                    <div className='w-full grid grid-cols-2 bottom-1 md:bottom-0 absolute justify-center mx-auto items-center text-center'> 
                    <button onClick={()=>addToBasket(props)} className='transition delay-150 p-2 duration-300 ease-in-out text-center mx-auto xl:w-72 w-full sm:h-10 h-9 bg-teal-950 items-center text-white hover:scale-105 hover:bg-teal-800'>Add Basket <AddIcon/></button>
                    <Link to="/basket" className='transition delay-150 p-2  duration-300 ease-in-out text-center mx-auto xl:w-72 w-full sm:h-10 h-9  bg-teal-950 text-white hover:scale-105 hover:bg-teal-800'>Order</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HomeMenuPage(){
    const {data , fetchData, loading} = useDataStore()

    useEffect(() => {
        if(loading){
            
        }
        fetchData()
    }, [])
    
  return (
    <>
    {JSON.stringify(data["data"])}
    {!loading && data.map((item, i)=><HomeItemComponent props={item} key={i} />)}
        {/* right hamburger 
        <div className='container mx-auto justify-center text-black sm:mb-2 mb-4' id='menuHamburger2'>
            <div className='sm:flex md:grid md:grid-cols-2 lg:bg-transparent bg-white rounded-lg'>
            <div className='sm:hidden flex lg:mb-5'>
                    <img className='w-full h-full' src="/hamburger-product.png"  />
                </div>
                <div className='w-full relative xl:h-80 lg:mt-10 md:h-60 sm:h-40 lg:h-64 h-52 bg-white'>
                <div className='mx-auto font-semibold justify-between text-center sm:mt-4 md:mt-4 xl:mt-10 mt-2'>
                    <div className='lg:flex grid grid-cols-2 mx-auto items-center justify-between'>
                    <h2 className='font-extrabold text-xl md:text-2xl relative xl:text-3xl lg:left-10 left-1 sm:text-text-lg'>Lorem, ipsum.</h2>
                    <span className='xl:text-2xl text-lg relative lg:right-10 right-1'>$10.99</span>
                    </div>
                    <ul  className='list-disc justify-start text-start ml-10 mt-2 md:text-lg lg:text-xl text-sm'>
                        <li >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, similique.
                        </li>
                        <li >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, similique.
                        </li>
                        <li className='xl:flex hidden'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, similique.
                        </li>
                    </ul>
                    <div className='justify-end mx-auto relative flex 2xl:-bottom-20 xl:bottom-2 lg:bottom-0  bottom-0 right-2 items-center'>
                        <div className=" flex items-center">
                        <span className="text-yellow-500 flex xl:text-2xl text-lg">
                            <svg className="w-6 h-6 fill-current">
                            <path d="M12 1.8l2.82 5.48 6.36.92-4.59 4.47 1.08 6.34L12 18.15l-5.67 2.97 1.08-6.34L2.82 8.2l6.36-.92L12 1.8zm0 2.4l-1.47 2.86-3.17.46 2.3 2.25-.54 3.18L12 13.16l2.88 1.51-.54-3.18 2.3-2.25-3.17-.46L12 4.2z" />
                            </svg>
                            <svg className="w-6 h-6 fill-current">
                            <path d="M12 1.8l2.82 5.48 6.36.92-4.59 4.47 1.08 6.34L12 18.15l-5.67 2.97 1.08-6.34L2.82 8.2l6.36-.92L12 1.8zm0 2.4l-1.47 2.86-3.17.46 2.3 2.25-.54 3.18L12 13.16l2.88 1.51-.54-3.18 2.3-2.25-3.17-.46L12 4.2z" />
                            </svg>
                            <svg className="w-6 h-6 fill-current">
                            <path d="M12 1.8l2.82 5.48 6.36.92-4.59 4.47 1.08 6.34L12 18.15l-5.67 2.97 1.08-6.34L2.82 8.2l6.36-.92L12 1.8zm0 2.4l-1.47 2.86-3.17.46 2.3 2.25-.54 3.18L12 13.16l2.88 1.51-.54-3.18 2.3-2.25-3.17-.46L12 4.2z" />
                            </svg>
                            <svg className="w-6 h-6 fill-current">
                            <path d="M12 1.8l2.82 5.48 6.36.92-4.59 4.47 1.08 6.34L12 18.15l-5.67 2.97 1.08-6.34L2.82 8.2l6.36-.92L12 1.8zm0 2.4l-1.47 2.86-3.17.46 2.3 2.25-.54 3.18L12 13.16l2.88 1.51-.54-3.18 2.3-2.25-3.17-.46L12 4.2z" />
                            </svg>
                            <svg className="w-6 h-6 fill-current">
                            <path d="M12 1.8l2.82 5.48 6.36.92-4.59 4.47 1.08 6.34L12 18.15l-5.67 2.97 1.08-6.34L2.82 8.2l6.36-.92L12 1.8zm0 2.4l-1.47 2.86-3.17.46 2.3 2.25-.54 3.18L12 13.16l2.88 1.51-.54-3.18 2.3-2.25-3.17-.46L12 4.2z" />
                            </svg>
                        </span>
                        <span className="ml-1">4.5</span>
                        </div>
                    </div>
                    </div>
                    <div className='w-full grid grid-cols-2 sm:bottom-0 md:bottom-0 absolute justify-center mx-auto items-center text-center'> 
                    <button onClick={handleAddBasket} className='transition delay-150 duration-300 ease-in-out text-center mx-auto xl:w-72 w-full sm:h-10 h-8 bg-teal-950 items-center text-white hover:scale-105 hover:bg-teal-800'>Add Basket <AddIcon/></button>
                    <Link to="/" className='transition delay-150 p-2 duration-300 ease-in-out text-center mx-auto xl:w-72 w-full sm:h-10 h-8  bg-teal-950 text-white hover:scale-105 hover:bg-teal-800'>Order</Link>
                    </div>
                </div>
                <div className='sm:flex hidden lg:mb-5'>
                    <img className='w-full h-full' src="/hamburger-product.png"  />
                </div>
            </div>
        </div>
        */}

       
    </>
  )
}

export default HomeMenuPage