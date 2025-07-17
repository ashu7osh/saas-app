import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.action";
import {getSubjectColor} from "@/lib/utils";
import CompanionsList from "@/components/CompanionList";

// const Page = async () => {
//     const companions = await getAllCompanions({limit: 3});
//     const recentSessionCompnaionss = await getRecentSessions(10);
//   return (
//     <main>
//       <h1> Popular Companions</h1>
//         <section className="home-section">
//             {companions.map((companion) => (
//                 <CompanionCard
//                     key={companion.id}
//                     {...companion}
//                     color={getSubjectColor(companion.subject)}
//                 />
//             ))}
//
//         <section className='home-section'>
//             <CompanionList
//                 title = "Recently c ompleted sessions"
//                 companions = {recentSessions}
//                 classNames="w-2/3 max-lg:w-full"
//             />
//             <CTA/>
//         </section>
//     </main>
//   )
// }
//
// export default Page

const Page = async () => {
    const companions = await getAllCompanions({ limit: 3 });
    const recentSessionsCompanions = await getRecentSessions(10);

    return (
        <main>
            <h1>Popular Companions</h1>

            <section className="home-section">
                {companions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}

            </section>

            <section className="home-section">
                <CompanionsList
                    title="Recently completed sessions"
                    companions={recentSessionsCompanions}
                    classNames="w-2/3 max-lg:w-full"
                />
                <CTA />
            </section>
        </main>
    )
}

export default Page