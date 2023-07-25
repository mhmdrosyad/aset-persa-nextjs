import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })
import LandingHeader from './LandingHeader'
import Intro from './Intro'
import LeaderSection from './LeaderSection'
import KabidSection from './KabidSection'
import VisiMisi from './VisiMisi'
import LandingFooter from './LandingFooter'

const LandingLayout = ({ children }) => {
    return (
        <div className={`text-gray-600 ${montserrat.className}`}>
            <LandingHeader />
            <Intro />
            <LeaderSection />
            <KabidSection />
            <VisiMisi />
            <main className="max-w-3xl mx-auto px-3 lg:px-8">
                {children}
            </main>
            <LandingFooter />
        </div>
    )
}

export default LandingLayout;