"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {signIn} from "next-auth/react";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev){
        ev.preventDefault();
        setLoginInProgress(true);
       
        await signIn('credentials',  {email, password, callbackUrl:'/'});

        setLoginInProgress(false);
    }

  return (
    <section className="mt-8">
        <h1 className="text-primary text-center text-4xl mb-4">
        Login
        </h1>
        <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
            <input type="email" name="email" placeholder="email" value={email}
                disabled={loginInProgress}
                onChange={ev=> setEmail(ev.target.value)} />
            <input type="password" name="password" placeholder="password" value={password}
                disabled={false}
                onChange={ev=> setPassword(ev.target.value)} />
            <button type="submit" disabled={loginInProgress}> Login</button>
            <div className="my-4 text-center text-gray-500">
                or login with provider
            </div>
            <button type="button" onClick={()=> signIn("google",{callbackUrl:"/"})}
                className="flex gap-4 justify-center">
                <Image src="/google.png" alt="" height="24" width="24" />
                Login with Google
            </button>
            <div className="text-center my-4 text-gray-500">
                Don&apos;t have account account? {" "}
                <Link className="underline" href={"/register"}>
                    Register here &raquo;
                </Link>
            </div>
        </form>
    </section>
  )
}

export default Login;