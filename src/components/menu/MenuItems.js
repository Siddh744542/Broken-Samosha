
const MenuItems = () => {
  return (
    <div className="bg-gray-200 p-4 text-center rounded-lg ground
     hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className="">
            <img src="/broken-samosha.png" className="max-h-auto max-h-24 block mx-auto" alt="samosha" />
        </div>
        
        <h4 className="font-semibold my-3 text-xl">
             Samosha 
        </h4>
        <p className="text-gray-500 text-sm" >
        A crispy delight with a flavorful filling, offering the perfect blend of crunch and spice.
        </p>
        <button className="bg-primary border-0 text-white rounded-full px-8 py-2 mt-4">
            Add to Cart ₹10
        </button>
    </div>
  )
}

export default MenuItems