"use client";

import UserTabs from "@/components/layout/UserTabs";
import useProfile from "@/components/useProfile"

export default function MenuItemsPage(){

    const {loading, data} = useProfile();

    if(loading){
        return "Loading User Info...";
    }

    if(!data.admin){
        return "Not an Admin"
    }

    return (
        <section className="mt-8">
            <UserTabs isAdmin={data.admin} />
            <form className="mt-8 max-w-md mx-auto">
                <div className="grid items-start gap-4"
                    style={{gridTemplateColumns:'.3fr .7fr'}}
                >
                    <div >
                        image
                    </div>
                    <div className="grow">
                        <label>Item name</label>
                        <input type="text"/>
                        <label>Description</label>
                        <input type="text"/>
                        <label>Base price</label>
                        <input type="text"/>
                        <button type="submit">Save</button>
                    </div>
                </div>
            </form>
        </section>
    )
}