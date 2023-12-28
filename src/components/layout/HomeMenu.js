import Image from "next/image"
import MenuItems from "../menu/MenuItems"
import SectionHeader from "./SectionHeader"
const HomeMenu = () => {
  return (
    <section>
        {/* <div className="absolute left-0 right-0 w-full justify-start">
            <div className="h-50 w-50 absolute -left-12 text-left ">
                <Image src="/green-chatney.png" alt="chatney" layout="fill" objectFit="contain" />
            </div>
        </div> */}
        <div className="text-center mb-4">
          <SectionHeader subHeader="checkout" mainHeader="Menu" /> 
        </div>
        <div className="grid grid-cols-3 gap-4">
            <MenuItems />
            <MenuItems />
            <MenuItems />
            <MenuItems />
            <MenuItems />
            <MenuItems />

        </div>
    </section>
  )
}

export default HomeMenu