import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
  <section>
    <footer className='bg-gray-800 text-white mt-10 flex justify-center items-center gap-48 p-20 border-b-2 border-gray-700'>
        <div className="img">
        <Image src={'/images/logo.png'}     style={{ filter: 'invert(1)' }}
  alt='logo'
  height={150}
  width={150} className=''/>
        </div>
        <div className="1">
            <h1 className='font-bold'>Information</h1>
            <ul className=' '>
  <li className='mt-4'>Main</li>
  <li className='mt-4'>Gallery</li>
  <li className='mt-4'>Projects</li>
  <li className='mt-4'>Certifications</li>
  <li className='mt-4'>Contact</li>
  </ul>
        </div>
        <div className="2">
        <h1 className='font-bold'>Contact us</h1>
            <ul className=' '>
  <li className='mt-4 '>Main</li>
  <li className='mt-4'>Gallery</li>
  <li className='mt-4'>Projects</li>
  <li className='mt-4'>Certifications</li>
  <li className='mt-4'>Contact</li>
  </ul>
        </div>
        <div className="3">
        <h1 className='font-bold '>Social Media</h1>
            <ul className='flex gap-12 justify-center items-center mb-36 '>

  <li className='mt-4 '><Image src={'/assets/fb.svg'}
  width={15}     style={{ filter: 'invert(1)' }}
  height={15}
  alt='fb'/> </li>
  <li className='mt-4'><Image src={'/assets/tw.svg'}
  width={25}
  height={25}     style={{ filter: 'invert(1)' }}
  alt='fb'/></li>
  <li className='mt-4'><Image src={'/assets/li.svg'}
  width={25}     style={{ filter: 'invert(1)' }}
  height={25}
  alt='fb'/></li>
  <li className='mt-4'><Image src={'/assets/pri.svg'}
  width={25}     style={{ filter: 'invert(1)' }}
  height={25}
  alt='fb'/> 
  </li>
  </ul>
        </div>
     
    </footer>
<div className='px-4 py-6 text-center text-gray-600 bg-gray-800 text-sm'>

    © 2021 All Rights Reserved
</div>
  </section>
  )
}

export default Footer