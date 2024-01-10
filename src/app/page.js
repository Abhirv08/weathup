import Image from 'next/image'
import checkbox from "../assets/checkbox.png"
import phone from "../assets/phone.png"
import bottomDesign from "../assets/bottom-design.png"
import working from "../assets/working.png"

export default function Home() {
  return (
    <div className='background text-white flex flex-col items-center'>
      <div className='mx-auto mt-16'>
        <div className='text-7xl mx-auto'>Check your financial health</div>
        <div className='mt-3.5 text-3xl w-[614px] mx-auto text-center'>
          Use WeathoMeter to get a free report <br />
          card for your finances- within minutes!
        </div>
      </div>
      <button className='rounded-[32px] w-64 h-16 bg-[#FB7306] text-3xl font-semibold mt-8'>Get Started</button>
      <div className='flex items-center px-16'>
        <div className='-mt-44'>
          <div className='flex gap-1.5 items-center '>
            <Image src={checkbox} alt='checkbox' height={41} width={41} />
            <p className=' w-96 text-2xl font-semibold'>Expected Retirement Age</p>
          </div>
          <hr className='w-[80%] h-1 ml-12 my-1' />
          <div className='flex gap-1.5 items-center '>
            <Image src={checkbox} alt='checkbox' height={41} width={41} />
            <p className='text-2xl font-semibold'>Identify Mistakes</p>
          </div>
          <hr className='w-[80%] h-1 ml-12 my-1' />
        </div>
        <Image src={phone} alt='checkbox' height={525} width={515} className='ml-11' />
        <div className='-ml-24 -mt-44'>
          <div className='flex gap-1.5 items-center '>
            <Image src={checkbox} alt='checkbox' height={41} width={41} />
            <p className='text-2xl w-96 font-semibold'>Personalised Road Map</p>
          </div>
          <hr className='w-[80%] h-1 ml-12 my-1' />
          <div className='flex gap-1.5 items-center '>
            <Image src={checkbox} alt='checkbox' height={41} width={41} />
            <p className='text-2xl font-semibold'>Tips To Improve</p>
          </div>
          <hr className='w-[80%] h-1 ml-12 my-1' />
        </div>
      </div>
      <div className='relative '>
        <Image className='abolsute bottom-0 -mt-48' src={bottomDesign} height={790} alt="bottom design" />
        <div className='absolute -mt-24 bottom-0 left-60 flex items-center flex-col mb-16'>
          <p className='text-6xl font-bold leading-normal -mb-36'>How it works?</p>
          <div className=''>
            <Image src={working} alt="working" />
            <div className='flex gap-64 absolute bottom-0 mb-28 ml-0'>
              <div className='text-center  tracking-[1.89px] text-xl w-[150px]'>Answer few <br /> questions</div>
              <div className='text-center -ml-14 w-[180px] tracking-[1.89px] text-xl'>Register using <br /> phone and OTP</div>
              <div className='text-center -ml-20 w-[220px] tracking-[1.89px] text-xl'>Get report and <br /> personal roadmap</div>
            </div>
            <button className='absolute bottom-0 ml-[310px] rounded-[32px] w-64 h-16 bg-[#FB7306] text-3xl font-semibold mt-8'>Get Started</button>
          </div>
        </div>

      </div>
    </div>
  )
}
