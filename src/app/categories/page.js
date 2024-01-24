"use client";
import UserTabs from "@/components/layout/UserTabs"
import useProfile from "@/components/useProfile"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Categories = () => {
    const [categoryName, setCategoryName] = useState("");
    const [categories, setCategories] = useState("");
    const {loading:profileLoading, data:profileData} = useProfile();
    const [editedCategory, setEditedCategory] = useState(null);


    useEffect(()=>{
        fetchCategories();
    },[])

    function fetchCategories(){
        fetch("/api/categories").then(res=>{
            res.json().then(cat => {
                setCategories(cat)
            })
        })
    }

    async function handleCategorySubmit(ev){
        ev.preventDefault();
        const creationPromise = new Promise( async (resolve, reject)=>{
            const data = {name:categoryName}
            if(editedCategory){
                data._id = editedCategory._id;
            }
            const response = await fetch("/api/categories",{
                method: editedCategory? "PUT" : "POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify(data),
            });
            setCategoryName("");
            fetchCategories();
            setEditedCategory(null);
            if(response.ok)
                resolve();
            else 
                reject();
        });
        await toast.promise(creationPromise,{
            loading: editedCategory 
                        ? "Updating category..."
                        : "Creating new Category...",
            success: editedCategory 
                        ? "Category Updated"
                        : "Category created",
            error:"Error"
        })
        

    }

    if(profileLoading){
        return "Loading User Info...";
    }

    if(!profileData.admin){
        return "Not an Admin"
    }
  return (
    <section className="mt-8 max-w-md mx-auto">
        <UserTabs isAdmin={true}/>
        <form className="mt-8" onSubmit={handleCategorySubmit}>
            <div className="flex gap-2 items-end">
                <div className="grow">
                    <label>
                        {editedCategory? "Update Category" :"New Category name"}
                        {editedCategory && (
                            <>: <b>{editedCategory.name}</b></>
                        )}
                    </label>
                    <input type="text" value={categoryName}
                        onChange={(ev)=>setCategoryName(ev.target.value)}
                    />
                </div>
                <div className="pb-2">
                    <button className="border" type="submit">
                        {editedCategory ? "Update" : "Create" } 
                    </button>
                </div>
            </div>
        </form>
        <div className="flex-column">
            <h2 className="text-sm text-gray-500 mt-8">Edit category:</h2>
            {categories?.length>0 && categories.map(c=>(
                // eslint-disable-next-line react/jsx-key
                <button
                    onClick={()=>{
                        setEditedCategory(c);
                        setCategoryName(c.name);
                    }} 
                    className="bg-gray-200 rounded-xl p-2 px-4 flex mb-1 cursor-pointer">
                    <span>{c.name}</span>
                </button>
            ))}
        </div>
    </section>
  )
}

export default Categories