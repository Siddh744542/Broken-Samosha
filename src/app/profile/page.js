"use client"
import { useSession } from "next-auth/react"
import Image from "next/image";
import { redirect } from "next/navigation";

const ProfilePage = () => {
    const session = useSession();
    const {status} = session;
    if(status === "loading"){
        return "loading..."
    }
    if(status === "unauthenticated"){
        return redirect("/login");
    }

    const userImage = session.data.user.image;
  return (
    <section className="mt-8">
        <h1 className="text-primary text-center text-4xl mb-4">
            Profile
        </h1>
        <form className="max-w-md mx-auto ">
            <div className="flex gap-4 items-center">
                <div>
                    <div className=" rounded-lg p-2">
                        <Image className="rounded-lg"
                            src={userImage} alt="user image" width={80} height={80}/>
                        <button type="button">Change Avatar</button>
                    </div>
                </div>
                
                <div className="grow">
                    <input type="text" placeholder="First name and Last name"/>
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    </section>
  )
}

export default ProfilePage