import React, { useEffect, useState } from 'react'
import headerBgl from './../assets/illustration-thank-you.svg';

const Thankyou = (props) => {
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const myRate = window.localStorage.getItem('My_Rating')
    setRate(myRate)
  }, [])

  return (
    <main className='h-screen w-[430px] overflow-hidden flex justify-center items-center m-8'>
      <div className='bg-gradient-to-b py-8  px-6 rounded-[30px] from-[#232A34] to-[#171E28]'>
        <div className='rounded-full  flex mb-6 justify-center items-center'>
          <img className='w-52' src={headerBgl} alt="" />
        </div>
        <div className='bg-[#272E38] mx-auto mt-8 w-52 text-center text-[#FC7613]/60  py-2 rounded-full'>You selected {rate} out of 5</div>
        <h1 className='text-white text-4xl font-bold text-center mb-4 mt-10'>Thank you!</h1>
        <p className='text-slate-400 text-lg text-center'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesiteate to get in touch!</p>
      </div>
    </main>
  )
}

export default Thankyou


