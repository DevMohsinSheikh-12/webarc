import Image from 'next/image'
import React from 'react'
function Hero() {
  return (
    <>
    <section className='inline justify-center lg:flex lg:items-center xl:justify-evenly'>
        <div className="bigtext place-items-center mt-7">
           <span className='text-7xl  text-gray-300 font-thin roboto-thin'> Project</span> <br />
            <span className='text-5xl font-roboto text-black font-extrabold  '>Lorem</span>
<div className='flex mt-28 xl:gap-6'>

            <Image src={'/images/Framele.png'}
            alt='left' height={50}
            width={50}/> 
            <Image src={'/images/Frameri.png'}
            alt='left' height={50}
            width={50}/>
            </div>

            <Image src={'/images/slide-numbers.png'}
            alt='left' height={150}
            width={150}className=' mt-20'/>
            
            
        </div>
        <div className="img">
<Image src={'/images/heroimg.png'}
height={770}
width={770}
alt='heroimg' className=''/>
        </div>
    </section>









    <section className='py-12 px-7   md:flex justify-center lg:flex xl:flex xl:justify-center items-center gap-6 mt-28 bg-gray-100 ml-36 mr-36 rounded-xl '>
  
  <div className="2phto gap-6 ">
   
   <div className=''>
     <Image src={"/images/Rectangle.png"}
    height={300}
    width={300}
    alt='img' />
    </div>
       <div className='mt-6'>
         <Image src={"/images/Rectanglebl.png"}
    height={300}
    width={300}
    alt='img' />
  </div>
  </div>
  <div className="">
  <Image src={"/images/Rectangleblh.png"}
    height={300}
    width={300}
    alt='img' />
  </div>
  <div className="">

    <h1 className='text-gray-400 text text-6xl mb-6 sm:text-center'> About</h1>
    <h1 className=''> Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s <br />, when an unknown printer took a galley of type and <br /> scrambled it to make a type specimen book. It has <br /> survived not only five centuries, but also the leap into <br /> electronic typesetting, remaining essentially unchanged</h1>

    <button className='px-12 py-6 mt-11 border text-gray-600 text-sm '>
      READ MORE --&gt;
    </button>
  </div>

    </section>











    <section>
      <h1 className='text-4xl xl:text-7xl text-gray-400 ml-36 mt-36'>
      Main Focus/Mission Statement
      </h1>

      <div className="text-center xl:flex justify-center  items-center gap-44 mt-20 text-2xl">
        <div className="flex justify-center items-center gap-3">
          <div className='text-[200px] font-extrabold text-gray-100'>1</div>
          <div>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br />Sed efficitur, lectus et <br /> facilisis placerat.</div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className='text-[200px] font-extrabold text-gray-100'>2</div>
          <div>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br />Sed efficitur, lectus et <br /> facilisis placerat.</div>
        </div>
      </div>
    </section>
    <h1 className='text-7xl text-gray-400 ml-36 mt-36 font-roboto-thin'>
      Our Projects
      </h1>

      <div className="xl:grid xl:grid-rows-2 xl:gap-6  mt-24">
  {/* First Row */}
  <div className="xl:flex  xl:space-x-6  ">
    <div className='text-center xl:flex xl:flex-col bg-gray-800 text-white w-[700px] font-serif '   >
 
     <h1 className='text-center inline font-extrabold text-6xl xl:ml-24 '>Sample <br /> Projects</h1>
     <p className='text-center  mt-9 xl:ml-24 '> VIEW MORE   --&gt;</p>
    </div>
    <Image src="/images/imagecir.png" alt="Image 2" height={255} width={570} className="  " />
  </div>

  {/* Second Row */}
  <div className="grid place-items-center xl:flex xl:space-x-6">
    <Image src="/images/imagedr.png" alt="Image 3" height={255} width={270} className="" />
    <Image src="/images/imagebul.png" alt="Image 4" height={255} width={570} className="" />
    <Image src="/images/imagetri.png" alt="Image 5" height={255} width={370} className="" />
  </div>
</div>

<div className='flex place-items-end justify-end mr-36'>

<button className='px-12 py-6 mt-9 bg-gray-800 text-white font-serif '>
      ALL PROJECTS --&gt;
    </button>
</div>

<section> 














  
  <div className='flex-none  lg:flex lg:justify-center lg:items-center  lg:gap-7 mb-20'>
    <div className="  mt-36 space-y-3">
      <h1 className='text-7xl text-gray-400 mb-5 '>Contact Us</h1>
      <input type="text" placeholder='Name' className='bg-gray-200 w-[391px] h-[46px] pl-7'/><br />
      <input type="text" placeholder='Phone Number' className='bg-gray-200 w-[391px] h-[46px] pl-7'/><br />
      <input type="text" placeholder='E-mail' className='bg-gray-200 w-[391px] h-[46px] pl-7' /><br />
      <input type="text" placeholder='Intrested In' className='bg-gray-200 w-[391px] h-[46px] pl-7'/><br />
      <input type="text" placeholder='Message' className='bg-gray-200 w-[391px] h-[147px] pl-7'/>

    </div>

    <div className="img lg:mt-[280px]">
      <Image src={'/images/imageph.png'}
      alt='phone' width={700} height={900}/>
    </div>
  
  </div>
      <button className='px-12 py-6  bg-gray-800 text-white font-serif md:ml-44 mb-24 2xl:ml-56'>
      Send Email --&gt;
    </button>
</section>
    </>
  )
}

export default Hero