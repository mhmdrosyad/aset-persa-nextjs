import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LandingHeader = () => {
    return (
        <>
            <div className="absolute top-0 left-0 w-full z-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center py-4 md:px-8 md:justify-between md:space-x-3 gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-16">
                        <ul className="flex gap-8 text-white">
                            <li><Link href='/'>HOME</Link></li>
                            <li><Link href='/'>ABOUT</Link></li>
                            <li><Link href='/aset'>ASET PERSA</Link></li>
                        </ul>
                    </div>
                    <Link className='hidden sm:flex bg-red-600 hover:bg-red-700 text-white font-semibold flex gap-3 rounded-full py-2 px-6 items-center' href='/aset'>
                            <FontAwesomeIcon icon={faUser} />
                            LOGIN
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LandingHeader;