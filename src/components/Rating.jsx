import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Rating = () => {
  const [rate, setRate] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    window.localStorage.setItem('My_Rating', rate)
  }, [rate]);

  return (
    <div className='h-screen w-[430px] flex justify-center items-center'>
      <div className='bg-gradient-to-b py-8 px-6 rounded-[30px] from-[#232A34] to-[#171E28]'>
        <div className='w-12 h-12 rounded-full flex mb-6 justify-center items-center bg-[#272E38]'>
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" /></svg>
        </div>
        <h1 className='text-white text-3xl font-bold mb-6'>How did we do?</h1>
        <p className='text-slate-400 text-lg'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <form>
          <div className='flex justify-between mt-6 mb-10'>
            <input type='text'
              className='h-12 w-12 text-center text-xl text-slate-400 rounded-full bg-[#272E38] cursor-pointer hover:bg-[#7C8898] hover:text-white align-middle border-none focus:outline-none'
              value='1'
              readOnly
              onClick={(e) => setRate(e.target.value)}
            />

            <input type='text'
              className='h-12 w-12 text-center text-xl text-slate-400 rounded-full bg-[#272E38] cursor-pointer hover:bg-[#7C8898] hover:text-white align-middle border-none focus:outline-none'
              value='2'
              readOnly
              onClick={(e) => setRate(e.target.value)}
            />

            <input type='text'
              className='h-12 w-12 text-center text-xl text-slate-400 rounded-full bg-[#272E38] cursor-pointer hover:bg-[#7C8898] hover:text-white align-middle border-none focus:outline-none'
              value='3'
              readOnly
              onClick={(e) => setRate(e.target.value)}
            />

            <input type='text'
              className='h-12 w-12 text-center text-xl text-slate-400 rounded-full bg-[#272E38] cursor-pointer hover:bg-[#7C8898] hover:text-white align-middle border-none focus:outline-none'
              value='4'
              readOnly
              onClick={(e) => setRate(e.target.value)}
            />

            <input type='text'
              className='h-12 w-12 text-center text-xl text-slate-400 rounded-full bg-[#272E38] cursor-pointer hover:bg-[#7C8898] hover:text-white align-middle border-none focus:outline-none'
              value='5'
              readOnly
              onClick={(e) => setRate(e.target.value)}
            />
          </div>
          <button onClick={() => navigate('thank-you')} rate={rate} className='bg-[#FC7613] text-white w-full rounded-3xl py-3 hover:bg-white hover:text-[#FC7613] font-bold'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}



export default Rating