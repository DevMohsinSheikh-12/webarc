import Image from 'next/image'
import React from 'react'

function Nav() {
  return (
<>

<section className=''>
    <nav className=" nav xl:flex xl:justify-between py-5 text-black items-center">
 <div className=" flex justify-center mb-5 xl:logo xl:ml-56">
  <Image src={'/images/logo.png'}
  alt='logo'
  height={80}
  width={80} />

 </div>

 <div className="navele">
  <ul className='flex items-center text-sm'>
  <li className='mr-14 border-y-2  border-black px-3'>MAIN</li>
  <li className='pr-14'>GALLERY</li>
  <li className='pr-14'>PROJECTS</li>
  <li className='pr-14'>CERTIFICATIONS</li>
  <li className='mr-14 xl:mr-14  '>CONTACT</li>
  </ul>
 </div>

    </nav>
</section>
</>

)
}

export default Nav