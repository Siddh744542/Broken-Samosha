"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
const Header = () => {
  const session = useSession();
  const status = session.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if(userName?.includes(" ")){
    userName = userName.split(" ")[0];
  }
  return (
    <header className="flex items-center justify-between">
      
      <nav className="flex gap-8 items-center text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">
          Broken Samosha
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>   
      </nav>
      <nav className="flex gap-4 items-center text-gray-500 font-semibold">
        {status === "authenticated" && (
          <>
            <Link href={"/profile"} className="whitespace-nowrap">
              Hello, {userName}
              </Link>
            <button 
              onClick={()=> signOut()}
              className="bg-primary rounded-full text-white  px-6 py-2" >
              Logout
            </button>
          </>
        )} 
        { status == "unauthenticated" && (
          <>
            <Link href={'/login'}> Login </Link>
            <Link href={'/register'} className="bg-primary rounded-full text-white  px-6 py-2" >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header