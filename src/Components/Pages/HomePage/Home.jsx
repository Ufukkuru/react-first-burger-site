import React from 'react'
import HomeMenu from './HomeMenu'
import HomeMenuPage from './HomeMenuPage'


function Home() {
  return (
    <>
    <HomeMenu/>
    <div className='text-black font-bold text-4xl mb-2'>
            <h1 className='mb-6 ml-20'>Menu</h1>
        </div>
    <HomeMenuPage/>
    </>
  )
}

export default Home