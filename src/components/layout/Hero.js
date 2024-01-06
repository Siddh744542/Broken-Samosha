import Image from "next/image"
import Right from "../icons/Right"
const Hero = () => {
  return (
    <section className="hero mt-4">
        <div className="py-12">
            <h1 className="text-4xl font-semibold">
                Flavour of India: <br/>
                <span className="text-primary">Broken Samosha</span> Cripsy and Cultural
            </h1>
            <p className="my-6 text-gray-500 text-sm">Broken Samosha invites you to savor the spiced-up journey
                - where crunchy tale meet rich Indian Flavours
            </p> 
            <div className="flex gap-4 text-sm">
                <button className="bg-primary flex justify-center border-0 gap-2 items-center uppercase text-white px-4 py-2 rounded-full"> 
                    Order Now
                    <Right />
                </button>
                <button className="flex border-0 items-center gap-2 py-2 text-gray-600 font-semibold"> 
                    learn more
                    <Right />    
                </button>
            </div>
        </div>
        
        <div className="relative">
             <Image src={"/broken-samosha.png"} layout="fill" objectFit="contain" alt="Broken Samosha" />
        </div>
       
    </section>
  
  )
}

export default Hero;