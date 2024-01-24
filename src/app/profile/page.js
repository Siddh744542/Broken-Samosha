"use client"
import { useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserTabs from "@/components/layout/UserTabs"
const ProfilePage = () => {
    const session = useSession();
    const [userName ,setUsername] = useState("")
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [profileFetched, setProfileFetched] = useState(false)
    const {status} = session;
    useEffect(()=>{
        if(status==="authenticated"){
            setUsername(session?.data.user.name)
            setImage(session.data.user?.image)
            fetch('/api/profile').then(response=>{
                response.json().then(data=>{
                    setPhone(data.phone);
                    setCity(data.city);
                    setCountry(data.country);
                    setPinCode(data.pinCode);
                    setStreetAddress(data.streetAddress);
                    setIsAdmin(data.admin)
                    setProfileFetched(true);
                })
            })
        }
    },[session, status])


    async function handleProfileInfoUpdate(ev){
        ev.preventDefault();
        const savingPromise = new Promise(async (resolve, reject)=>{
            const response = await fetch("/api/profile", {
                method:"PUT",
                headers:{'content-type': 'application/json'},
                body:JSON.stringify({
                    name:userName,
                    streetAddress,
                    phone,
                    pinCode,
                    city,
                    country
                }),
            });
            if(response.ok){
                resolve();
            } else {
                reject();
            }
        })
        await toast.promise(savingPromise, {
            loading: 'Saving...',
            success: 'Saved!!',
            error: 'Error',
        })
        
    }

    async function handleFileChange(ev){
        ev.preventDefault();
        const files = ev.target.files;
        if(files?.length === 1){
            const data = new FormData;
            data.set("files",files[0]);

            await fetch("/api/upload", {
                method: "POST",
                body: data,
                
            });
        }
    }

    if(status === "loading" || !profileFetched){
        return "loading..."
    }
    if(status === "unauthenticated"){
        return redirect("/login");
    }

    
  return (
    <section className="mt-8">
        <UserTabs isAdmin={isAdmin}/>
        
        <div className="max-w-md mx-auto mt-4"> 
            <div className="grid gap-2"
                style={{gridTemplateColumns:'.3fr .7fr'}}
            >
                    <div className="rounded-lg p-2">
                        {image && (
                            <Image className="rounded-lg  mb-1 "
                            src={image} alt="user image" width={250} height={250}/>
                        )}
                        <label>
                             <input type="file" className="hidden" onChange={handleFileChange}/>
                             <span className="block border rounded-lg p-2 border-gray-300 text-center cursor-pointer">Edit</span>
                        </label>
                       
                    </div>
                
                <form className="grow" onSubmit={handleProfileInfoUpdate}>
                    <label>First and last name</label>
                    <input
                        style={{"margin": 0}}
                        type="text" placeholder="First name and Last name"
                        value={userName} onChange={ev=>setUsername(ev.target.value)}
                    />
                    <label>Email</label>
                    <input 
                        style={{"margin": 0}}
                        type="email" disabled="true" 
                        value={session.data.user.email}
                        placeholder="email"
                    />
                    <label>Phone Number</label>
                    <input 
                        style={{"margin": 0}}
                        type="tel" placeholder="Phone Number" 
                        value={phone} onChange={ev=>setPhone(ev.target.value)}
                    />
                    <label>Street address</label>
                    <input 
                        style={{"margin": 0}}
                        type="text" placeholder="Street address" 
                        value={streetAddress} onChange={ev=>setStreetAddress(ev.target.value)}
                    />
                    <div className="flex gap-2" >
                        <div>
                            <label>Pin-Code</label>
                            <input 
                                style={{"margin": 0}}
                                type="text" placeholder="Pin Code" 
                                value={pinCode} onChange={ev=>setPinCode(ev.target.value)}    
                            />  
                        </div>
                        <div>
                            <label>City</label>
                            <input 
                                style={{"margin": 0}}
                                type="text" placeholder="City"
                                value={city} onChange={ev=>setCity(ev.target.value)}  
                            />
                        </div>
                        
                    </div>
                    <label>Country</label>
                    <input  
                        style={{"margin": 0}}
                        type="text" placeholder="Country"
                        value={country} onChange={ev=>setCountry(ev.target.value)}  
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ProfilePage