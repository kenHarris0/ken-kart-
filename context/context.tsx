
'use client'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios'

type contextType={
    user:ReturnType<typeof useUser>["user"]
}

export const UserContext=createContext<contextType | null>(null)

export default function context({children}:{children:React.ReactNode}) {
    const url="http://localhost:3000"

    const {user,isLoaded,isSignedIn}=useUser()




  useEffect(() => {

    console.log("Effect", { isLoaded, isSignedIn });
  async function syncUser() {
    try {
      await axios.post("/api/user/syncuser");
    } catch (err) {
      console.error(err);
    }
  }

  if (isLoaded && isSignedIn) {
    syncUser();
  }
}, [isLoaded, isSignedIn]);




let value={
    user

}


  return (
    <div>



        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
      
    </div>
  )
}


