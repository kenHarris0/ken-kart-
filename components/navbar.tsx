'use client'

import React, { useContext } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useClerk, UserButton, useUser } from '@clerk/nextjs'
import { Button } from './ui/button'
import { ShoppingBagIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/context'




const Navbar:React.FC = () => {
const router=useRouter()
  const {openSignIn}=useClerk()
  const {user}=useContext(UserContext)!

  console.log(user)

  return (
    <header className='w-full h-10  mt-4 '>
      <nav className=' flex justify-between w-full mx-auto h-full border'>
        <div className='w-[10%]  flex items-center justify-center'>
          <h1>KEN-KART</h1>
        </div>

        <div className='w-[70%]  '>

          <ul className='w-full h-full flex gap-15 justify-end  items-center p-4'>
            <li>Products</li>
            <li>offers</li>
            <li>about us</li>
          </ul>

        </div>

        <div className='w-[10%]  flex items-center justify-center'>

          {user ? <>
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label='Your Cart' labelIcon={<ShoppingBagIcon size={16}/>} onClick={()=>router.push('/cart')} />
            </UserButton.MenuItems>
          </UserButton>
          </> :
          <Button variant="secondary" className='cursor-pointer' onClick={()=>openSignIn()}>Login</Button>
}
        

        </div>
      </nav>
        
      
    </header>
  )
}

export default Navbar
