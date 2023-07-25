import Header from "./Header";
import Footer from "./Footer";
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

const Layout = ({ children }) => {
    return (
        <div className={`text-gray-600 ${montserrat.className}`}>
            <Header />
            <main className="max-w-3xl mx-auto px-3 lg:px-8">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;