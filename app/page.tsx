import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1> Popular Companions</h1>
      <section className='home-section'>
          <CompanionCard
            id="123"
            name="Neura the brainy Explorar"
            topic="Neural Network of the Brain"
            subject="Science"
            duration={45}
            color="#ffda6e"
          /><CompanionCard
            id="456"
            name="Countsy the number Wizard"
            topic="Derivation & Integrals"
            subject="maths"
            duration={30}
            color="#efd0ff"
          /><CompanionCard
            id="789"
            name="Verba the vocabulary builder"
            topic="Language"
            subject="English Literature"
            duration={30}
            color="#bde7ff"
          />
      </section>

        <section className='home-section'>
            <CompanionList
                title = "Recently c ompleted sessions"
                companions = {recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
            <CTA/>
        </section>
    </main>
  )
}

export default Page