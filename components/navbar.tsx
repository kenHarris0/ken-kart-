'use client'

import React, { useContext, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useClerk, UserButton, useUser } from '@clerk/nextjs'
import { Button } from './ui/button'
import { ShoppingBagIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/context'
import { CartIcon } from '@/assets/assets'



const Navbar = () => {
const router=useRouter()
  const {openSignIn}=useClerk()
  const {user}=useContext(UserContext)!
const {count}=useContext(UserContext)!
  console.log(user)

  

  return (
    <header className='w-full h-10  mt-4 '>
      <nav className=' flex justify-between w-full mx-auto h-full border'>
        <div className='w-[10%]  flex items-center justify-center'>
          <h1 onClick={()=>router.push('/')} className='text-xl font-bold cursor-pointer'>KEN-KART</h1>
        </div>

        <div className='w-[70%]  '>

          <ul className='w-full h-full flex gap-15 justify-end  items-center p-4'>
            <li className='cursor-pointer hover:underline '>Products</li>
            <li className='cursor-pointer hover:underline'>offers</li>
            <li className='cursor-pointer hover:underline'>about us</li>
          </ul>

        </div>

        <div className='w-[10%]  flex items-center justify-center gap-6'>
          

          <div className='relative cursor-pointer ' onClick={()=>router.push('/cart')}>
                 <CartIcon />
                 {count && <span className='flex items-center justify-center w-3 h-3 rounded-full bg-red-300 text-xs absolute -top-1 -right-2 '> {count}</span>}
                
               
          </div>
         


          

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
