import {Hero,CustomerReviews,Slider,Footer,PopularProducts,Services,Subscribe,SpecialOffer,SuperQuality } from "./components/index"
import Navbar from "./components/Navbar"
import { useState } from "react"

export default function App() {
const [display,setDisplay] = useState(false);

function handleclikc() {
    setDisplay(!display);
}
  return (<>
<Navbar clicked={handleclikc}/>
  <main className="realtive z-5 max-lg:w-full w-full">
    {display?(<Slider display={display}/>):null
    }
    <section className="xl:padding-l wide:padding-r padding-b">
    <Hero />
    </section>
    <section className="padding">
    <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10" >
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
      </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer />
    </section>

  </main>


    </>
  )
}