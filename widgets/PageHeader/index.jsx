import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const PageHeader = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setActive(!active);
  };

  return(
    <>
<nav className='flex items-center flex-wrap p-3 '>
  <div className="flex">
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Image src="/Sachi.svg" alt="Sachi logo" width={500} height={100} />
          </a>
        </Link>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        {/* <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        > */}
          <motion.div 
            className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex lg:h-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Link href='/works'>
              <a className='text-sm lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline'>
                WORKS
              </a>
            </Link>
            <Link href='/about'>
              <a className='text-sm lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline'>
                ABOUT
              </a>
            </Link>

            <div 
        className={`${active ? 'tham-active' : '' } tham tham-e-arrow tham-w-8 lg:hidden`}
        onClick={handleClick}>
          <div className="tham-box">
           <div className="tham-inner bg-black" />
          </div>
        </div>
            <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
            <Link href='/contacts'>
              <a className='text-sm lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline'>
                CONTACTS
              </a>
            </Link>
            {/* <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Contact us
              </a>
            </Link> */}
          </div>
        </motion.div>
        </div>
      </nav>
    </>
  )
}

export default PageHeader