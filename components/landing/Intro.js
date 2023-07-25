
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {

    return (
        <div className="bg-intro-persa w-full h-screen bg-cover">
            <div className="bg-gradient-to-t from-black to-gray-600 w-full h-screen opacity-70 flex justify-center items-center">
                <div className="flex flex-col items-center opacity-100">
                    <Image src="./logo-persa.svg" width={384} height={384}></Image>
                    <h1 className="text-3xl my-5 text-white">Hi! Welcome... We Are PERSA Sambirejo.</h1>
                    <div className="my-6 flex gap-6">
                        <Link href='/'>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_809_2)">
                                    <path d="M28.875 0H13.125C9.64403 0 6.30564 1.38281 3.84422 3.84422C1.38281 6.30564 0 9.64403 0 13.125L0 28.875C0 32.356 1.38281 35.6944 3.84422 38.1558C6.30564 40.6172 9.64403 42 13.125 42H28.875C32.356 42 35.6944 40.6172 38.1558 38.1558C40.6172 35.6944 42 32.356 42 28.875V13.125C42 9.64403 40.6172 6.30564 38.1558 3.84422C35.6944 1.38281 32.356 0 28.875 0ZM38.0625 28.875C38.0625 33.9412 33.9412 38.0625 28.875 38.0625H13.125C8.05875 38.0625 3.9375 33.9412 3.9375 28.875V13.125C3.9375 8.05875 8.05875 3.9375 13.125 3.9375H28.875C33.9412 3.9375 38.0625 8.05875 38.0625 13.125V28.875Z" fill="url(#paint0_linear_809_2)"/>
                                    <path d="M21 10.5C18.2152 10.5 15.5445 11.6062 13.5754 13.5754C11.6062 15.5445 10.5 18.2152 10.5 21C10.5 23.7848 11.6062 26.4555 13.5754 28.4246C15.5445 30.3938 18.2152 31.5 21 31.5C23.7848 31.5 26.4555 30.3938 28.4246 28.4246C30.3938 26.4555 31.5 23.7848 31.5 21C31.5 18.2152 30.3938 15.5445 28.4246 13.5754C26.4555 11.6062 23.7848 10.5 21 10.5ZM21 27.5625C19.2602 27.5604 17.5922 26.8683 16.3619 25.6381C15.1317 24.4078 14.4396 22.7398 14.4375 21C14.4375 17.3801 17.3828 14.4375 21 14.4375C24.6173 14.4375 27.5625 17.3801 27.5625 21C27.5625 24.6173 24.6173 27.5625 21 27.5625Z" fill="url(#paint1_linear_809_2)"/>
                                    <path d="M32.2876 11.1116C33.0603 11.1116 33.6867 10.4852 33.6867 9.71249C33.6867 8.93978 33.0603 8.31337 32.2876 8.31337C31.5148 8.31337 30.8884 8.93978 30.8884 9.71249C30.8884 10.4852 31.5148 11.1116 32.2876 11.1116Z" fill="url(#paint2_linear_809_2)"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_809_2" x1="3.843" y1="38.157" x2="38.157" y2="3.843" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFC107"/>
                                    <stop offset="0.507" stop-color="#F44336"/>
                                    <stop offset="0.99" stop-color="#9C27B0"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_809_2" x1="13.5765" y1="28.4235" x2="28.4235" y2="13.5765" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFC107"/>
                                    <stop offset="0.507" stop-color="#F44336"/>
                                    <stop offset="0.99" stop-color="#9C27B0"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_809_2" x1="31.2979" y1="10.7021" x2="33.2772" y2="8.72287" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFC107"/>
                                    <stop offset="0.507" stop-color="#F44336"/>
                                    <stop offset="0.99" stop-color="#9C27B0"/>
                                    </linearGradient>
                                    <clipPath id="clip0_809_2">
                                    <rect width="42" height="42" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link href='/'>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42 9.28988C40.4201 9.97895 38.7492 10.4369 37.0387 10.6496C38.8413 9.58028 40.189 7.88698 40.8266 5.8905C39.1388 6.89151 37.2922 7.59643 35.3666 7.97475C34.186 6.71417 32.6536 5.83779 30.9684 5.45946C29.2832 5.08114 27.5233 5.21835 25.9171 5.85329C24.3109 6.48823 22.9328 7.59153 21.9619 9.01986C20.9909 10.4482 20.4719 12.1355 20.4724 13.8626C20.4724 14.5451 20.5301 15.2014 20.6719 15.8261C17.2465 15.6582 13.8951 14.7692 10.8368 13.2172C7.77852 11.6652 5.08225 9.48522 2.92425 6.81975C1.81865 8.71463 1.47685 10.9597 1.96844 13.0977C2.46004 15.2358 3.74806 17.1061 5.57025 18.3278C4.20724 18.2912 2.87299 17.9275 1.68 17.2673V17.3618C1.68228 19.35 2.3695 21.2768 3.62596 22.8177C4.88242 24.3586 6.6314 25.4196 8.5785 25.8221C7.84189 26.0163 7.08274 26.1116 6.321 26.1056C5.77392 26.1154 5.22739 26.0661 4.69088 25.9586C5.24722 27.6676 6.31966 29.162 7.76053 30.2362C9.20141 31.3104 10.9398 31.9115 12.7365 31.9568C9.68871 34.3404 5.92981 35.6334 2.06063 35.6291C1.3545 35.6291 0.67725 35.5976 0 35.511C3.93719 38.0482 8.52515 39.3903 13.209 39.375C29.0535 39.375 37.716 26.25 37.716 14.8733C37.716 14.4926 37.7029 14.1251 37.6845 13.7603C39.3828 12.5448 40.8452 11.0299 42 9.28988Z" fill="#03A9F4"/>
                            </svg>
                        </Link>
                        <Link href='/'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.4001 21.68V16C35.7401 16 33.7101 15.29 32.4001 13.91C31.0556 12.335 30.3023 10.3405 30.2701 8.27V7.86L24.9001 7.73V30.8C24.7159 31.8066 24.2273 32.7324 23.5002 33.4524C22.7732 34.1725 21.8427 34.6522 20.8344 34.8267C19.8262 35.0012 18.7886 34.8621 17.8618 34.4282C16.9351 33.9944 16.1638 33.2866 15.652 32.4005C15.1403 31.5144 14.9127 30.4926 15 29.4731C15.0874 28.4535 15.4855 27.4853 16.1405 26.6992C16.7955 25.9131 17.676 25.3468 18.6631 25.0769C19.6501 24.8071 20.6962 24.8465 21.6601 25.19V19.69C21.0981 19.5979 20.5296 19.5511 19.9601 19.55C17.9111 19.55 15.9081 20.1576 14.2044 21.296C12.5007 22.4343 11.1728 24.0524 10.3887 25.9454C9.60459 27.8384 9.39942 29.9215 9.79917 31.9311C10.1989 33.9408 11.1856 35.7868 12.6345 37.2356C14.0833 38.6845 15.9293 39.6712 17.939 40.0709C19.9486 40.4707 22.0317 40.2655 23.9247 39.4814C25.8177 38.6973 27.4358 37.3694 28.5741 35.6657C29.7125 33.962 30.3201 31.959 30.3201 29.91C30.319 29.4854 30.2923 29.0613 30.2401 28.64V19.49C32.6819 21.0149 35.5229 21.7774 38.4001 21.68Z" fill="white" fill-opacity="0.52"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="text-3xl text-white opacity-60">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;