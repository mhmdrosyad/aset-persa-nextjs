import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })
import LandingHeader from './LandingHeader'
import Intro from './Intro'
import LeaderSection from './LeaderSection'
import KabidSection from './KabidSection'
import VisiMisi from './VisiMisi'
import LandingFooter from './LandingFooter'

import 'animate.css';
import AboutPersa from './AboutPersa'
import PenasihatSection from './PenasihatSection'

const LandingLayout = ({ children }) => {
    return (
        <div className={`bg-neutral-900 text-white ${montserrat.className}`}>
            <LandingHeader />
            <Intro />
            <LeaderSection />
            <KabidSection />
            <AboutPersa />
            <PenasihatSection />
            <VisiMisi />
            <main className="max-w-7xl mx-auto px-8 lg:px-0 py-12 mb-48">
                {children}
            </main>
            <LandingFooter />
        </div>
    )
}

export default LandingLayout;