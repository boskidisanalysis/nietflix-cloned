import Navbaritem from "@/components/Navbaritem"
import { useSession } from "next-auth/react"
import {signOut} from 'next-auth/react'

export default function Testprofiles() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return( 
    <>
    <div className="flex flex-col justify-center items-center">
        <p className="text-zinc-300">Signed in as {session?.user?.name}</p>
         <button 
        //  signOut({ callbackUrl: '/auth' })
         onClick={() => signOut({ callbackUrl: '/auth' })}
         className="bg-red-600 py-3 text-white rounded-md px-4 mt-10 hover:bg-red-700 transition">
            Sign out
        </button>
    </div>
    <Navbaritem />
    </>
  )}
}