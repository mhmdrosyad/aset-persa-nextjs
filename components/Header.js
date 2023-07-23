import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faUserLock } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center py-5 md:px-8 md:justify-between md:space-x-3 gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-16">
                        <a href="/" className="me-1 flex items-center">
                        <FontAwesomeIcon className="me-2" icon={faBolt} size="lg" style={{color: "#FDE047"}} />
                            <h1 className="text-xl font-semibold">ASET PERSA</h1>
                        </a>
                        <ul className="flex gap-8 text-neutral-600">
                            <li><Link href='/'>HOME</Link></li>
                            <li><Link href='/'>ABOUT</Link></li>
                        </ul>
                    </div>
                    <Link className='hidden sm:flex bg-red-600 hover:bg-red-700 text-white font-semibold flex gap-3 rounded-full py-2 px-6' href='/admin'>
                            <FontAwesomeIcon icon={faUserLock} />
                            ADMIN
                        </Link>
                </div>
            </div>
        </>
    )
}

export default Header;