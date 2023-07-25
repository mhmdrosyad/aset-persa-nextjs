import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })
import LandingHeader from './LandingHeader'
import Intro from './Intro'

const LandingLayout = ({ children }) => {
    return (
        <div className={`text-gray-600 ${montserrat.className}`}>
            <LandingHeader />
            <Intro />
            <main className="max-w-3xl mx-auto px-3 lg:px-8">
                {children}
            </main>
        </div>
    )
}

export default LandingLayout;