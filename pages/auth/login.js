import LoginForm from "@/components/LoginForm";
import Head from "next/head";
import { useContext } from "react";
import AuthContext from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] })
import Link from "next/link";

const Add = () => {
    const router = useRouter();
    const { isLoggedIn } = useContext(AuthContext);
    if(isLoggedIn) {
        router.push('/admin')
    }

    return (
        <div className={`text-gray-600 flex flex-col items-center justify-center m-4 ${montserrat.className}`}>
            <Head><title>Login</title></Head>
            {isLoggedIn ? (<div>Anda sudah login</div>) : (<LoginForm />) }
            <p className="text-center mt-12 flex">COPYRIGHT &copy; 2023 &nbsp;<Link href='/'>PERSA</Link></p>
        </div>
    )
}

export default Add;