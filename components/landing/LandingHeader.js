import Link from "next/link";

const LandingHeader = () => {
    return (
        <>
            <div className="animate__animated animate__fadeIn absolute top-0 left-0 w-full z-20">
                <div className="max-w-7xl mx-auto flex justify-center items-center py-4 md:px-8 md:justify-between md:space-x-3 gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-16">
                        <ul className="flex gap-8 text-white">
                            <li><Link href='/'>HOME</Link></li>
                            <li><Link href='/aset'>ASET</Link></li>
                        </ul>
                    </div>
                    <div className="md:hover:translate-y-2 md:hover:bg-yellow-500 duration-200 md:bg-yellow-400 md:py-2 px-6 md:text-neutral-700">
                        <Link href="/">LOGIN</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingHeader;