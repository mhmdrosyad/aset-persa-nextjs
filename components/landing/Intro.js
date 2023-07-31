
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {

    return (
        <div className="bg-intro-persa w-full sm:h-screen bg-cover bg-center lg:bg-top">
            <div className="bg-gradient-to-t from-black to-gray-700 w-full sm:h-screen opacity-70 flex justify-center items-center">
                <div className="flex flex-col items-center opacity-100 mt-24 px-3">
                    <Image alt="PERSA SAMBIREJO" className="animate__animated animate__bounceInDown w-48 h-48 lg:w-auto lg:h-auto" src="./logo-persa.svg" width={384} height={384}></Image>
                    <h1 className="animate__animated animate__fadeInUpBig text-xl lg:text-3xl my-5 text-white text-center">Hi! Welcome... We Are PERSA Sambirejo.</h1>
                    <div className="my-6 flex gap-10 items-center">
                        <Link href='https://instagram.com/persa_sambirejo/' target="_blank">
                            <Image className="hover:-translate-y-2 hover:brightness-125 ease-in duration-200 h-8 w-8 md:h-fit md:w-fit" src='/instagram.svg' alt="instagram persa" width={42} height={42} />
                        </Link>
                        <Link href='https://twitter.com/persa_sambirejo' target="_blank">
                        <Image className="hover:-translate-y-2 hover:brightness-125 ease-in duration-200 h-8 w-8 md:h-fit md:w-fit" src='/twitter.svg' alt="twitter persa" width={42} height={42} />

                        </Link>
                        <Link href='/'>
                        <Image className="hover:-translate-y-2 hover:brightness-125 ease-in duration-200 h-8 w-8 md:h-fit md:w-fit" src='/tiktok.svg' alt="tiktok persa" width={48} height={48} />
                        </Link>
                        <Link href='https://www.youtube.com/@persasambirejo5112' target="_blank">
                        <Image className="hover:-translate-y-2 hover:brightness-125 ease-in duration-200 h-8 w-8 md:h-fit md:w-fit" src='/youtube.svg' alt="youtube persa" width={51} height={36} />
                        </Link>
                    </div>
                    <div className="animate-bounce text-xl lg:text-3xl text-white opacity-60">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;