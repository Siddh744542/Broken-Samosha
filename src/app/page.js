
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
   <>
   <Hero/>
   <HomeMenu />
   <section className="text-center my-16">
    <SectionHeader 
      subHeader={"Our Story"}
      mainHeader={"About Us"}
    />
    <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
      <p>
      Fringilla urna porttitor rhoncus dolor purus non enim praesent.
       Euismod elementum nisi quis eleifend quam. Pellentesque nec nam aliquam
        sem et tortor. In nulla posuere sollicitudin aliquam. 
      </p>
      <p>
      d faucibus nisl tincidunt eget nullam non nisi. 
      Ullamcorper malesuada proin libero nunc consequat interdum varius.
      Tortor pretium viverra suspendisse potenti nullam ac.
      </p>
      <p>
      Consectetur adipiscing elit ut aliquam purus sit.
       Sit amet mattis vulputate enim nulla aliquet porttitor.
      </p>
    </div>
   </section>

   <section className="text-center my-8">
      <SectionHeader 
        subHeader={"Don\'t hesitate"}
        mainHeader={"Contact Us"}
      />
      <div className="mt-8">
        <a href="tel:+918987912345" className="text-4xl text-gray-500 underline">
          +91 8987912345
        </a>
      </div>
   </section>
   
   </>
  )
}
