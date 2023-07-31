import Image from "next/image";
const LandingFooter = () => {
    return (
        <div className="w-full py-4 mt-6 bg-neutral-700 relative">
            <Image alt="footer" className="w-full absolute left-0 bottom-12" src='/for-footer.svg' width={1440} height={137} />
            <p className="text-center text-white">Copyright 2023 &copy; PERSA SAMBIREJO</p>
        </div>
    )
}

export default LandingFooter;