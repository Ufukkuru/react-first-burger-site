import React from 'react'
import useBasketStore from '../../../assets/store/basket.store';


function Basket() {
  const {basketData} = useBasketStore();
  const productTotal = basketData.reduce((total, product) =>{
    return total + product.quantity * product.money
  },0)
  const Cargo = 5.65;
  const totalOrder = productTotal + Cargo;
  return (
    <>
    <div className='w-full mb-10 mt-10 items-center justify-between mx-auto relative text-center'>
      <div className='sm:flex md:grid md:grid-cols-2'>
        <div className='w-full'>
            <div className='text-start sm:ml-20 lg:ml-20 mb-3 text-2xl ml-2'>
              <h1>My Basket</h1>
            </div>
            <div className='w-full'>
            <ul>
               {basketData.map((i)=><li className='sm:flex md:grid md:grid-cols-2 w-full xl:ml-20 mb-3 bg-white rounded-lg'>
                <img src={i.image} className='lg:w-52 w-full lg:h-30 h-full sm:rounded-l-lg'/>
                <div>
                <div className='mt-2 flex xl:text-xl md:text-lg lg:text-xl text-2xl justify-between relative'><h2 className='text-start lg:-ml-10 xl:-ml-28'>{i.title}</h2><button className='text-end mr-4 md:text-lg text-xl'>X</button></div>
                <div className='mt-2 xl:block hidden xl:text-sm text-lg relative'><p className='text-start  lg:-ml-10 xl:-ml-28'>{i.paragraf1}</p></div>
                <div className='flex text-xl items-end justify-between md:text-base mt-2 lg:text-base'><h2 className='text-start lg:-ml-10 xl:-ml-28'>Price:${i.money}</h2><h2 className='text-end md:mr-1 mr-8'>Amount:{i.quantity}</h2></div>
                </div>
                </li>)}
            </ul>
            </div>
        </div>
        <div className='w-full justify-center mt-5'>
          <button className='p-3 sm:flex relative justify-center hidden rounded-lg mx-auto text-white  w-2/3 bg-teal-950 hover:scale-105 hover:bg-teal-800 transition delay-150'>Basket Approve</button>
          <div className='sm:rounded-lg mx-auto w-full sm:w-2/3 mt-8 mb-8 bg-white'>
            <div className='text-start xl:text-xl md:text-lg lg:text-xl text-2xl  ml-6'><h1>Order Amount</h1></div>
            <div><h1 className='text-start ml-10  md:text-base mt-3 text-xl lg:text-base'>Products Total = ${productTotal}</h1></div>
            <div><h1 className='text-start ml-10  md:text-base mt-3 mb-8 text-xl lg:text-base'>Products Total = ${Cargo}</h1></div>
            <div className='border-t-2 border-slate-800 w-full'><h1 className='text-end mr-5  md:text-base mt-3 text-xl lg:text-base'>Total ={totalOrder}</h1></div>
          </div>
          <button className='p-3 rounded-lg w-2/3 bg-teal-950 hover:scale-105 hover:bg-teal-800 text-white transition delay-150'>Basket Approve</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Basket